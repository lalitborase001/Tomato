#  Food Delivery Backend (Spring Boot)

## 📌 Overview

This is the backend service for the **Food Delivery Application**.
It is built using **Spring Boot** and provides REST APIs for handling users, restaurants, orders, and cart functionality.

---

## 🚀 Tech Stack

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Gradle
* MySQL (or any relational database)

---

## ⚙️ Features

* 👤 User Authentication & Management
* 🍽️ Restaurant Management
* 🛒 Cart Functionality
* 📦 Order Processing
* 📍 Address Management
* 🔄 RESTful API Design

---

## 📂 Project Structure

backend/
│── src/
│   ├── main/
│   │   ├── java/com/delivery/Application/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   ├── model/
│   │   │   └── Application.java
│   │   └── resources/
│   │       ├── application.properties
│
│── build.gradle
│── settings.gradle
│── gradlew

---

## ▶️ Run Locally

### 1️⃣ Clone the repository

git clone https://github.com/lalitborase001/Tomato.git

### 2️⃣ Navigate to backend

cd Tomato/backend

### 3️⃣ Run the application

./gradlew bootRun

OR (Windows)
gradlew.bat bootRun

---

## 🌐 API Base URL

http://localhost:8080

---

## 🧪 Example APIs

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | /restaurants   | Get all restaurants |
| POST   | /auth/register | Register user       |
| POST   | /auth/login    | Login user          |
| POST   | /orders        | Place order         |

---

## 🔧 Configuration

Update database config in:

src/main/resources/application.properties

Example:
spring.datasource.url=jdbc:mysql://localhost:3306/fooddb
spring.datasource.username=root
spring.datasource.password=yourpassword

---

## 📌 Future Improvements

* JWT Authentication
* Payment Integration
* Order Tracking System
* Admin Dashboard APIs

---


