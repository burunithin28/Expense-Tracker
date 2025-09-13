💰 Expense Tracker

A full-stack MERN application to manage income and expenses with interactive charts, reports, and a mobile-friendly interface.

🔗 Live Demo: 
🎥 Demo Video: 

🚀 Features

🔐 User Authentication – Secure login & sign-up using JWT authentication
📊 Dashboard Overview – Quick summary of Total Balance, Income, and Expenses
💰 Income Management – Add, view, delete, and export income sources
💸 Expense Management – Add, view, delete, and export expenses with category tracking
📈 Interactive Charts – Visual insights with Bar, Pie, and Line charts
🕒 Recent Transactions – Displays the latest income & expenses for quick access
📑 Reports – Export all data to Excel format for financial reporting
📱 Mobile Responsive UI – Works seamlessly on desktop, tablet, and mobile
🧭 Intuitive Navigation – Sidebar with easy access to all sections
🗑️ Quick Delete – Hover over cards to reveal delete button
🚪 Logout Functionality – Securely end user sessions

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB Atlas
Authentication: JWT (JSON Web Token)
Charts: Recharts

🏗️ Project Architecture

flowchart TD
    A[Frontend - React + TailwindCSS] -->|API Calls| B[Backend - Node.js + Express]
    B -->|Queries| C[MongoDB Atlas]
    B -->|JWT Authentication| D[Auth Service]
    A -->|Displays Data| E[Charts & Dashboard]

📸 Screenshots



<img width="1920" height="880" alt="signup" src="https://github.com/user-attachments/assets/490b5690-1b2d-40d0-8dbf-f1b90ec0ea82" />
<img width="1920" height="874" alt="login" src="https://github.com/user-attachments/assets/485fb0cb-866a-40a9-88bf-ea7890e5c41a" />
<img width="1920" height="871" alt="dashboard" src="https://github.com/user-attachments/assets/8738d7f7-0137-4b80-99c0-1630cdb0f602" />
<img width="1898" height="879" alt="dashboard1" src="https://github.com/user-attachments/assets/4bd03a0e-4ae9-4732-93ec-6e00128c8609" />
<img width="1898" height="879" alt="income" src="https://github.com/user-attachments/assets/7da946de-f8c1-4d82-aef5-f10708187680" />
<img width="1920" height="878" alt="expense" src="https://github.com/user-attachments/assets/5b4d7d64-2909-4781-8f43-08510faa1a4f" />




⚡ Getting Started
Clone the Repository
git clone https://github.com/burunithin28/Expense-Tracker
cd expense-tracker

Install Dependencies
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install

Setup Environment Variables

Create a .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000

Run the Project
# Backend
cd backend
npm start

# Frontend
cd frontend
npm start

📦 Deployment

Frontend deployed on: 

Backend deployed on: [

Database: MongoDB Atlas

👤 Author

BURU NITHIN

💼 https://www.linkedin.com/in/burunithin

🌐 Portfolio

