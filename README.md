# GetaPet

## Project Overview
GetaPet is a modern web application designed to help pet lovers connect with local pet adoption agencies, as well as provide resources for pet care. Built with a tech stack that includes React, Node.js, and MongoDB, this application offers a rich user experience and seamless interaction.

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Image Upload:** Multer for handling multipart/form-data

## Features
- User registration and login with JWT authentication.
- Browse pet listings with images and detailed information.
- Upload images when creating or updating pet listings.
- Admin dashboard for managing pet listings and user accounts.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Tomestre/GetaPet.git
   cd GetaPet
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Create a `.env` file in the server directory to store your environment variables. Example:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

## How to Run
1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. In a new terminal, start the React frontend:
   ```bash
   cd client
   npm start
   ```
3. Open your browser and go to `http://localhost:3000` to see the application in action.

## Project Structure
```
GetaPet/
├── client/            # React frontend
│   └── ...           # Frontend components, pages, styles, etc.
├── server/            # Node.js backend
│   ├── controllers/   # Logic for handling API requests
│   ├── models/        # MongoDB models
│   ├── routes/        # Express routes
│   └── middleware/    # JWT authentication middleware
├── .gitignore         # Git ignore file
├── README.md          # This documentation
└── package.json       # Dependencies
```