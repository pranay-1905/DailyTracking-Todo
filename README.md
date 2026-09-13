# 🗓️ DailyTracking Todo

<div align="center">

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**A sleek, modern daily task management and habit tracker with calendar history, streak analytics, and priority tagging.**

[🚀 Live Demo](https://daily-tracking-todo.vercel.app) • [✨ Key Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [⚡ Getting Started](#-getting-started)

</div>

---

## 📸 Preview

```
+-------------------------------------------------------------------------------+
|  🗓️ DailyTracking Todo                                                        |
|  Organize daily tasks, track calendar history & achieve streaks                |
|                                                                               |
|  +---------------------------+  +-------------------------------------------+ |
|  |  [<]  September 2026  [>] |  |  📅 Today (Sep 13)    [Prev] [Next] [Date]| |
|  |  Su Mo Tu We Th Fr Sa     |  |  🔍 Search tasks...   [All] [Active] [Done]| |
|  |  30 31  1  2  3  4  5     |  |  ---------------------------------------  | |
|  |   6  7  8  9 10 11 12     |  |  [ Write task... ]  [Priority: High] [+]  | |
|  | (13) 14 15 16 17 18 19     |  |                                           | |
|  |  20 21 22 23 24 25 26     |  |  ☑️ Review project architecture           | |
|  |  27 28 29 30  1  2  3     |  |  ☑️ Complete Vite build pipeline          | |
|  |                           |  |  ⬜ Push update to Vercel production      | |
|  |  🔥 Streak: 5 Days (100%) |  |                                           | |
|  +---------------------------+  +-------------------------------------------+ |
+-------------------------------------------------------------------------------+
```

---

## ✨ Features

- 📅 **Interactive Calendar Navigation**: View any past or future day's task history with completion dots and day indicators.
- ⚡ **Quick Date Strip**: Jump between consecutive days with dynamic prev/next date sliders.
- 🎯 **Priority Tagging**: Categorize tasks into **High**, **Medium**, and **Low** priorities with color-coded badges.
- 🔄 **Smart Task Rollover**: Automatically prompt and roll over unfinished tasks from past days to today.
- 🔍 **Real-Time Search & Filters**: Instant full-text search with scope switching (`This Day` vs `All History`) and status filtering (`All`, `Active`, `Completed`).
- 📈 **Streak & Monthly Analytics**: Automatically calculates consecutive active completion streaks and daily task progress.
- 🎉 **Confetti Milestone Celebrations**: Satisfying particle animations on task completion using `canvas-confetti`.
- 💾 **Local Persistence**: Full offline-first data retention using `localStorage` with backward-compatible schema migration.
- 🎨 **Modern Dark Aesthetic**: Handcrafted UI with glassmorphism, responsive 2-column layout, and micro-interactions.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons & Effects:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
DailyTracking-Todo/
├── public/
├── src/
│   ├── components/
│   │   ├── Calendar/
│   │   │   ├── CalendarView.jsx    # Full month calendar matrix
│   │   │   └── DateStrip.jsx       # Quick date navigation pills
│   │   ├── Modals/
│   │   │   └── RolloverBanner.jsx  # Past incomplete task rollover notice
│   │   ├── SearchAndFilter/
│   │   │   └── SearchBar.jsx       # Search input & filter toggles
│   │   ├── Todo/
│   │   │   ├── TodoForm.jsx        # Task creation input & priority picker
│   │   │   ├── TodoItem.jsx        # Interactive task card (edit, complete, delete)
│   │   │   ├── TodoList.jsx        # List container with empty states
│   │   │   └── TodoStats.jsx       # Streak and completion statistics
│   │   └── index.js                # Component barrel export
│   ├── contexts/
│   │   ├── TodoContext.js          # React Context definition & custom hook
│   │   └── index.js                # Context barrel export
│   ├── utils/
│   │   ├── confettiUtils.js        # Canvas confetti trigger helper
│   │   └── dateUtils.js            # Date formatting, streaks & calendar math
│   ├── App.jsx                     # Root application component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles & Tailwind entry
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pranay-1905/DailyTracking-Todo.git
   cd DailyTracking-Todo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Lint the code:**
   ```bash
   npm run lint
   ```

---

## 🚀 Deployment

The project is pre-configured for one-click deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Import your repository on Vercel.
3. Vercel automatically detects the Vite preset (`npm run build`, output directory: `dist`).
4. Hit **Deploy**!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/pranay-1905">Pranay</a>
</div>
