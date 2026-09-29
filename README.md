# Festify — SIT120 Task 9.3D

## Celebrate more. Plan less.

Festify is a responsive celebration planning web application developed for **Deakin University's SIT120 — Intro to Responsive Web Apps**.

The project converts the original Festify wireframes and responsive form design into a functional **Vue 3 + Vite** application using a component-based architecture.

---

## Project Overview

Festify is designed to make celebration planning simpler and more organised.

Users can explore different celebration packages, learn about the Festify concept, and complete a personalised celebration planning form.

The application includes:

* Responsive multi-page-style navigation
* Home page with Festify introduction and features
* Celebration packages page
* Our Story page
* Celebration Planner form
* Form validation and inline feedback
* Responsive form layouts
* Submission acknowledgement
* Parent-child component communication
* Reusable Vue components
* Responsive desktop, tablet and mobile layouts

---

## Technologies Used

* **Vue 3**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Flexbox**
* **CSS Grid**
* **Responsive Media Queries**
* **GitHub**

---

## Vue Features Demonstrated

This project demonstrates several Vue 3 concepts required for Task 9.3D.

### Single File Components

The application is separated into reusable `.vue` components:

* `AppHeader.vue`
* `AppFooter.vue`
* `HomeView.vue`
* `PackagesView.vue`
* `AboutView.vue`
* `ContactForm.vue`
* `App.vue`

### Props

Props are used to pass data and configuration from the parent `App.vue` component into `ContactForm.vue`.

The form receives:

* Initial form data
* Form configuration

### Emits and Custom Events

`ContactForm.vue` uses `defineEmits()` to send the completed form data back to `App.vue` through the custom:

```text
submit-form
```

event.

The parent component listens for this event and stores the submitted data for the acknowledgement card.

### v-model

The Celebration Planner demonstrates two-way data binding using `v-model`.

The form includes:

* Text inputs
* Email input
* Telephone input
* Date input
* Numeric input
* Radio buttons
* Dropdown/select fields
* Checkbox selections
* Textarea

### v-model.number

The guest count field uses:

```text
v-model.number
```

to convert the entered guest count into a numeric value.

### Dynamic v-for Rendering

Dropdown and checkbox options are generated dynamically using `v-for`.

This keeps the form options organised and reduces repetitive HTML.

### Conditional Rendering

Vue conditional rendering is used for:

* Validation messages
* Success messages
* Form feedback
* Navigation between application views
* Submission acknowledgement

---

## Application Structure

```text
my-vue-website/
│
├── public/
│   ├── festify1.jpg
│   ├── festify2.jpg
│   ├── packages1.jpg
│   ├── packages2.jpg
│   └── packages3.jpg
│
├── src/
│   ├── assets/
│   │   └── styles.css
│   │
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── HomeView.vue
│   │   ├── PackagesView.vue
│   │   ├── AboutView.vue
│   │   └── ContactForm.vue
│   │
│   ├── App.vue
│   └── main.js
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Main Components

### App.vue

The main parent component responsible for:

* Managing the current application view
* Handling navigation events
* Passing initial form data to the planner
* Receiving submitted form data
* Displaying the persistent acknowledgement card

### AppHeader.vue

Provides the main navigation and Festify branding.

It communicates navigation changes to `App.vue` using a custom `navigate` event.

### AppFooter.vue

Provides the footer content and additional navigation links.

### HomeView.vue

Introduces Festify and presents:

* Hero section
* Festify features
* Planning process
* Popular packages
* Calls to action

### PackagesView.vue

Displays the available celebration packages and their information.

### AboutView.vue

Explains the purpose and concept behind Festify and presents the principles behind the application.

### ContactForm.vue

Provides the interactive Celebration Planner.

It includes:

* Event details
* Style and preferences
* Budget information
* Contact details
* Validation
* Custom events
* Form reset functionality
* Successful submission feedback

---

## Celebration Planner Form

The Celebration Planner collects:

### Event Details

* Event type
* Event date
* Number of guests
* Location type

### Style & Preferences

* Preferred style
* Preferred colour theme
* Required products and services

### Budget

* Budget range
* Additional requirements

### Contact Details

* Full name
* Email address
* Mobile number

Required fields are validated before the form can be submitted.

---

## Form Validation

The application provides inline validation feedback for invalid or incomplete fields.

Examples include:

* Missing event type
* Invalid or missing event date
* Invalid guest count
* Missing location type
* Missing style or colour theme
* No requirements selected
* Missing budget
* Invalid name
* Invalid email address
* Invalid mobile number

Successful fields also provide positive feedback where appropriate.

---

## Submission Workflow

The form uses a parent-child communication workflow.

```text
User completes form
        ↓
ContactForm.vue validates data
        ↓
ContactForm.vue emits submit-form
        ↓
App.vue receives submitted data
        ↓
App.vue stores the submitted data
        ↓
Acknowledgement card is displayed
        ↓
ContactForm.vue resets its local form
        ↓
Acknowledgement remains visible
```

This demonstrates state being managed by the parent component while the child component manages its own form interaction.

---

## Responsive Design

Festify follows a mobile-first responsive design approach.

The interface uses:

* CSS Flexbox
* CSS Grid
* Responsive media queries
* Flexible containers
* Responsive typography
* Flexible images
* Mobile-friendly form layouts
* Responsive navigation
* Accessible focus states

The application was designed and tested across:

* Desktop
* Tablet
* Mobile

---

## Visual Design

Festify uses a premium and modern visual style based around:

* Navy
* Lavender
* Coral
* White
* Light neutral backgrounds

Typography uses:

* **Poppins** for headings
* **Inter** for body text

The design focuses on clear hierarchy, consistent spacing, reusable components and accessible interaction states.

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Vedant3007/Festify_SIT120
```

### 2. Open the project

```bash
cd my-vue-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## Production Build

To create the production version of the application:

```bash
npm run build
```

The compiled production files are generated inside:

```text
dist/
```

The production build contains the compiled HTML, CSS, JavaScript and public assets required to run the application.

---

## Deployment

The production build was deployed to the **Deakin University student web server** for assessment.

The deployed version uses the contents of the generated `dist/` folder.

---

## Academic Context

**Unit:** SIT120 — Intro to Responsive Web Apps
**Assessment:** Task 9.3D
**University:** Deakin University
**Project:** Festify — Smart Celebration Studio

Festify was developed as an academic project to demonstrate responsive web development and Vue 3 application development.

---

## Project Learning Outcomes

Through this project, the development process demonstrated understanding of:

* Responsive web design
* Vue 3 component architecture
* Single File Components
* Props
* Emits and custom events
* Two-way data binding
* Form handling and validation
* Reactive state management
* Parent-child communication
* Vite development and production builds
* Web application deployment

---

## Author

**Vedant Patel**

Deakin University
Bachelor of Computer Science

---

## Project Status

**Completed — SIT120 Task 9.3D**

The application has been built, tested, production-built with Vite and deployed for assessment.
