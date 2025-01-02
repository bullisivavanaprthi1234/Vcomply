# Vcomply
E-COMMERCE PRODUCT CATALOG (BOOKS)

# Project Overview
The Book Catalog Application allows users to view a collection of books, search for books by name or category, and view detailed information about specific books.

# Technologies Used

**Frontend:** React, Next.js, Tailwind CSS
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas or Local MongoDB
**Deployment:** Vercel (Frontend), Render/Heroku (Backend)

First set up the backend followed by frontend

# Frontend Setup

Open the terminal (power shell)  in VSCODE

Navigate to the frontend folder: cd frontend 

Install dependencies: npm install

Create a .env.local file in the frontend directory and add the following: env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

Start the frontend development server: npm run dev

# Backend Setup (Enter the commands given)

Open the new terminal (power shell)  in VSCODE

Navigate to the backend folder:  cd backend

Install dependencies: npm install

Create a .env file in the backend directory and add the following: env

MONGODB_URI=your_mongodb_connection_string
PORT=5000

Start the backend server: npm start

Enter node server.js to start the backend.

If you face any scripting issues , Then enter **Set-ExecutionPolicy -ExecutionPolicy RemoteSigned** in the terminal

# Running the Application Locally

Start the Backend Server:  Navigate to the backend directory.


Run npm start. The server will start on http://localhost:5000.

Start the Frontend Server:  Navigate to the frontend directory.
Run npm run dev. The frontend will be available at http://localhost:3000.
Open http://localhost:3000 in your browser to view the application.


# Live Deployment Links

Frontend Deployment: https://vcomply-frontend.vercel.app/

Backend Deployment:https://vcomply-backend.onrender.com







