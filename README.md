# Dynamics 365 Copilot Service Admin Center UI

A pixel-accurate recreation of the Dynamics 365 Copilot Service Admin Center interface, specifically the Channel Profile configuration page.

![Dynamics 365 UI Screenshot](https://github.com/user-attachments/assets/1abcd4cf-25a8-465b-9879-001693f2c5df)

## Features

This implementation includes:

### Header Bar (Dark Blue)
- App waffle icon, "Dynamics 365" branding
- "Copilot Service admin center" title
- "SANDBOX" environment label
- Action icons: Search, Lightbulb, Plus, Filter, Settings, Help, Notifications
- User avatar (circle with "Ca")

### Left Sidebar Navigation
- Search box for admin settings
- **Customer support** section:
  - Overview, User management, AI Agents, Channels, Intent, Queues, Routing, Workstreams, Case settings, Customer settings, Quality management
- **Support experience** section:
  - Overview, Workspaces, Productivity, Knowledge, Collaboration
- **Operations** section:
  - Overview, Insights, Calendar, Service terms, Service scheduling, Miscellaneous

### Main Content Area
- **Toolbar** with action buttons: Back, Document, External link, Save, Save & Close, New, Delete, Refresh, Check Access, Share
- **Page Title**: "CBA Direct Banking Profile (Demo) - Saved"
- **Tab Navigation**: General (active), Automated Messages, Related (with dropdown)
- **Form Section**:
  - Form assist button
  - Name field (required): "CBA Direct Banking Profile (Demo)"
  - Channel dropdown (required): "Voice"

## Technology Stack

- **React 18.2** - UI framework
- **TypeScript 5.1** - Type-safe development
- **Webpack 5** - Build tool and dev server
- **React Icons 5.0** - Icon library for Fluent UI-style icons
- **CSS3** - Styling with Microsoft Fluent Design principles

## Project Structure

```
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Header/            # Top navigation bar
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Sidebar/           # Left navigation menu
│   │   │   ├── Sidebar.tsx
│   │   │   └── Sidebar.css
│   │   ├── Toolbar/           # Action buttons toolbar
│   │   │   ├── Toolbar.tsx
│   │   │   └── Toolbar.css
│   │   └── Form/              # Form with Name and Channel fields
│   │       ├── FormSection.tsx
│   │       └── FormSection.css
│   ├── styles/
│   │   ├── global.css         # Global styles
│   │   └── App.css            # Main app layout styles
│   ├── App.tsx                # Main app component
│   └── index.tsx              # Entry point
├── package.json
├── tsconfig.json              # TypeScript configuration
└── webpack.config.js          # Webpack configuration
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rahulbkm/profile-wrap-up-time.git
cd profile-wrap-up-time
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Start the development server with hot reload:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Production Build

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Start Development Server (Alternative)

```bash
npm start
```

This will start the dev server and automatically open the browser.

## Design Notes

The implementation follows Microsoft Fluent Design principles:

- **Color Scheme**:
  - Header: Dark blue (#0f1b2d)
  - Sidebar: Light gray (#f3f4f6)
  - Main content: White with subtle gray backgrounds
  - Primary accent: Microsoft blue (#0078d4)

- **Typography**: System font stack with Segoe UI as primary
- **Spacing**: Consistent spacing using 4px/8px/12px/16px/24px increments
- **Icons**: React Icons library for Fluent UI-style iconography
- **Layout**: Fixed header, sidebar, with scrollable content area

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT