# Overview

This is a professional consultant website for Csuszner Ferencz, an AI consultant specializing in prompt strategies, automation, and AI implementation for businesses. The site is built as a modern single-page application with a clean, minimalist design featuring a personal profile, booking integration, featured content carousel, and service offerings. The application uses a full-stack TypeScript architecture with React frontend and Express backend, designed for professional consulting services with Cal.com integration for appointment scheduling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool and development server
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query for server state management, React Context for theme management
- **UI Components**: Radix UI primitives with custom styling for accessibility and professional appearance
- **Theme System**: Dark/light mode toggle with persistent localStorage preferences

## Backend Architecture  
- **Server**: Express.js with TypeScript for API routes and static file serving
- **Development**: Vite integration for hot module replacement and seamless full-stack development
- **File Structure**: Modular route registration system with placeholder storage interface
- **Error Handling**: Centralized error middleware with structured JSON responses

## Component Design
- **Layout**: Mobile-first responsive design with max-width container and consistent spacing
- **Header**: Personal branding with profile image, name, and social media links
- **Booking**: Prominent Cal.com integration buttons for scheduling consultations
- **Content**: Carousel-based featured content display for blog posts and videos
- **Services**: Grid layout showcasing four main service offerings with icons and descriptions
- **Contact**: Modal-based contact form with spam protection and mailto functionality

## Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: User management system with UUID primary keys and unique constraints
- **Database Provider**: Configured for Neon serverless PostgreSQL with connection pooling
- **Migrations**: Drizzle Kit for schema management and database migrations

## Design System
- **Color Palette**: Professional blue and warm amber accents with full dark/light mode support
- **Typography**: Inter font family with consistent weight hierarchy (400, 600, 700)
- **Spacing**: Tailwind's systematic spacing scale with generous whitespace
- **Components**: Custom CSS variables for theme-aware colors and consistent styling patterns

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variant management

## Development and Build
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Type safety across frontend, backend, and shared code
- **ESBuild**: Fast TypeScript compilation for server-side code
- **Replit Integration**: Development environment integration with runtime error handling

## Backend Services
- **TanStack Query**: Server state management with caching and synchronization
- **Wouter**: Lightweight routing library for client-side navigation
- **Date-fns**: Date manipulation and formatting utilities

## External Service Integrations
- **Cal.com**: Appointment scheduling platform for booking consultations
- **Google Fonts**: Inter font family loading for consistent typography
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Substack & YouTube**: Content platform integrations for featured content display

## Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with schema management
- **@neondatabase/serverless**: Serverless PostgreSQL client with edge compatibility
- **Drizzle Zod**: Schema validation and type generation
- **Connect PG Simple**: PostgreSQL session store for Express applications