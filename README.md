# 📚 Book Store 

A full-stack **Book Store** web application built with the **MERN stack**:  
- **MongoDB** for database  
- **Express.js** for backend APIs  
- **React.js** for frontend  
- **Node.js** for server runtime  

The app allows users to **add books, view books, and delete books**.

---

## 🚀 Features
- Add new books with details  
- View all books in a list  
- Delete books from the store  
- RESTful API built with Express & MongoDB  
- React frontend with dynamic UI  
- Separate `frontend` and `backend` folders for clean structure  

---

## 📂 Project Structure
```text
Book_Store/
├── backend/          
│   ├── server.js     
│   ├── models/       
│   ├── routes/       
│
├── frontend/         
│   ├── src/         
│   ├── public/
│   └── package.json
│
└── README.md
```
---

## 🛠️ Installation & Setup
1. Clone the repo
```text
git clone https://github.com/saiparameshwarrao/Book_Store.git
cd Book_Store
```

2. Setup Backend (Express + MongoDB)
```text
cd backend
npm install
npm start
```
3. Setup Frontend (React)
```text
cd frontend
npm install
npm start
```

4. MongoDB Connection
Create a .env file inside backend/
```text
MONGO_URI=mongodb://localhost:27017/bookstore
PORT=5000
```
---
##  💡 Future Improvements
- Update/edit book details
- User authentication (login/signup)
- Deployment to cloud (Heroku, Render, Vercel)

