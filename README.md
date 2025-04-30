# Crypto Notification Service

- Create a notification (price, volume, % change, emails)
- View all notifications
- Update or delete a notification


1. Create Notification
POST /notifications

Request Body:
{
  "price": 65000,
  "percentageChange": 2.5,
  "volume": 1000000,
  "emails": ["test@example.com", "hritambh@bitgo.com"]
}

curl -X POST http://localhost:3000/notifications \
-H "Content-Type: application/json" \
-d '{"price": 65000, "percentageChange": 2.5, "volume": 1000000, "emails": ["hritambh@bitgo.com"]}'

Response:
{"message":"Notification Created","notification":{"id":"57f026c1-a6f2-43fa-81ee-4ec3fc239e3d","price":65000,"percentageChange":2.5,"volume":1000000,"emails":["hritambh@bitgo.com"],"status":"Pending","createdAt":"2025-04-30T06:20:28.517Z"}}


2. Send Notification
POST /notifications/:id/send

curl -X POST http://localhost:3000/notifications/57f026c1-a6f2-43fa-81ee-4ec3fc239e3d/send

Response:
{"message":"Notifcation sent",
"notification":
{"id":"57f026c1-a6f2-43fa-81ee-4ec3fc239e3d","price":65000,"percentageChange":2.5,"volume":1000000,"emails":["hritambh@bitgo.com"],"status":"Sent","createdAt":"2025-04-30T06:20:28.517Z"}}

3. List All Notifications
GET /notifications

curl http://localhost:3000/notifications

Response:
[{"id":"57f026c1-a6f2-43fa-81ee-4ec3fc239e3d","price":65000,"percentageChange":2.5,"volume":1000000,"emails":["hritambh@bitgo.com"],"status":"Sent","createdAt":"2025-04-30T06:20:28.517Z"}]

4. Update Notification
PUT /notifications/:id

Sample Request Body:
{
  "price": 67000
}

curl -X PUT http://localhost:3000/notifications/57f026c1-a6f2-43fa-81ee-4ec3fc239e3d \
-H "Content-Type: application/json" \
-d '{"price": 67000}'

Response:
{"message":"Notification U[dated","notification":{"id":"57f026c1-a6f2-43fa-81ee-4ec3fc239e3d","price":67000,"percentageChange":2.5,"volume":1000000,"emails":["hritambh@bitgo.com"],"status":"Sent","createdAt":"2025-04-30T06:20:28.517Z","updatedAt":"2025-04-30T06:24:52.948Z"}}

5. Delete Notification
DELETE /notifications/:id

curl -X DELETE http://localhost:3000/notifications/57f026c1-a6f2-43fa-81ee-4ec3fc239e3d

Response:
{"message":"Notification Deleted"}