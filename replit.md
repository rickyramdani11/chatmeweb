# ChatMe - Interactive Social Chat Platform

## Overview

ChatMe is a modern full-stack web application that combines real-time chat functionality with interactive gaming and virtual gifting features. Built as a React frontend with an Express backend, the application provides users with a comprehensive social chat experience that goes beyond traditional messaging. The platform features multi-room chat capabilities, integrated mini-games (Lowcard, Sicbo), animated virtual gifts, and a mobile-responsive design optimized for social interaction.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Styling**: Tailwind CSS with shadcn/ui component library providing a consistent design system
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Animation**: Framer Motion for smooth animations and transitions throughout the interface
- **UI Components**: Radix UI primitives wrapped in custom components for accessibility and consistency

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Database Layer**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Storage Interface**: Abstract storage layer with in-memory implementation for development and PostgreSQL for production
- **API Design**: RESTful API structure with centralized route registration and error handling middleware
- **Development Setup**: Vite integration for hot module replacement and development server

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Neon serverless database
- **ORM**: Drizzle ORM with schema-first approach for type safety
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development Storage**: In-memory storage implementation for rapid development and testing

### Authentication and Authorization
- **Session-based Authentication**: Server-side session management with PostgreSQL persistence
- **User Schema**: Simple username/password authentication with UUID-based user identification
- **Security**: Prepared for password hashing and validation (implementation pending)

### Frontend-Backend Integration
- **API Communication**: Fetch-based HTTP client with centralized error handling and credential management
- **Type Safety**: Shared TypeScript schemas between client and server via shared directory
- **Development Workflow**: Vite proxy configuration for seamless development experience
- **Build Process**: Separate build processes for client (Vite) and server (esbuild) with production optimization

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver optimized for edge environments
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **@tanstack/react-query**: Powerful data synchronization for React applications

### UI and Styling Framework
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework with custom design tokens
- **framer-motion**: Production-ready motion library for React animations
- **class-variance-authority**: Utility for creating variant-based component APIs

### Development and Build Tools
- **vite**: Fast build tool with hot module replacement for development
- **tsx**: TypeScript execution environment for Node.js development
- **esbuild**: Fast JavaScript bundler for production server builds
- **@replit/vite-plugin-***: Replit-specific development plugins for enhanced debugging

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form integration
- **zod**: TypeScript-first schema validation with Drizzle integration

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique string ID generator
- **wouter**: Minimalist routing library for React applications