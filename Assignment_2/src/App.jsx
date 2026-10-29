import { useMemo } from "react";
import "./App.css";

const PAYPAL_US_URL = "https://www.paypal.com/us/home";

function Chevron() {
  return (
    <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <svg className="logo" width="34" height="44" viewBox="0 0 34 44" aria-label="PayPal">
      <path d="M7 0h14.5c6.2 0 10 3.4 9 9.2-1 6.4-5.6 9.6-11.6 9.6h-5.2L11.4 30H0L7 0z" fill="#0b2f9f" />
      <path d="M15 12h9c5.4 0 8.6 3 7.6 8.2-1 5.6-5.2 8.8-10.8 8.8h-4.4L14.6 42H5.4L12 14.5c.3-1.4 1.4-2.5 3-2.5z" fill="#3fa9f5" opacity="0.95" />
    </svg>
  );
}

export default function App() {
  const navItems = useMemo(() => ["Personal", "Business", "Partners", "Useful Info"], []);

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <a className="nav-logo" href={PAYPAL_US_URL} aria-label="PayPal home">
            <Logo />
          </a>

          <nav className="nav-links" aria-label="Main">
            {navItems.map((item) => (
              <button key={item} type="button" className="nav-link">
                {item}
                <Chevron />
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button type="button" className="btn btn-soft">Log In</button>
            <button type="button" className="btn btn-solid">Sign Up</button>
          </div>
        </div>
      </header>

      <main className="hero">
        <div className="switch" role="group" aria-label="Account type">
          <a className="switch-opt" href={PAYPAL_US_URL}>Personal</a>
          <span className="switch-opt is-active" aria-current="page">Business</span>
        </div>

        <h1>PayPal Open</h1>
        <p className="hero-sub">One platform for your business needs</p>
        <p className="hero-copy">
          PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn btn-solid">Sign Up</button>
          <button type="button" className="btn btn-soft">Contact Sales</button>
        </div>
      </main>
    </div>
  );
}
