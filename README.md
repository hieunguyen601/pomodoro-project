# 🍅 Productive Pomodoro Timer

A modern, responsive, and aesthetic **Pomodoro Timer web application** built with **React** and **Vite**. Designed to boost productivity, minimize distractions, and provide a cozy, customized study/work environment with multiple scenic backgrounds.

🌐 **Live Demo:** [https://hieunguyen601.github.io/Pomodoro-Project/](https://hieunguyen601.github.io/Pomodoro-Project/)

---

## ✨ Features

- **⏱️ Flexible Pomodoro Intervals**: Switch smoothly between **Focus**, **Short Break**, and **Long Break** modes.
- **⚙️ Customizable Timer Settings**: Easily adjust the duration (in minutes) for Focus, Short Break, and Long Break through the settings modal.
- **🖼️ Aesthetic Background Switcher**: Toggle through cozy study room and beach backgrounds with a single click.
- **🔄 Live Browser Tab Countdown**: Keeps track of your remaining time right in the browser tab title so you never lose focus.
- **📊 Pomodoro Cycle Tracker**: Automatically counts and tracks completed Pomodoro focus sessions.
- **📱 Fully Responsive Design**: Optimized and tested for desktop monitors, tablets, and mobile screens.
- **⚡ Ultra Fast & Lightweight**: Powered by Vite and React 19 for instant loading and snappy transitions.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS (Modular, Flexbox, Media Queries, Clamp sizing)
- **Typography**: [Google Fonts (Fredoka)](https://fonts.google.com/specimen/Fredoka)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hieunguyen601/Pomodoro-Project.git
   cd Pomodoro-Project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173/` in your web browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Bundles and builds the production-ready assets into the `dist/` directory. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs oxlint to inspect and maintain code quality. |

---

## 📁 Project Structure

```text
pomodoro/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD deployment workflow
├── public/
│   └── favicon.svg           # Application favicon
├── src/
│   ├── assets/
│   │   └── images/           # Background wallpapers and icons
│   ├── App.css               # Main application and responsive styling
│   ├── App.jsx               # Main timer component logic and state
│   ├── index.css             # Global typography and base styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML entry point
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite configuration with base path
```

---

## 👤 Author

- **Hieu Nguyen** - [GitHub Profile](https://github.com/hieunguyen601)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
