A simple RESTful API built with Node.js, Express, and MongoDB for managing books, users, and library records.
It allows CRUD operations on books, users, and borrowed items — perfect as a backend for a library management app.

🚀 Features

📖 Add, update, delete, and fetch books

👤 Manage library users

🔐 User authentication (JWT-based)

📅 Issue and return books

🧠 Organized MVC architecture (Models, Controllers, Routes)

⚙️ Environment variables using .env

🌐 Ready to deploy on Render, Vercel, or Railway

🏗️ Project Structure
library-api/
│
├── server.js
├── package.json
├── .env
│
├── config/
│   └── db.js              # MongoDB connection
│
├── models/
│   └── Book.js
│   └── User.js
│
├── controllers/
│   └── bookController.js
│   └── userController.js
│
├── routes/
│   └── bookRoutes.js
│   └── userRoutes.js
│
└── middleware/
    └── authMiddleware.js
