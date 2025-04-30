const express = require('express');
const router = express.Router();
const{v4:uuidv} = require('uuid');

const notifications = new Map();

router.post('/',(req,res)=>{
   const {price, percentageChange, volume, emails} = req.body;
    if(!price || !emails || !Array.isArray(emails)){
        return res.status(400).json({message: 'Missing  required fields'});
    }
    const id  = uuidv();
    console.log('UUID is', id);
    const notification ={
        id,
        price,
        percentageChange,
        volume,
        emails,
        status:'Pending',
        createdAt: new Date()
    }

    notifications.set(id, notification);
    res.status(200).json({message: 'Notification Created', notification});

});

router.post('/:id/send', (req,res)=>{
    const {id} = req.params;
    const notification = notifications.get(id);

    if(!notification){
        return res.status(404).json({message: 'Notification not found'});
    }

    console.log('Sending Notification')
    notification.status = 'Sent';
    notifications.set(id,notification);

    res.json({message:'Notifcation sent', notification})
});

router.get('/',(req,res)=>{
    res.json(Array.from(notifications.values()));
})

router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const existing = notifications.get(id);
    if(!existing){
        return res.status(404).json({message: 'Notification not found'});  
    }
    const updated = {
        ...existing,
        ...req.body,
        updatedAt:new Date()
    }

    notifications.set(id,updated);
    res.status(200).json({message: 'Notification U[dated', notification: updated});
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const deleted = notifications.delete(id);
    if(!deleted){
        return res.status(404).json({message: 'Notification not found'});  
    }
    res.status(200).json({message: 'Notification Deleted'});
})


module.exports = router;