# 🛒 Cartist

Cartist is a React-based CRUD (Create, Read, Update, Delete) application that allows users to browse, create, edit, and delete products using the Fake Store API. The application demonstrates modern React development practices, including Context API for state management, React Router for navigation, reusable components, and client-side CRUD operations.

> **Note:** The Fake Store API is a mock API. Newly created, updated, and deleted products are managed in the application's client-side state.

---

## ✨ Features

### Read

* Display all products from the Fake Store API.
* View detailed information for each product.
* Dynamic routing for individual product pages.

### Create

* Add new products through a dedicated form.
* Client-side state updates immediately after creating a product.
* Form validation for required fields.

### Update

* Edit existing products.
* Forms are automatically populated with existing product data.
* Changes are reflected throughout the application.

### Delete

* Delete products from the client-side state.
* Confirmation modal before deleting a product.
* Automatically redirects back to the home page after deletion.

### Additional Features

* Responsive design using Tailwind CSS.
* Loading and error states.
* Custom 404 page.
* Product Not Found page.
* Reusable Input and Modal components.
* Centralized API service.
* Shared product state using Context API.

---

## 🛠️ Tech Stack

* React
* React Router DOM
* Context API
* JavaScript (ES6+)
* Tailwind CSS
* Fake Store API
* Vite

---

## 📁 Project Structure

```text
src
├── components
│   ├── layout
│   └── ui
├── context
├── hooks
├── pages
├── services
├── utils
└── App.jsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone < https://github.com/Nabeel-Nuhais/cartist.git >
```

### Navigate to the project

```bash
cd cartist
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

---

## 🌐 API

This project uses the **Fake Store API**.

https://fakestoreapi.com/

---

## 📌 Future Improvements

* Image preview before submitting a product.
* Search and filter products.
* Product pagination.
* Toast notifications.
* Authentication and authorization.
* Backend database integration.

---

## 👨‍💻 Author

Developed by **Nabeel Nuhais**.
