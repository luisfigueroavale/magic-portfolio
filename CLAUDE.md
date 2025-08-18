# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a Next.js 15 portfolio website built with TypeScript, using the Once UI design system for consistent styling and components. The architecture follows a clean separation of concerns:

### Core Structure

- **Configuration Layer**: `src/resources/once-ui.config.ts` contains all site-wide settings including themes, fonts, routes, and visual effects
- **Content Layer**: `src/resources/content.tsx` holds all portfolio content (personal info, work experience, projects) in a structured format
- **Component Layer**: `src/components/` contains reusable UI components with accompanying SCSS modules
- **Type System**: `src/types/` defines TypeScript interfaces for configuration and content

### Key Files

- `src/resources/once-ui.config.ts` - Central configuration for theme, fonts, routes, effects, and SEO schema
- `src/resources/content.tsx` - All portfolio content including personal info, work experience, and projects
- `src/app/layout.tsx` - Root layout with Once UI theme application and meta tag generation
- `src/components/` - UI components with SCSS modules for styling
- `src/app/work/projects/` - MDX files for individual project pages

### Styling System

The project uses Once UI's CSS-in-JS system combined with SCSS modules. Styling is controlled through:

- CSS custom properties set via data attributes in `layout.tsx`
- Once UI design tokens for consistent spacing, colors, and typography
- SCSS modules for component-specific styles
- Global styles in `src/resources/custom.css`

### Content Management

Portfolio content is managed through the structured objects in `content.tsx`:

- `person` - Basic personal information and contact details
- `home` - Homepage content and featured project
- `about` - Detailed biography, work experience, education, and skills
- `work` - Project listing configuration
- `social` - Social media links and profiles

### Routing

- `/` - Homepage with introduction and featured project
- `/about` - Detailed biography and experience
- `/work` - Project portfolio listing
- `/work/[slug]` - Individual project pages (MDX files in `src/app/work/projects/`)

### Authentication

Basic route protection is available through `protectedRoutes` config and environment variables, though currently unused.

### Project Configuration

- Uses Biome for code formatting (2-space indentation, 100 character line width)
- TypeScript with strict configuration
- MDX support for project content pages
- Sass preprocessing with modern compiler

## Development Notes

- The Once UI system provides consistent design tokens - use these instead of hardcoded values
- Project pages are created by adding MDX files to `src/app/work/projects/`
- All content changes should be made in `src/resources/content.tsx`
- Theme and visual customization happens in `src/resources/once-ui.config.ts`
- Component styles should use SCSS modules with the `.module.scss` naming convention