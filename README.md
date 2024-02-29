# Cake Shop E-commerce App

This mobile-first e-commerce application is designed specifically for cake sales, offering users the ability to add cakes to their shopping cart, adjust quantities, and proceed with payments. It features a secure login system for payment processing, ensuring that transactions are protected. The app utilizes React and TypeScript, leveraging the power of Vite for an optimized development experience. State management is handled elegantly with `useContext` and `useReducer` hooks, ensuring a seamless and responsive user interface.

## Features

- **Mobile-First Design**: Optimized for mobile devices, ensuring a great user experience on phones and tablets.

- **Add to Cart**: Users can browse cakes and add them to their shopping cart.

- **Modify Cart**: Adjust the quantity of cakes directly from the cart.

- **Protected Payment**: Checkout and payment process protected by a login system.

- **User Authentication**: Secure login functionality to access payment features.

- **Search Products**: Search cakes on search bar

## Getting Started

### Prerequisites

- Node.js installed (recommended version 14 or above)

- A modern web browser

### Installation

1. Clone the repository:

```bash

git clone https://github.com/eiramele/cake-ecommerce.git



```

2. Install dependencies:

```bash
cd cake-shop-e-commerce-app

pnpm install

```

3. Start development with Vite:

```bash
pnpm run dev
```

4. Launch JSON server:

```bash
pnpm run server
```

After starting the development server, the application will be available at http://localhost:3000. You can browse cakes, add them to your cart, and simulate the checkout process.

### Technologies

- React: For building the user interface.

- React-router-dom: Library to define rutes between private pages

- TypeScript: For adding static type definitions to JavaScript.

- Vite: As a build tool for a fast development experience.

- JSON Server: To simulate a backend for development purposes.

- Context API and useReducer Hook: For state management across the application.
