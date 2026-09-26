# 💪 FitLog — Workout Library

FitLog is a dark, no-nonsense workout tracking web app built with Next.js. Browse a library of twelve lifts, lock exercises into today's plan or save them for later, track live stats (exercises, minutes, calories), and manage your daily workout log — all persisted locally so your progress survives a page reload.

---

## 🚀 Live Demo

- **Live Link: ** https://ph-assignment-6-tau.vercel.app
- **GitHub Repository:** https://github.com/solaimanalideveloper/PH-Assignment-6

---

## 🛠️ Technologies Used

| Technology                              | Purpose                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Next.js (App Router)**                | Framework, routing (`/`, `/workout/[id]`, `/my-plan`), Server Components for data fetching |
| **React (Context API)**                 | Global state management for the plan/saved lists (`PlanContext`)                           |
| **Tailwind CSS**                        | Styling and full responsive layout                                                         |
| **react-hot-toast**                     | Toast notifications for user actions (add to plan, save, mark done, remove)                |
| **lucide-react**                        | Icon set (clock, flame, star, check, X, chevron, etc.)                                     |
| **localStorage**                        | Client-side persistence so the plan/saved lists survive page reloads                       |
| **FitLog API** (`api.abcz.workers.dev`) | External REST API providing all workout data                                               |

---

## ✨ Key Features

1. **Dynamic Workout Library** — Fetches all twelve workouts from the FitLog API and displays them in a fully responsive grid (1 column on mobile, 2 on tablet, 3 on desktop), each card showing an image, category tag pills, workout name, equipment line, and a stats row (duration, calories, rating). Clicking any card navigates to its Detail page.

2. **Workout Detail Pages** — Dynamic routing (`/workout/[id]`) with a two-column layout: a large image on the left, and on the right the title, description, category tags, a key-specs panel (Equipment / Difficulty / Sets / Reps / Duration / Calories / Rating), a numbered instructions list, and two CTA buttons — "Add to today's plan" and "Save for later" — each firing a toast notification on click.

3. **Global Plan & Saved State with Persistence** — A React Context (`PlanContext`) manages the "Today's Plan" and "Saved" lists app-wide, synced to `localStorage` so nothing is lost on refresh. The Navbar's Plan and Saved badges update live to reflect real counts and link through to `/my-plan`.

4. **My Plan Dashboard** — A live-updating metrics row (Exercises / Minutes / Calories), tabs for Today's Plan and Saved, a "Sort By" dropdown (Duration / Calories / Rating, with chevron icon) that re-sorts the current list, and per-item actions: View Details, Mark as Done (with check icon, Today's Plan only), and Remove (X) — each with toast feedback.

5. **Plan Cap, Empty, Loading & 404 States** — Today's Plan is capped at 5 lifts; the "Add to plan" button disables once the cap is reached. A proper empty state ("Nothing Here Yet" + CTA back to the library) shows when a list is empty, a loading state ("Loading workouts…") shows while data is being fetched, and a custom 404 page handles unknown routes.

6. **Sticky Navbar with Active-Link Highlighting** — Logo on the left, Workouts/My Plan links centered (the active route is visually highlighted), and Plan/Saved badge counters on the right — a filled accent pill for Plan, an outlined pill for Saved. The navbar stays pinned to the top of the viewport while scrolling, and collapses into a mobile-friendly dropdown menu on small screens.

7. **Fully Responsive Design (Mobile / Tablet / Desktop)** — Every page adapts cleanly across breakpoints: the hero section stacks (image above, text below) on small screens, the library grid collapses from 3 → 2 → 1 columns, and My Plan's workout cards reflow from a single row into a stacked layout so nothing overlaps or overflows on narrow screens.

8. **Resilient Data Fetching** — All API calls are wrapped in `try/catch` and return safe fallbacks instead of throwing, so a slow or failing API response doesn't crash the app after deployment — it degrades gracefully instead.

9. **localStorage Persistence (Bonus)** — Both the Today's Plan and Saved lists survive a full page reload, since state is synced to `localStorage` on every change and rehydrated on load.

> **Note:** Sections 1–8 map directly to the assignment's Main and Challenge requirements (Navbar, Hero, Library, Detail Page, My Plan Page, Footer, 404/loading states, and the C1/C3 challenge items). Section 9 is the optional persistence feature.

---

## 📁 Folder Structure

```
fitlog/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout — Navbar, Footer, PlanProvider, Toaster
│   │   ├── page.js                # Home page (Hero + Library grid)
│   │   ├── loading.js             # Loading state shown while workouts are fetched
│   │   ├── not-found.js           # Custom 404 page
│   │   ├── globals.css            # Tailwind base + global styles
│   │   │
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.jsx       # Workout Detail page (dynamic route)
│   │   │
│   │   └── my-plan/
│   │       └── page.jsx           # My Plan page (tabs, metrics, sort, plan cards)
│   │
│   ├── components/
│   │   ├── Navbar.jsx             # Logo, nav links (active-state highlight), Plan/Saved badges
│   │   ├── Footer.jsx             # Site footer
│   │   ├── Hero.jsx               # Home page hero/banner section
│   │   ├── LibrarySection.jsx     # Library heading + responsive workout grid
│   │   ├── WorkoutCard.jsx        # Card used in the library grid
│   │   ├── WorkoutActions.jsx     # "Add to plan" / "Save for later" buttons (client component)
│   │   ├── PlanCard.jsx           # Card used on the My Plan page (View/Done/Remove)
│   │   └── SortDropdown.jsx       # Sort-by dropdown (Duration/Calories/Rating)
│   │
│   ├── context/
│   │   └── PlanContext.jsx        # Global state: planItems, savedItems + localStorage sync
│   │
│   └── lib/
│       └── api.js                 # Centralized API calls (getAllWorkouts, getWorkoutById)
│
├── public/
│   └── assets/                    # Logo, hero banner image
│
├── README.md
└── package.json
```

---

## 🧠 Notes on Architecture

- **Server vs. Client Components:** Data fetching (`getAllWorkouts`, `getWorkoutById`) happens in Server Components (`page.js`, `workout/[id]/page.jsx`). Interactive pieces (buttons, context consumers, dropdowns) are split into separate `"use client"` components (`WorkoutActions.jsx`, `PlanCard.jsx`, `Navbar.jsx`) since server components can't handle `onClick` or React hooks directly.
- **Why `cache: "no-store"`:** All fetches to the FitLog API disable caching so the app always reflects the latest data instead of a stale build-time snapshot. As a result, `/` and `/workout/[id]` are rendered dynamically on each request rather than statically generated — this is expected behavior, not a bug.
- **Fallback on API failure:** All fetch calls are wrapped in `try/catch` and return safe fallback values (`[]` or `null`) instead of throwing, so a temporary API outage doesn't crash the app.

---

## 🏃 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To create a production build:

```bash
npm run build
npm start
```
