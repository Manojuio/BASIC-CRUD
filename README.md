# BASIC-CRUD API

> REST API for basic CRUD operations with user authentication and JWT authorization.

## Overview

A production-ready backend API built with **Node.js, Express, and MongoDB** that demonstrates core concepts of REST API design, authentication, database modeling, and middleware implementation.

## Features

✅ **User Authentication** - JWT-based login and signup  
✅ **CRUD Operations** - Create, Read, Update, Delete resources  
✅ **Authorization** - Role-based access control (user can only manage own resources)  
✅ **Input Validation** - Request body validation and sanitization  
✅ **Error Handling** - Centralized error handling middleware  
✅ **Database** - MongoDB with Mongoose ODM  
✅ **Security** - Password hashing, secure headers, CORS enabled  

## Tech Stack

```
Backend:    Node.js, Express.js
Database:   MongoDB, Mongoose
Auth:       JWT (JSON Web Tokens)
Validation: Mongoose schema validation
Tools:      Postman, Git, VS Code
```

## Project Structure

```
BASIC-CRUD/
├── src/
│   ├── models/              # Mongoose schemas
│   │   ├── User.js
│   │   └── Resource.js
│   ├── routes/              # API endpoints
│   │   ├── auth.js
│   │   └── resources.js
│   ├── controllers/         # Business logic
│   │   ├── authController.js
│   │   └── resourceController.js
│   ├── middlewares/         # Custom middleware
│   │   ├── auth.js          # JWT verification
│   │   ├── errorHandler.js  # Error handling
│   │   └── validation.js    # Input validation
│   └── config/
│       └── database.js      # MongoDB connection
├── server.js                # Server entry point
├── app.js                   # Express app setup
├── .env                     # Environment variables
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Manojuio/BASIC-CRUD.git
cd BASIC-CRUD
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/basic-crud
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

4. **Start the server**
```bash
npm start
# For development with auto-reload:
npm run dev
```

Server runs on: `http://localhost:5000`

## API Endpoints

### Authentication

**POST** `/api/auth/signup`  
Create a new user account.
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**POST** `/api/auth/login`  
Login with email and password.
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Resources (CRUD)

**GET** `/api/resources`  
Fetch all resources (requires authentication).

**GET** `/api/resources/:id`  
Fetch a single resource by ID.

**POST** `/api/resources`  
Create a new resource (requires authentication).
```json
{
  "title": "My Resource",
  "description": "Resource description",
  "content": "Resource content"
}
```

**PUT** `/api/resources/:id`  
Update a resource (requires authentication & ownership).

**DELETE** `/api/resources/:id`  
Delete a resource (requires authentication & ownership).

## Usage Example

### Using Postman or cURL

1. **Signup**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"password123"}'
```

2. **Login & Get Token**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

3. **Create Resource (with token)**
```bash
curl -X POST http://localhost:5000/api/resources \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"New Resource","description":"Test"}'
```

## Key Concepts Demonstrated

- **JWT Authentication**: Stateless user authentication
- **Middleware Architecture**: Request processing pipeline
- **MongoDB Modeling**: Schema design with Mongoose
- **RESTful Design**: Proper HTTP methods and status codes
- **Error Handling**: Centralized error management
- **Validation**: Input sanitization and validation
- **Authorization**: Role-based access control

## Next Steps (Enhancements)

- [ ] Add refresh tokens for better security
- [ ] Implement role-based access control (RBAC)
- [ ] Add API documentation with Swagger/OpenAPI
- [ ] Write unit tests with Jest/Supertest
- [ ] Add logging with Winston/Morgan
- [ ] Deploy to Render/Railway/Heroku
- [ ] Add email verification on signup
- [ ] Implement rate limiting

## Learning Resources

- [Express.js Docs](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [JWT Guide](https://jwt.io/introduction)
- [REST API Best Practices](https://restfulapi.net/)

## Connect

📧 Email: undrallamanojkumar@gmail.com  
💼 LinkedIn: [linkedin.com/in/manoj-kumar](https://www.linkedin.com/in/manoj-kumar-632b26231)  

---

**Built with ❤️ for learning and internship preparation.**
