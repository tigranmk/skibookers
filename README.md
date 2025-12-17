
### **Submission Note**

My solution is built with React using a modular, scalable component structure and CSS Modules for styling. The UI is organized into reusable, focused components: each trip package element (resort, hotel, room, skipass, transfer, flight, insurance, add-ons) is rendered as a modern card with clear actions for editing or removing, and each customization opens in a modal for a desktop-first experience. All forms and controls (including a reusable Select component and Button component with variant/size support) use shared styles.

State is managed at the App level, with a single source of truth for the trip object. All edit and remove actions are handled dynamically. The total price is calculated in real time based on the user’s selections. The codebase is organized for scalability, with a `/ui` folder for generic components, `/components` for feature-specific logic, `/styles` for design tokens and shared CSS, `/utils` for utility functions, `/data` for mocks, `/constants` for constants.

