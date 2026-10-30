import { useState } from "react";
import "./paypal.css";
import logo from "./assets/paypal-logo.svg";

function App() {
  const [tab, setTab] = useState("business");

  return (
    <div>
      <header className="navbar">
        <img src={logo} alt="PayPal" className="logo" />

        <ul className="nav-links">
          <li>Personal ⌵</li>
          <li>Business ⌵</li>
          <li>Partners ⌵</li>
          <li>Useful Info ⌵</li>
        </ul>

        <div className="nav-buttons">
          <button className="btn grey">Log In</button>
          <button className="btn black">Sign Up</button>
        </div>
      </header>

      <main className="hero">
        <div className="tabs">
          <button
            className={tab === "personal" ? "tab active" : "tab"}
            onClick={() => {
              setTab("personal");
              window.location.href = "https://www.paypal.com/us/home";
            }}
          >
            Personal
          </button>
          <button
            className={tab === "business" ? "tab active" : "tab"}
            onClick={() => setTab("business")}
          >
            Business
          </button>
        </div>

        <h1>PayPal Open</h1>
        <h2>One platform for your business needs</h2>
        <p>
          PayPal Open unifies your PayPal business solutions to help you get
          paid, get growing, and get ahead.
        </p>

        <div className="hero-buttons">
          <button className="btn black">Sign Up</button>
          <button className="btn grey">Contact Sales</button>
        </div>
      </main>
    </div>
  );
}

export default App;
