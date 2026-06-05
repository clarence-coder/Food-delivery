<h1 align="center">🍴 Savory Delivery - A Clarence Project</h1>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img alt="Stripe" src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white"/>
</p>

---

## 🚀 Getting Started

Before running the project, make sure you have:

- A **MongoDB Atlas** database created and connected.  
- A **Stripe account** with your `STRIPE_SECRET_KEY`.  
- **Node.js** and **npm** installed locally.  

---

## ⚙️ Installation & Setup

### 1. Frontend (User Interface)

Open a terminal in **VS Code** and navigate to the `frontend` folder:

```bash
npm install
npm run dev
Runs at: http://localhost:5173

⚠️ The frontend must be running before the admin panel.
2. Admin Panel

In a new terminal, navigate to the admin folder:

npm install
npm run dev


Runs at: http://localhost:5174

⚠️ Make sure the frontend is already running before opening the admin.
3. Backend (Server)

In another terminal, navigate to the backend folder:
npm install
npm start

🔑 Environment Variables

Make sure you configure the following:

In db.js: add your MongoDB connection string.

In .env: add your Stripe Secret Key.

Example .env file:
STRIPE_SECRET_KEY=your_secret_key_here

✅ Notes

Start the frontend first, then the admin panel, and finally the backend.

Ensure your .env and database are correctly set up to avoid runtime errors.
