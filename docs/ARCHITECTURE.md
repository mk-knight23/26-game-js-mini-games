# Architecture: 11-js-mini-games

## Overview
A multi-app dashboard ("Fun Labs") built with React 19 and Vite 6. It serves as a portal for several standalone vanilla JavaScript mini-projects, providing a unified premium interface while maintaining isolated logic for each sub-app.

## Tech Stack
-   **Dashboard**: React 19
-   **Build Tool**: Vite 6 (Multi-page configuration)
-   **Styling**: Tailwind CSS v4
-   **Animations**: Framer Motion 12
-   **Icons**: Lucide React

## Hub Structure
-   **Fun Labs Dashboard**: The central React-based navigation layer.
-   **Sub-Projects**: Standalone directories (`01-05`) containing isolated `index.html`, `style.css`, and `app.js` files.
-   **Multi-Page Entry**: Vite is configured to treat each sub-project's `index.html` as a separate build input.

## Features
-   **Dynamic Hub**: Animated grid layout for fast app switching.
-   **Theme Engine**: Standardized design tokens across the hub and sub-apps.
-   **Isolated Logic**: Each mini-game runs its own JS loop/logic without hub interference.

## Performance
-   Code splitting between the hub and individual mini-apps.
-   Vite-optimized multi-page production bundling.
