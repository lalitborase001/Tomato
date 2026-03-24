#  Food Delivery Frontend (React)

## 📌 Overview

This is the frontend of the **Food Delivery Application**, built using **React (Vite)**.
It provides a responsive UI for browsing restaurants, viewing menus, and interacting with the cart system.

---

## 🚀 Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* Material UI (Icons & Components)

---

## ⚙️ Features

* 🏠 Home Page with food categories & carousel
* 🍽️ Restaurant Listing Page
* 📄 Restaurant Details Page
* 📋 Menu Display (MenuCard component)
* 🛒 Cart Icon & UI (Navbar)
* 🔍 Search Functionality (UI level)
* 🎯 Responsive Design

---

## 📂 Project Structure

frontend/
│── src/
│   ├── component/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── CarouselItem.jsx
│   │   │   ├── MultiItemCarousel.jsx
│   │   │   └── topMeal.js
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Restaurant/
│   │   │   ├── RestaurantCard.jsx
│   │   │   ├── RestaurantDetails.jsx
│   │   │   └── MenuCard.jsx
│   │   │
│   │   └── Theme/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
│── public/
│── package.json
│── vite.config.js

---

## 🍽️ Restaurant Module (Added)

### 🔹 Restaurant Page

* Displays list of restaurants
* Uses `RestaurantCard.jsx` for UI
* Shows image, name, rating, and basic info

### 🔹 Restaurant Details Page

* Displays full restaurant details
* Shows menu items
* Uses `MenuCard.jsx`

### 🔹 MenuCard Component

* Displays food item with:

  * Image
  * Name
  * Price
  * Description
* Supports dynamic rendering using `.map()`

---

## ▶️ Run Locally

### 1️⃣ Navigate to frontend

cd Tomato/frontend

### 2️⃣ Install dependencies

npm install

### 3️⃣ Start development server

npm run dev

---

## 🌐 Local URL

http://localhost:5173

---

## 📸 UI Highlights

* Clean and modern UI using Tailwind
* Carousel for food items
* Responsive layout for mobile and desktop
* Component-based architecture

---

## 🔧 Future Improvements

* API integration with backend
* Add to cart functionality
* Authentication (Login/Register UI)
* Payment UI
* Order history page

---


