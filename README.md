# MiniVault - Project Management Suite

A unified project management dashboard that integrates Notion, Google Drive, Gmail, GitHub, and more into a single interface for small teams.

## Features

- <¯ **Metrics Overview** - Track key input and output metrics to understand project outcomes
- =Ë **Project Tracking** - Monitor tasks and sub-projects from Notion with filters and tags
- =Ê **Weekly Reports** - Generate comprehensive weekly summaries when needed
- =Ú **Knowledge Base** - Create clear instructions and context for all collaborators

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI**: Shadcn/UI with Tailwind CSS (Dark theme)
- **Authentication**: NextAuth.js with Google & GitHub OAuth
- **Database**: PostgreSQL with Prisma (planned)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Cloud Console project (for Google OAuth)
- GitHub OAuth App

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Copy the environment variables:
```bash
cp .env.example .env.local
```

3. Configure your environment variables in `.env.local`:
   - `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for development)
   - `NEXTAUTH_SECRET`: Random secret for NextAuth.js
   - `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: From Google Cloud Console
   - `GITHUB_ID` & `GITHUB_SECRET`: From GitHub OAuth App
   - `NOTION_TOKEN` & `NOTION_DATABASE_ID`: From Notion integration

### OAuth Setup

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API and Gmail API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

#### GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js App Router pages and API routes
- `/components` - Reusable UI components
- `/lib` - Utility functions and configurations
- `/types` - TypeScript type definitions

## Contributing

1. Follow the coding workflow in CLAUDE.md
2. Ensure all tests pass before submitting
3. Test in both development and production builds
