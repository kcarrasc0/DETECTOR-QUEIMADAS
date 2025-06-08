# 🔥 Fire Detector – Educational Project

A web system that uses **computer vision** to detect fire in real time via **webcam**. The goal is to raise awareness about the use of technology in **fighting wildfires** and **climate crises**. Built as a social and educational project to demonstrate the power of tech for good.

## 📸 Demo

![Dashboard](./src/assets/screenshots/dashboard.png)
![Detection](./src/assets/screenshots/detection.png)

---

## 🧠 Objectives

- Demonstrate how **technology can save lives** and protect nature.
- Teach students about **machine learning, computer vision, and front-end tools**.
- Create a simple but functional solution for **fire detection**.
- Build an **intuitive interface** with visual alerts and future scalability.

---

## 🛠 Technologies Used

### Front-End

- ⚛️ [React.js](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 CSS Modules (responsive)
- 📊 [Recharts](https://recharts.org/) (charts)
- 🎥 getUserMedia (native webcam)
- 📦 React Router DOM

### Back-End

- 🌐 [Node.js](https://nodejs.org/)
- 🔒 [Express](https://expressjs.com/)
- 🧠 Authentication system (JWT coming soon)
- 📦 Credential validation and local storage

---

## 🚀 Features

| Page            | Description                                                           |
|-----------------|-----------------------------------------------------------------------|
| 🔐 Login         | Email and password authentication                                     |
| 📝 Register      | Register new users                                                   |
| 📊 Dashboard     | Data and statistics on detection with interactive charts             |
| 🔍 Fire Detection| Webcam access, RGB image analysis, and real-time visual alert        |
| 📁 Export        | (Coming soon) Download of incident logs                              |
| ✉️ Notifications | (Coming soon) Email alert system                                     |
| 📱 Responsive    | Mobile, tablet, and desktop friendly                                 |
| 🌓 Dark/Light Mode | (Coming soon) Toggle theme from UI                                 |

---

## 📁 Project Structure

detector-fogo/
├── public/
│   └── index.html
├── backend/
│   ├── index.js          # Express API
│   └── db/               # In-memory or future MongoDB
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/       # Buttons, inputs, etc.
│   │   └── layout/       # Header, Sidebar
│   ├── pages/
│   │   ├── LoginPage/
│   │   ├── RegisterPage/
│   │   ├── DashboardPage/
│   │   └── DetectorPage/
│   ├── services/         # API helpers
│   ├── styles/           # Global styles
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md             # This file

---

## 🧪 How to Run Locally 

# Clone the repository
git clone https://github.com/yourusername/detector-fogo.git

# Enter the directory
cd detector-fogo

# Install dependencies
npm install

# Run the app
npm run dev

# Enter backend folder
cd backend

# Install dependencies
npm install

# Run the API
node index.js

