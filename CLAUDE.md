# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MiniVault is a unified project management dashboard built with Next.js 14 (App Router) that integrates Notion, Google Drive, Gmail, and GitHub into a single interface for small teams. The app uses NextAuth.js for OAuth authentication and shadcn/ui components with Tailwind CSS in dark mode.

## Development Commands

```bash
# Development server (starts on http://localhost:3000)
# Note: First compilation takes ~1-2 seconds (optimized with optimizePackageImports)
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Architecture

### Authentication Flow

The app uses NextAuth.js with a custom authentication flow:

1. **Session Management**: `components/auth/session-provider.tsx` wraps the app with `SessionProvider` (client component)
2. **Auth Route**: `app/api/auth/[...nextauth]/route.ts` configures NextAuth with Google and GitHub OAuth providers
3. **Session Extension**: `types/next-auth.d.ts` extends the default NextAuth session to include `accessToken`, `refreshToken`, and `provider`
4. **Protected Pages**: `components/dashboard/main-dashboard.tsx` redirects unauthenticated users to `/auth/signin`

**Key OAuth scopes**:
- Google: Gmail, Drive, and Docs read-only access
- GitHub: Read user profile, email, and repo access

### Component Architecture

The dashboard follows a collapsible section pattern:

1. **DashboardSection** (`components/dashboard/dashboard-section.tsx`): Reusable wrapper component that provides:
   - Collapsible card interface with icon, title, and description
   - Optional `keyMetrics` slot for summary data (visible when collapsed)
   - Optional `detailedContent` slot for expanded view
   - State management for expand/collapse

2. **Section Components** (`components/dashboard/*-section.tsx`): Feature-specific sections that use `DashboardSection`:
   - `OverviewSection`: Project description, vision, and milestones
   - `GoalsMetricsSection`: Track objectives and KPIs
   - `UserFeedbackSection`: Feedback collection
   - `GuidesDocsSection`: Documentation and instructions

3. **Main Dashboard** (`components/dashboard/main-dashboard.tsx`): Orchestrates all sections and handles authentication state

### App Structure

```
/app
  /api/auth/[...nextauth]/route.ts  # NextAuth configuration
  /auth/signin/page.tsx              # Sign-in page
  layout.tsx                         # Root layout with AuthProvider
  page.tsx                           # Home page (renders MainDashboard)

/components
  /auth                              # Authentication components
  /dashboard                         # Dashboard sections
  /ui                                # shadcn/ui primitives

/lib
  utils.ts                           # cn() utility for Tailwind class merging

/types
  next-auth.d.ts                     # NextAuth type extensions
```

## Environment Variables

The `.env.local` file contains OAuth credentials and API keys. **Critical**: Ensure all environment variables are properly formatted as single-line key-value pairs.

**Known issue**: Multi-line JSON objects (like `GOOGLE_SERVICE_ACCOUNT_KEY`) must be escaped and formatted as a single line. The environment parser cannot handle unescaped newlines or multi-line values.

Required variables (see `.env.example`):
- `NEXTAUTH_URL`, `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- `GITHUB_ID`, `GITHUB_SECRET`
- `NOTION_TOKEN`, `NOTION_DATABASE_ID`

## Key Development Notes

1. **Next.js App Router**: This project uses the App Router (not Pages Router). All pages are in `/app` directory.

2. **Client Components**: Most dashboard components require `"use client"` directive since they use React hooks (`useState`, `useEffect`, `useSession`).

3. **Dark Mode**: The app is locked to dark mode via `<html className="dark">` in `app/layout.tsx`. Tailwind dark mode classes are available throughout.

4. **shadcn/ui Components**: UI primitives are in `/components/ui`. Use the `cn()` utility from `lib/utils.ts` for conditional Tailwind classes.

5. **Console Logging**: The codebase includes extensive `console.log` statements prefixed with component names (e.g., `[MainDashboard]`, `[NextAuth]`) for debugging authentication flow. These can be removed in production.

6. **TypeScript Configuration**: `tsconfig.json` uses `"moduleResolution": "bundler"` and path aliases `@/*` map to the root directory.

7. **Performance Optimizations**: `next.config.js` uses `optimizePackageImports` for icon libraries (lucide-react, @radix-ui/react-icons) to dramatically reduce startup time by tree-shaking unused icons. This reduces first compilation from ~45s to ~1-2s.
