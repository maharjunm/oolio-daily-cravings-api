# OOLIO DAILY CRAVING API
This repository hosts the backend API for a food ordering application, built with Express.js and TypeScript. It provides endpoints for managing desserts, processing orders, and fetching external user data.

## ✨ Features
* Dessert Catalog: Retrieve a list of delicious desserts.

* Product Fetching: Fetch a broader range of products from an external API.

* Order Processing: Submit new customer orders, including items and an optional coupon code.

* External Data Integration: Example endpoint to fetch user data from a public API.

* CORS Handling: Configured to allow requests from a specified frontend origin.

* Robust Error Handling: Provides meaningful error responses for various scenarios.

## 🚀 Technologies Used
* Node.js: JavaScript runtime environment.

* Express.js: Fast, unopinionated, minimalist web framework for Node.js.

* TypeScript: Superset of JavaScript that adds static typing.

* cors: Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

* axios: Promise-based HTTP client for the browser and Node.js.

## 💻 Setup and Installation
Follow these steps to get the API running on your local machine.

### Prerequisites
#### Node.js (v14 or higher recommended)

#### npm (Node Package Manager)

#### Installation
Clone the repository:
```
git clone https://github.com/maharjunm/oolio-daily-cravings-api
cd oolio-daily-cravings-api

```
#### Install dependencies:
```
npm install
```

#### Running the Server
Start the development server:
```
npm start
```

The server will typically run on http://localhost:3000 (or the port defined by process.env.PORT).
