const express = require('express');
const app = express();
const notificationsRouter = require('./routes/notifications.js');
const port = 3000;


app.use(express.json());
app.use('/notifications', notificationsRouter);

app.listen(port,()=>{
    console.log('Crypto Notifications Service Running');
})