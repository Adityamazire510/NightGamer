# NightGamers — Physical PC Game Store

A modern, highly interactive, and visually stunning Single Page Application (SPA) for browsing and buying physical PC game CDs. 

Featuring a sleek dark-mode sci-fi aesthetic, micro-animations, dynamic routing, a custom reviews live feed marquee, a fully functional shopping cart, checkout walkthrough, and user profile management dashboard.

---

## 🚀 Key Features

* **Sci-Fi & Cyberpunk Aesthetic**: High-quality visual elements, including glassmorphism, responsive grids, conic gradient animations, and customized dark-mode themes.
* **Dynamic Client-Side Routing**: Smooth page transitions between the home store and genre-specific listing pages using custom linear overlay animations.
* **Interactive Catalog & Detail Modals**: Explorable game lists by category, detailed game information (discs count, system requirements, screenshots), and responsive ratings.
* **Seamless Cart & Checkout**: Real-time cart updates (badge counts, total sum) and a 4-step secure checkout form walkthrough (Summary, Address, Payment Methods, Order Review).
* **Profile Management Hub**: Signed-in user profile portal with tabbed navigation (Overview, Edit profile details, Security password strength validator, Notification toggle preferences).
* **Live Review Feed**: Infinite marquee lanes scrolling through player reviews, combined with simulated pop-in notification toasts.

---

## 🛠️ Technology Stack

* **Structure**: Semantic HTML5 markup
* **Styling**: Vanilla CSS3 (Custom properties/variables, flexbox/grid layouts, keyframe animations)
* **Logic**: Vanilla ES6+ JavaScript (DOM manipulation, localStorage persistence, state management)
* **Local Server**: Vite (for hot-reloading development server)

---

## 💻 Local Development Setup

To run this application locally on your computer:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation Steps
1. Open your terminal in the project directory.
2. Install the dev dependencies (Vite):
   ```bash
   npm install
   ```
3. Start the local server:
   ```bash
   npm run dev
   ```
4. Click the link generated in your terminal (usually `http://localhost:5173`) to view the site!

---

## ☁️ Deployment Guide

This project is fully structured and ready for GitHub & Vercel deployment.

### 1. Push to GitHub
1. Initialize git in the project root:
   ```bash
   git init
   ```
2. Add all files to staging:
   ```bash
   git add .
   ```
3. Commit the files:
   ```bash
   git commit -m "Initial commit: Modular NightGamers Store Setup"
   ```
4. Create a new repository on [GitHub](https://github.com/), link it, and push:
   ```bash
   git remote add origin <your-github-repo-url>
   ```
   ```bash
   git branch -M main
   ```
   ```bash
   git push -u origin main
   ```

### 2. Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **Add New** > **Project**.
3. Import your `nightgamers-store` repository.
4. Vercel will automatically detect the Vite config and build commands. Click **Deploy**.
5. Once complete, you will receive a live production link!
