# Smart Notes Hub 🚀

A full-stack cloud-based notes management application built using React, Flask REST APIs, MongoDB Atlas, Render, and AWS cloud services.

---

# 🌐 Live Deployment

## Frontend (AWS S3)

http://bhakti-aws-demo-49.s3-website.ap-south-1.amazonaws.com

---

## Backend API (Render)

https://smart-notes-backend-rtl8.onrender.com

---

# 📌 Project Overview

Smart Notes Hub is a full-stack CRUD cloud application where users can:

✅ Create notes  
✅ View notes  
✅ Delete notes  
✅ Store notes permanently in MongoDB Atlas  
✅ Connect frontend and backend using REST APIs  
✅ Deploy frontend on AWS S3  
✅ Deploy backend on Render cloud platform

This project was developed to practice:

- Full-stack development
- React frontend architecture
- Flask backend APIs
- MongoDB Atlas integration
- AWS cloud deployment
- REST API communication
- Cloud application architecture

---

# ☁️ Cloud Architecture


React Frontend (AWS S3)
            ↓
Flask REST APIs (Render)
            ↓
MongoDB Atlas Cloud Database

🛠 Tech Stack
Frontend
React.js
Material UI
React Responsive
Vite
CSS

Backend
Python
Flask
Flask-CORS
Gunicorn

Database
MongoDB Atlas
PyMongo

Cloud & Deployment
AWS S3
Render
GitHub
MongoDB Atlas

✨ Features
Frontend Features
Responsive UI
Material UI components
Dynamic note rendering
Add notes form
Delete notes
REST API integration
Backend Features
REST API architecture
GET API
POST API
DELETE API
JSON communication
CORS enabled
Cloud deployment ready
Database Features
Cloud database storage
Persistent data storage
MongoDB CRUD operations
Real-time cloud integration


📁 Folder Structure
smart-notes-hub/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app.py
│   ├── db.py
│   ├── .env
│   ├── requirements.txt
│   └── venv/
│
├── .gitignore
└── README.md

# Frontend Setup ## Navigate To Frontend
bash
cd frontend
## Install Dependencies
bash
npm install
## Run Frontend
bash
npm run dev
Frontend runs on: http://localhost:5173


# Backend Setup ## Navigate To Backend
bash
cd backend
## Create Virtual Environment
bash
python -m venv venv
## Activate Virtual Environment ### Windows
bash
.\venv\Scripts\Activate
## Install Dependencies
bash
pip install flask flask-cors pymongo python-dotenv
## Run Backend
bash
python app.py
Backend runs on: http://127.0.0.1:5000


# MongoDB Atlas Setup 
1. Create MongoDB Atlas cluster 
2. Create database user 3
. Enable network access 
4. Copy MongoDB connection string 
5. Store connection string inside 
.env Example:
env
MONGO_URI=your_mongodb_connection_string


--- # API Endpoints | Method | Endpoint | Description | | ------ | ---------- | --------------- | | GET | /notes | Fetch all notes | | POST | /notes | Create new note | | DELETE | /notes/:id | Delete note | ---


🚀 Deployment Workflow
Frontend Deployment
Build React application
Upload dist files to AWS S3
Enable static website hosting
Configure bucket policy
Backend Deployment
Push backend code to GitHub
Connect GitHub repository with Render
Configure environment variables
Deploy Flask backend APIs


📚 Learning Outcomes

This project helped in understanding:
React components
Props and state management
useEffect and API calls
Flask REST APIs
Frontend-backend communication
MongoDB integration
Cloud database storage
AWS S3 deployment
Render backend deployment
Environment variables
CORS handling
Git and GitHub workflow
Full-stack cloud architecture


🔮 Future Improvements
User authentication
Update/Edit notes
Search functionality
Dark mode
AWS Lambda backend deployment
Terraform infrastructure automation
CI/CD pipeline integration
CloudFront CDN integration
Docker containerization
EC2 deployment


👩‍💻 Author
Bhakti S. Bhande

📄 License
This project is developed for learning and educational purposes.