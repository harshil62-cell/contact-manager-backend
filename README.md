# 📇 Contact Management API

A secure and modular REST API for managing user contacts, built using **Node.js**, **Express.js**, **MongoDB**, and **JWT authentication**. This project allows users to register, login, and perform CRUD operations on their personal contact lists.

> ⚠️ **Work In Progress:** More features and enhancements will be added gradually.

---

## 🚀 Features

- 🔐 **JWT Authentication** (Register / Login / Get Current User)
- 📇 **Contact CRUD** (Create, Read, Update, Delete contacts)
- 📤 **Export Contacts to CSV** (via `/api/contacts/export`)
- 🎂 **Birthday Reminder Emails** sent to users
- 🧰 **Protected Routes** using middleware
- 📄 **Swagger UI Documentation** via `/api-docs`
- ✅ **Error Handling Middleware**
- 📦 Modular folder structure for scalability

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **dotenv**
- **Swagger (via YAML)**
- **fast-csv** (for CSV export)
- **nodemailer** (for birthday emails)
- **Postman** for manual testing

---

---

## 📖 API Documentation

Interactive Swagger UI is available at:

http://localhost:5000/api-docs


Documentation is defined using the [OpenAPI 3.0 Specification](https://swagger.io/specification/) via a `swagger.yaml` file.

---

## 🔐 Authentication

All contact routes are protected and require a Bearer token in the header:

Authorization: Bearer <your-token>


---

## 🧪 Running Locally

### 1. Clone the repo

bash
git clone https://github.com/harshil62-cell/contact-manager-backend.git
cd contact-manager-backend

### 2. Install dependencies

npm install

### 3. Set up environment variables

Create a .env file in the root with the following:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

### 4. Start the server

npm start

## 📌 API Endpoints Overview

| Method | Endpoint                | Description              | Auth Required |
|--------|-------------------------|--------------------------|----------------|
| POST   | `/api/users/register`   | Register a new user      | ❌             |
| POST   | `/api/users/login`      | Login and get JWT token  | ❌             |
| GET    | `/api/users/current`    | Get current user info    | ✅             |
| GET    | `/api/contacts`         | Get all contacts         | ✅             |
| POST   | `/api/contacts`         | Create a new contact     | ✅             |
| GET    | `/api/contacts/:id`     | Get a contact by ID      | ✅             |
| PUT    | `/api/contacts/:id`     | Update a contact by ID   | ✅             |
| DELETE | `/api/contacts/:id`     | Delete a contact by ID   | ✅             |
| GET    | `/api/contacts/export`  | Export contacts as CSV   | ✅             |

