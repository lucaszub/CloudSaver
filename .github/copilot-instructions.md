# Copilot Instructions (Summary)

## Project Overview

- Next.js (TypeScript) frontend with dashboard, sidebar, and reusable UI (Shadcn UI, Tailwind CSS)
- FastAPI backend for Azure cost management (REST API, business logic, Azure integration)

## Code Style & Best Practices

- Use TypeScript for React/Next.js, Python for backend
- Prefer functional components, React hooks, and camelCase naming
- Use root-relative imports (`@/`)
- Use Tailwind for styling; avoid global CSS
- Use Next.js `Link` for internal navigation
- Never access Azure API directly from frontend
- Use environment variables for secrets/config
- Add docstrings/comments for public functions
- **Do NOT use `useEffect` for initial data fetching in pages/components.**
  - Use async/await and server-side data fetching (e.g., Next.js Server Components, `getServerSideProps`, or async page components) for all data that can be fetched at build or request time.
  - Only use `useEffect` for client-side interactivity or when data must be fetched after initial render.

## Folder Structure

- Frontend: `components/`, `hooks/`, `lib/`, `app/`
- Backend: `api/`, `apilogic/`, `service/`, `app/`, `config.py`, `main.py`
- Place reusable logic in hooks/services, UI in components

## Sidebar Guidance

- Main: `components/app-sidebar.tsx`, `nav-main.tsx`, `nav-user.tsx`, `nav-secondary.tsx`, `nav-documents.tsx`, `ui/sidebar.tsx`
- Use `use-mobile.ts` for responsive logic
- Edit `navMain`/`navSecondary` arrays in `app-sidebar.tsx` to change menu

## What Not to Do

- No global CSS, no SSR dynamic code, no secrets in source, no direct Azure API calls from frontend
- **No `useEffect` for initial data fetches in pages/components. Use async/await and server-side data fetching instead.**

## Example: Add API Endpoint (Backend)

- Add route in `api/`, logic in `apilogic/` or `service/`, register in `main.py`

---

For details, see the full instructions in the project files.
