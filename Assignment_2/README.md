# PayPal Replica

A front-end practice project that recreates the PayPal Open (Business) landing page hero section using React and Vite.

This project was built as part of a college assignment. It is an unofficial learning project. It is not affiliated with or endorsed by PayPal.

## Tech Stack

- React 19
- Vite 8
- ESLint

## Features

- Responsive navigation bar with logo, menu links, Log In and Sign Up buttons
- Personal / Business account switch
- Hero section with headline, subtext and call to action buttons
- Inline SVG logo and icons

## Getting Started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
paypal-replica/
├── public/          Static assets (favicon, icons)
├── src/
│   ├── assets/      Images and SVGs
│   ├── App.jsx      Page layout and components
│   ├── App.css      Page styles
│   ├── index.css    Global styles
│   └── main.jsx     App entry point
├── index.html
└── vite.config.js
```
