# The Room Design Firm — Business Tools

A custom, offline-capable suite of business tools built for **The Room Design Firm**. This application operates entirely on the client-side as a Progressive Web App (PWA) and requires no backend database. 

## Features

- **Business Strategy Pipeline:** Track monthly recurring revenue (MRR), active clients, and follow a 30-day sprint plan. Data is persisted locally.
- **Outreach System:** A built-in CRM and script library for cold outreach via Instagram, WhatsApp, and in-person walk-ins. Includes an interactive Lead Tracker.
- **Brand Audit Framework:** A structured 20-minute consultation framework featuring a live scorer and pre-audit checklist.

## Tech Stack
- Vanilla HTML5
- CSS3 (Custom Design System with Dark Mode support)
- Vanilla JavaScript
- Progressive Web App (Service Worker, Web App Manifest)
- Browser `localStorage` for data persistence

## Installation & Offline Use
Because this is a PWA, you can install it directly to your mobile device:
1. Open the deployed URL (e.g. via GitHub Pages) in your mobile browser.
2. Select "Add to Home Screen" from the browser menu.
3. The app will install with its own icon and work 100% offline. All tracked leads and client data will securely persist on your device even without an internet connection.

## License
MIT License. See [LICENSE](LICENSE) for more information.
