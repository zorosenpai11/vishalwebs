# Vishal Edits - Video Editor Portfolio

## Project Overview
A professional video editor's portfolio website showcasing services, portfolio work, testimonials, and contact information. The site features a modern dark theme with blue accents and smooth animations.

## Project Architecture
- **Frontend**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state, React hooks for local state
- **Build Tool**: Vite with Express server integration
- **Backend**: Express.js server with full-stack architecture support

## Recent Changes
- **2025-01-20**: Migrated from Bolt to Replit environment
  - Updated App.tsx to use wouter routing and React Query
  - Created proper page structure with HomePage component
  - Added shadcn/ui component system with toast notifications
  - Removed explicit React imports following Replit best practices
  - Fixed TypeScript imports in Contact component
  - Added CSS variables for shadcn theming
  - Ensured proper client/server separation
  
- **2025-01-20**: Instagram Integration and UI Updates
  - Transformed "Portfolio" section to "My Works" with reel-type videos
  - Added Dynamic Island-style navbar with round corners
  - Integrated Instagram links throughout the entire website
  - Updated Contact form to redirect to Instagram DMs with pre-filled info
  - Streamlined social media presence to focus on Instagram only
  - Removed email and WhatsApp from all social sections
  - Updated About section with round profile photo and hover effects
  - Replaced DaVinci with CapCut in tools list

- **2025-01-20**: Enhanced Mobile Responsiveness and Animations
  - Streamlined navbar by removing "Edits", "Testimonials", and "Works" links
  - Positioned Specialties section beside Tools in About section
  - Added scroll fade-in animations to all major sections
  - Implemented hover glow effects on all cards and interactive elements
  - Added YouTube back to "Follow My Work" section alongside Instagram
  - Enhanced mobile responsiveness across all components
  - Improved Dynamic Island navbar positioning for mobile devices

- **2025-01-20**: Complete Cyberpunk Theme Transformation
  - Implemented full cyberpunk aesthetic with cyan, pink, and purple neon colors
  - Updated background with animated gradient from dark blue to purple tones
  - Added subtle pattern overlay with radial gradients for atmospheric effect
  - Applied cyber-glow effects (blue, pink, purple) to all interactive elements
  - Added animated gradient text for section headings with shifting colors
  - Implemented neon-border animations with pulsing effect
  - Updated all card borders and backgrounds with cyberpunk color scheme
  - Modified hero section with cyan/pink/purple floating elements and glow effects
  - Adjusted all icon colors to match cyberpunk theme (cyan, pink, purple)
  - Added floating animation to main title for enhanced visual appeal
  - Applied neon glow effects to buttons and form elements
  - Transformed Tools and Specialties sections with half-half grid layout
  - Updated contact form with purple theme and cyber glow effects

## Key Features
- Responsive portfolio website for video editing services
- Interactive sections: Hero, About, Portfolio, Services, Testimonials, Contact
- Modern UI with backdrop blur effects and smooth scrolling
- Contact form with state management
- Social media integration

## Technical Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: Wouter
- **Data Fetching**: TanStack React Query
- **Icons**: Lucide React
- **Server**: Express.js with development/production modes

## File Structure
```
client/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom hooks
│   └── ui/              # shadcn/ui components
server/                  # Express backend
shared/                  # Shared types/schemas
```

## User Preferences
- Clean, professional codebase
- Modern React patterns without explicit React imports
- Component-based architecture
- Responsive design with mobile-first approach

## Development Notes
- Server runs on port 5000 (Replit standard)
- Hot reload enabled for development
- TypeScript strict mode enabled
- CSS custom properties for theming