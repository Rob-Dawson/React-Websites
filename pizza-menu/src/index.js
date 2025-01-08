import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const Header = () => {
  return (
    <header className="header">
      <h1>Pizza Place</h1>
    </header>
  );
};

const Menu = () => {
  const numPizzas = pizzaData.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu</p>
      )}
    </div>
  );
};

function Pizza(pizzaObj) {
  console.log(pizzaObj);

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : " "}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
      </div>
      <span>{pizzaObj.price + 3}</span>
    </div>
  );
}

function Time() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return <span>{time.toLocaleTimeString()}</span>;
}

const Footer = () => {
  const currentHour = new Date().getHours();
  const openHour = 9;
  const closedHour = 17;
  const isOpen = currentHour >= openHour && currentHour < closedHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      <Time />

      {isOpen ? (
        <Order closedHour={closedHour} />
      ) : (
        <p>
          We will be open between {openHour} and {closedHour}
        </p>
      )}
    </footer>
  );
};

function Order({ closedHour }) {
  return (
    <div className="order">
      <span>We are open until {closedHour}</span>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
