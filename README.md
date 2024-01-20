# Social Media API

## Description

This project is a back-end solution for a social media application. It uses MongoDB, a NoSQL database, to handle large amounts of unstructured data efficiently. The API supports operations for users to post thoughts, react to friends' thoughts, and create a friend list. Express.js is used for routing, with MongoDB as the database and Mongoose as the ODM (Object Data Modeling) library.

The API is designed with scalability in mind, allowing for easy data retrieval and manipulation in a social media context. It showcases the use of a NoSQL database in handling flexible data models.

## Features

- CRUD operations for user and thought models.
- Ability to add and remove reactions to thoughts.
- Ability to add and remove friends from a user's friend list.
- Data validation and error handling.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/tyleryannes94/social-media-api.git
cd social-media-api
npm install 
```
After installation, start the server with:
```bash
npm start
```

The server will start running on localhost:3001.

## API Routes
### Users
GET /user: Get all users.
- eg. http://localhost:3001/user/
GET /user/:id: Get a single user by ID.
- eg. http://localhost:3001/user/65ab0754fd538e17b62f49f6
POST /user: Create a new user.
- eg. http://localhost:3001/user
- JSON: {
  "username": "test test for video 2342342323",
  "email": "tyler12356y43534@test.com"
}
PUT /user/:id: Update a user by ID.
- eg. http://localhost:3001/user/65ab2194ee5541a471227253
JSON: {
  "username": "Tyler-test for video",
  "email": "tyler-update12321321@test.com"
}
DELETE /user/:id: Delete a user by ID.
- eg. http://localhost:3001/user/65ab01745cbb37d2fb2b98c1

### Thoughts
GET /thought: Get all thoughts.
- eg. http://localhost:3001/thought
GET /thought/:id: Get a single thought by ID.
- eg. http://localhost:3001/thought/65ab20f7ee5541a471227223
POST /thought: Create a new thought.
- eg. http://localhost:3001/thought/
- JSON: {
  "username": "Tyler-34563",
  "thoughtText": "1,2,3,4"
}
PUT /thought/:id: Update a thought by ID.
- eg. http://localhost:3001/thought/65ab20f7ee5541a471227223
- JSON: {
	"thoughtText": "for testing purposes 213112",
	"username": "test123"
}
DELETE /thought/:id: Delete a thought by ID.
- eg. http://localhost:3001/thought/65ab20f7ee5541a471227223

### Reactions
POST /thought/:thoughtId/reactions: Add a reaction to a thought.
- eg. http://localhost:3001/thought/65ab015e5cbb37d2fb2b98bb/reactions/
- JSON: {
	"reactionBody": "this is required 45635423423",
	"username": "test123456"
}
DELETE /thought/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.
- eg. http://localhost:3001/thought/65ab015e5cbb37d2fb2b98bb/reactions/65ab2157ee5541a471227243

## Walkthrough Video
For a detailed walkthrough of the API, please visit this video link: https://www.loom.com/share/ab8ad353010a4fc68d6a93ab6a227391?sid=917f0215-a6d4-400e-8401-e893525dc72c

## License
MIT license