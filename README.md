# Festify – Celebration Planning Studio

**Celebrate more. Plan less.**

Festify is a responsive celebration planning web application developed using Vue.js. It allows users to explore celebration packages, select packages for their event, customise their celebration preferences, and submit a celebration plan.

The project demonstrates Vue Router for single-page application navigation, Pinia for state management, responsive design across mobile, tablet and desktop devices, and interactive form functionality.

---

## Features

- Responsive celebration planning interface
- Home page introducing Festify
- Celebration package browsing
- Package selection and removal
- Real-time package count and total cost
- Celebration planner form
- Form validation
- Form submission acknowledgement
- Vue Router single-page application navigation
- Active navigation link styling
- Pinia state management
- Light and dark mode
- Responsive layouts for mobile, tablet and desktop
- Accessible navigation and form controls
- Production-ready Vite build

---

## Technology Stack

- Vue.js
- Vue Router
- Pinia
- Vite
- JavaScript
- HTML5
- CSS3
- Google Fonts

---

## Application Structure

```text
my-vue-website/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
├── public/
│   ├── festify1.jpg
│   ├── festify2.jpg
│   ├── packages1.jpg
│   ├── packages2.jpg
│   └── packages3.jpg
│
└── src/
    ├── main.js
    ├── App.vue
    │
    ├── assets/
    │   └── styles.css
    │
    ├── router/
    │   └── index.js
    │
    ├── stores/
    │   ├── theme.js
    │   └── cart.js
    │
    └── components/
        ├── AppHeader.vue
        ├── AppFooter.vue
        ├── HomeView.vue
        ├── PackagesView.vue
        ├── AboutView.vue
        ├── ContactForm.vue
        └── PlannerView.vue
```

## Pages

### Home

The Home page introduces Festify and presents the celebration planning concept.

### Packages

The Packages page displays the available celebration packages.

Users can select packages and view their current celebration plan, including the number of selected packages and total package cost.

Available packages:

- Golden Hour Birthday – $149
- Modern Romance – $399
- Next Chapter – $179
- Team Celebration – $279

### Our Story

The Our Story page explains the Festify concept, values and celebration experience.

### Planner

The Planner page allows users to provide their celebration details, preferences, budget and contact information.

After submitting the form successfully, the application displays an acknowledgement containing the submitted celebration information and selected package details.

---

## Vue Router

Festify uses Vue Router for single-page application navigation.

The application contains four routes:

- /
- /#/packages
- /#/about
- /#/planner

Hash-based routing is used to support deployment on the Deakin web server without requiring additional server-side routing configuration.

---

## Pinia State Management

Festify uses two Pinia stores.

### Theme Store

The Theme Store manages the application's light and dark modes.

It contains:

- `isDarkMode` state
- `currentThemeClass` getter
- `toggleDarkMode()` action

### Cart Store

The Cart Store manages the user's selected celebration packages.

It contains:

- `cart` state
- `totalCount` getter
- `totalCost` getter
- `formattedSummary` getter
- `addItem()` action
- `removeItem()` action
- `resetStore()` action

The selected package information is shared between the Packages and Planner views.

---

## Responsive Design

Festify implements three responsive breakpoints.

| Device | Breakpoint | Layout |
|---|---|---|
| Mobile | `< 768px` | Stacked single-column layout |
| Tablet | `768px – 1024px` | Two-column/reflow layout |
| Desktop | `> 1024px` | Multi-column and horizontal layout |

The responsive design adjusts navigation, package cards, forms, summaries and other content according to the available screen width.

---

## Design

Festify uses a premium celebration-focused visual style.

### Brand Colours

| Colour | Hex |
|---|---|
| Navy | `#1A1B41` |
| Navy Light | `#292A5C` |
| Lavender | `#CDB4DB` |
| Coral | `#FF6B6B` |
| White | `#FFFFFF` |
| Light Background | `#F8F6FA` |

### Typography

- **Poppins** – headings and prominent interface elements
- **Inter** – body text and supporting content

---

## Getting Started

### Prerequisites

The following software is required:

- Node.js
- npm

### Clone the Repository

    git clone https://github.com/Vedant3007/SIT120_Festify


### Navigate to the Project

    cd festify-celebration-planner

### Install Dependencies

    npm install

### Run the Development Server

    npm run dev

The application will be available at the local Vite development URL shown in the terminal, normally:

    http://localhost:5173/

---

## Production Build

To create a production build:

    npm run build

Vite generates the production files in:

    dist/

The `dist` directory is generated automatically and is not required in the source-code repository.

---

## Project Purpose

The project demonstrates the development of a responsive Vue.js single-page application using component-based architecture, client-side routing and centralised state management.

The application combines interactive package selection, celebration planning forms, responsive layouts and light/dark theme functionality into a single user experience.

---

## Assessment Requirements Demonstrated

The project demonstrates:

- Vue.js single-page application development
- Vue Router implementation
- Pinia state management
- Multiple Pinia stores
- State, getters and actions
- Interactive package selection
- Real-time state updates
- Light and dark mode
- Responsive design
- Mobile, tablet and desktop breakpoints
- Form validation and submission
- Component-based development
- Production build using Vite

---

## Author

**Vedant Patel**

Deakin University  
Bachelor of Computer Science
