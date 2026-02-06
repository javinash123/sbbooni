# SimpleBit - Modern SaaS Website

## Overview

SimpleBit is a modern SaaS marketing website built as a single-page application with multiple routes. It's designed as a premium, enterprise-grade commerce platform website inspired by zbooni.com's visual style. The site showcases product features (Capture, Accept, Sell, Track), pricing, and target audience pages. The project uses a full-stack TypeScript architecture with a React frontend and Express backend, though the current focus is primarily on the frontend marketing site with minimal backend logic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using functional components
- **Routing**: Wouter (lightweight client-side router) with routes for Home, Pricing, Who We Serve, Features, Hub, About, Contact, Login, and Demo
- **Styling**: Tailwind CSS v4 with CSS variables for theming, Plus Jakarta Sans as the primary font
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives — extensive set of pre-built components in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll animations, hover effects, and page transitions
- **State Management**: TanStack React Query for server state (configured but minimally used currently)
- **Design System**: Violet-blue primary color with gradient CTAs, black secondary, green accent (#00E676). Card-based layouts with large whitespace, rounded corners (up to 3rem), and glassmorphism effects
- **Layout Pattern**: Shared `Layout` component wraps all pages, providing a sticky header (transparent over hero, solid on scroll) and footer

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, compiled with tsx (development) and esbuild (production)
- **API Pattern**: RESTful API with `/api` prefix (currently minimal — routes file is mostly empty)
- **Storage**: In-memory storage (`MemStorage` class) implementing `IStorage` interface — designed to be swapped for database-backed storage
- **Development Server**: Vite dev server proxied through Express with HMR support
- **Production**: Static file serving from built `dist/public` directory with SPA fallback

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — currently has a `users` table (id, username, password)
- **Validation**: Zod schemas generated from Drizzle schema via `drizzle-zod`
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization
- **Note**: The app currently uses in-memory storage by default. PostgreSQL via `DATABASE_URL` environment variable is required for database features.

### Build System
- **Client Build**: Vite with React plugin, outputs to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`, with selective dependency bundling (allowlist in `script/build.ts`)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Project Structure
```
client/                 # Frontend application
  src/
    components/         # Shared components (Layout, Hero)
      ui/               # shadcn/ui component library
    pages/              # Route page components
    hooks/              # Custom React hooks
    lib/                # Utilities (queryClient, cn helper)
    assets/             # Static assets imported by components
  public/               # Static public assets
  index.html            # HTML entry point
server/                 # Backend application
  index.ts              # Express app setup and middleware
  routes.ts             # API route registration
  storage.ts            # Data storage interface and in-memory implementation
  static.ts             # Production static file serving
  vite.ts               # Development Vite middleware setup
shared/                 # Shared between client and server
  schema.ts             # Drizzle database schema and Zod types
migrations/             # Drizzle database migrations
```

## External Dependencies

### Core Services
- **PostgreSQL**: Database (requires `DATABASE_URL` environment variable). Used via Drizzle ORM. Currently optional as in-memory storage is the default.
- **Google Fonts**: Plus Jakarta Sans and Inter fonts loaded via CDN
- **Unsplash**: Stock images loaded directly from `images.unsplash.com` for hero and section backgrounds

### Key Libraries
- **Radix UI**: Headless UI primitives for accessible components (dialog, dropdown, tabs, etc.)
- **Framer Motion**: Animation library for page transitions and micro-interactions
- **TanStack React Query**: Async state management for API calls
- **Drizzle ORM + Drizzle Zod**: Type-safe database access with schema validation
- **Wouter**: Lightweight client-side routing
- **Vaul**: Drawer component
- **Embla Carousel**: Carousel functionality
- **Recharts**: Charting library (available but not prominently used)

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Runtime error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)
- **vite-plugin-meta-images**: Custom plugin for OpenGraph meta tag management on Replit deployments