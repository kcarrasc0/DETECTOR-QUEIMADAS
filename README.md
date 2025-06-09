# 🔥 FireVision Web App – Climate Awareness through Technology

A web-based application that uses **computer vision** to detect fire via webcam in real time. This educational project promotes awareness about the use of **AI and software** in addressing **wildfire risks** and **climate emergencies**. Built as a full-stack solution to demonstrate how technology can drive **social and environmental impact**.

---

## 🎯 Project Goals

- 🧠 Educate students about **AI**, **machine learning**, and **web development**
- 🔥 Show how software can **monitor environmental risks**, such as wildfires
- 🌱 Inspire climate awareness and **tech-for-good** initiatives
- 🎨 Provide a simple, accessible, and **user-friendly interface**

---

## 🚀 Main Features

| Feature           | Description                                                               |
|------------------|---------------------------------------------------------------------------|
| 🔐 Login/Register | Basic authentication system for user access                              |
| 📊 Dashboard      | Displays usage stats and visual charts with [Recharts](https://recharts.org/) |
| 🎥 Fire Detection | Real-time fire detection via webcam (RGB and pixel analysis)             |
| 📨 Notifications  | (Coming soon) Email alerts for incidents                                 |
| 📁 Export         | (Coming soon) Export logs of detection history                           |
| 📱 Responsive UI  | Fully optimized for mobile, tablet, and desktop                          |
| 🌓 Dark Mode      | (Coming soon) Theme toggle button                                        |

---

## 🧪 Tech Stack

### Front-End

- ⚛️ [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- 🎨 CSS Modules for responsive design
- 📊 [Recharts](https://recharts.org/) for data visualization
- 🎥 `getUserMedia()` for webcam access
- 🔄 React Router DOM for SPA navigation

### Back-End

- 🌐 [Node.js](https://nodejs.org/)
- 🧩 [Express](https://expressjs.com/)
- 🛡️ (Planned) JWT authentication
- 📦 In-memory data for simulation (MongoDB optional)

---

## 💾 Installation Guide

### 📍 Requirements

- Node.js ≥ 16
- npm or yarn
- Modern browser with webcam access

### 🔧 Setup Instructions


### Clone the repository - Git Bash Here
git clone https://github.com/yourusername/firevision-webapp.git

### Navigate to project folder
cd firevision-webapp

### Install front-end dependencies
npm install

### Run front-end
npm run dev

### In another terminal tab
cd backend
npm install
node index.js

firevision-webapp/
├── backend/              
│   └── index.js
├── src/                 
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── styles/
│   └── App.jsx
├── public/
├── package.json
└── README.md

## 🔍 API Reference

| Method | Route         | Description                          |
|--------|---------------|--------------------------------------|
| GET    | /detections   | Returns list of all fire events      |
| POST   | /detections   | Sends new fire detection entry       |
| GET    | /users        | Returns registered users             |
| POST   | /login        | Authenticates user login             |
| POST   | /register     | Creates a new user account           |

---

## 🤝 Contribution Guide

Want to improve **FireVision**? Here's how:

1. **Fork** the repository
2. **Create a new branch**  
   git checkout -b feature/your-feature-name

### Commit your changes
git commit -m "Add your message"

### Push to your branch
git push origin feature/your-feature-name

---

## 🌍 License

This project was developed for **educational and awareness purposes only**.  
You are free to use, modify, and distribute it for **non-commercial goals** that promote social or environmental impact.  
Let’s build a better future with technology. 🌱🔥

