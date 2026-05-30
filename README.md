# 🛒 Shopping Cart

A fully functional shopping cart application built with React as part of **The Odin Project** curriculum. The application allows users to browse products, select quantities, add items to a cart, and view a detailed order summary with automatically calculated totals.

---

## 🚀 Live Demo

🔗 **Live Preview:** https://shopping-cart-top-orcin.vercel.app/

---

## ✨ Features

- Browse products fetched from the Fake Store API
- View product images, titles, and prices
- Select product quantities before adding to cart
- Add multiple products to the shopping cart
- Automatically update quantities for existing cart items
- View all selected products in a dedicated cart page
- Calculate item totals and overall cart total
- Client-side routing with React Router
- Global cart state management using React Context API
- Responsive and modern user interface

---

## 🛠️ Built With

- React
- React Router
- Context API
- JavaScript (ES6+)
- CSS Modules
- Fake Store API
- Vite

---

## 📚 What I Learned

This project helped me strengthen my understanding of:

- React component architecture
- State management with `useState`
- Side effects with `useEffect`
- Client-side routing using React Router
- Managing global state with Context API
- Working with external APIs
- Conditional rendering
- Immutable state updates
- Component composition and reusable UI patterns
- Array methods such as `map()`, `find()`, and `reduce()`

---

## 🧠 Project Structure

```text
src/
├── Components/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   ├── NavBar.jsx
│   └── Quantity.jsx
│
├── Routes/
│   └── AppRoutes.jsx
│
├── context/
│   └── CartContext.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/wadhwashivam/shopping-cart-TOP
```

Navigate into the project directory:

```bash
cd shopping-cart
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 🌐 API

This project uses the Fake Store API to retrieve product data:

```text
https://fakestoreapi.com/
```

---

## 🎯 Future Improvements

- [ ] Remove items from cart
- [ ] Update quantities directly from the cart page
- [ ] Persist cart data using Local Storage
- [ ] Product search and filtering
- [ ] Category-based browsing
- [ ] Checkout flow
- [ ] Enhanced mobile responsiveness
- [ ] Loading skeletons
- [ ] Error handling for failed API requests
- [ ] Unit and integration testing

---

## 🏆 The Odin Project

This project was completed as part of **The Odin Project React Curriculum**, focusing on:

- React fundamentals
- State management
- Routing
- API integration
- Context API
- Component-driven development

---

## 👨‍💻 Author

**Shivam**

GitHub: https://github.com/wadhwashivam

---

## ⭐ Acknowledgements

- The Odin Project
- Fake Store API
- React Documentation
- Vite

---

If you found this project interesting, consider giving it a ⭐ on GitHub!