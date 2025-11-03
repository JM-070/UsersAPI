# 📝 Blog App

A full-stack **blog application** built using **Node.js**, **Express.js**, and **MongoDB**.  
This project allows users to create, edit, and manage blog posts with a simple and intuitive interface.

---

## 🚀 Features

- ✍️ Create, read, update, and delete (CRUD) blog posts  
- 🔒 User authentication and authorization  
- 💬 Comment system for readers  
- 🗂️ Category and tag-based post organization  
- 📅 Automatic timestamps for posts  
- 🌐 Responsive and user-friendly front-end interface  
- ⚙️ RESTful API built with Express.js  
- 🧾 MongoDB as the database  

---

## 🧰 Tech Stack

**Frontend:**  
- HTML5, CSS3, JavaScript  
- (Optional: React or EJS — specify based on your implementation)

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (via Mongoose)

**Other Tools:**  
- Git & GitHub for version control  
- Postman for API testing  
- dotenv for environment configuration  

---

## 🏗️ Project Setup

### 1. Clone the repository
```bash
git clone https://github.com/JM-070/blog-app.git
cd blog-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create an environment file
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the server
```bash
npm start
```

Or in development mode:
```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/posts` | Get all blog posts |
| GET | `/api/posts/:id` | Get a single post by ID |
| POST | `/api/posts` | Create a new blog post |
| PUT | `/api/posts/:id` | Update an existing post |
| DELETE | `/api/posts/:id` | Delete a blog post |
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Authenticate user and return token |
| GET | `/api/users/:id` | Get user details |

---

## 🧑‍💻 Folder Structure

```
blog-app/
├── models/
│   ├── Post.js
│   └── User.js
├── routes/
│   ├── postRoutes.js
│   └── userRoutes.js
├── controllers/
│   ├── postController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── server.js
├── package.json
└── README.md
```

---

## 🧪 Testing

You can test the APIs using **Postman** or **cURL**.  
Example:
```bash
GET http://localhost:5000/api/posts
```

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## 💡 Author

**👨‍💻 Jervin Matthew**  
🔗 [GitHub Profile](https://github.com/JM-070)  
📧 [your.email@example.com]

---

⭐ **If you like this project, give it a star on GitHub!**
