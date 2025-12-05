# Dynamics 365 Copilot Service Admin Center

A modern web interface recreating the Dynamics 365 Copilot Service admin center UI using React and Vite.

![UI Screenshot](https://github.com/user-attachments/assets/d4212175-2b4f-45ef-9217-078cf1a3a17c)

## Features

- **Top Navigation Bar** - Dark blue header with Dynamics 365 branding, SANDBOX label, and user controls
- **Left Sidebar Navigation** - Dark-themed navigation with collapsible sections for:
  - Customer Support (Overview, User management, AI Agents, Channels, etc.)
  - Support Experience (Workspaces, Productivity, Knowledge, Collaboration)
  - Operations (Insights, Calendar, Service scheduling, etc.)
- **Main Content Area** - Clean white workspace with:
  - Toolbar with Save, Save & Close, New, Delete, Refresh, and Check Access buttons
  - Page header showing profile name and status
  - Tab navigation (General, Automated Messages, Related)
  - Form fields with validation indicators
  - Form assist feature

## Tech Stack

- React 19.2.0
- Vite 7.2.4
- CSS3 with Flexbox
- Microsoft Fluent UI design patterns

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Design Specifications

- **Primary Color**: Microsoft Blue (#0078d4)
- **Sidebar Background**: Dark Navy (#1e1e1e)
- **Font Family**: Segoe UI (Microsoft's standard font)
- **Layout**: Responsive flexbox layout
- **Icons**: Unicode emoji icons (can be replaced with icon libraries)

## Project Structure

```
src/
├── components/
│   ├── TopNav.jsx          # Top navigation bar component
│   ├── TopNav.css
│   ├── Sidebar.jsx         # Left sidebar navigation
│   ├── Sidebar.css
│   ├── MainContent.jsx     # Main content area with form
│   └── MainContent.css
├── App.jsx                 # Root component
├── App.css
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Customization

### Changing Colors

Edit the color values in the respective CSS files:
- Top nav: `src/components/TopNav.css` (`.top-nav` background-color)
- Sidebar: `src/components/Sidebar.css` (`.sidebar` background-color)

### Adding Icons

Replace the Unicode emoji icons in the components with your preferred icon library (e.g., Fluent UI React, Font Awesome, etc.).

## License

MIT
