# Copilot Instructions

## Project Context

- Next.js project (App Router) with TypeScript
- Frontend: Dashboard, sidebar, navigation, reusable components
- Backend: FastAPI for Azure cost management
- Goal: Optimize Azure cost management through a modern interface

## Expected Code Style

- Use TypeScript for all React/Next.js files
- Prefer functional components and React hooks
- Use camelCase for variables and functions
- Use relative imports from `@/` for internal components
- Respect the existing folder structure

## Best Practices

- Always use the `Link` component from `next/link` for internal navigation
- Never use browser APIs (`window`, `localStorage`, etc.) in the initial render, only in hooks (`useEffect`)
- Prefer custom hooks for reusable logic
- Use Tailwind CSS for styling (utility classes)
- Keep components small and focused

## Folder Structure Guidance for the Sidebar

To build, modify, or extend the sidebar, the following files and folders are essential:

- `components/app-sidebar.tsx`: Main entry point for the sidebar. This file composes the sidebar using reusable UI and navigation components.
- `components/nav-main.tsx`: Handles the main navigation items displayed in the sidebar. Edits here change the main menu.
- `components/nav-user.tsx`: Displays user information (avatar, name, etc.) at the bottom of the sidebar.
- `components/nav-secondary.tsx`: Handles secondary navigation or settings links in the sidebar.
- `components/nav-documents.tsx`: (If present) Handles document-related links or quick access in the sidebar.
- `components/ui/sidebar.tsx`: Contains all the low-level UI logic, context, and layout for the sidebar, including SidebarProvider, Sidebar, SidebarMenu, SidebarMenuButton, and related UI primitives.
- `hooks/use-mobile.ts`: Custom hook to detect mobile viewport, used for responsive sidebar behavior.
- `lib/utils.ts`: Utility functions (e.g., `cn` for className merging) used throughout UI components.

### How the Sidebar is Built

- The sidebar is composed in `app-sidebar.tsx` using the SidebarProvider and Sidebar components from `ui/sidebar.tsx`.
- Navigation items are passed to `NavMain`, which renders them as menu buttons using `SidebarMenuButton`.
- User info and secondary links are rendered via `NavUser` and `NavSecondary`.
- All layout, state, and responsive logic is handled in `ui/sidebar.tsx`.
- For styling, Tailwind CSS utility classes are used throughout.

### To Add or Edit Sidebar Items

- Edit the `navMain` array in `app-sidebar.tsx` to add, remove, or change main menu items.
- For user info, update the `user` object in `app-sidebar.tsx`.
- For secondary links, update the `navSecondary` array in `app-sidebar.tsx`.

### To Change Sidebar Layout or Behavior

- Edit `ui/sidebar.tsx` for layout, state management, or responsive logic.
- Use `use-mobile.ts` to adjust mobile-specific behavior.

### General Guidance

- All sidebar-related files are in `components/` or `components/ui/`.
- Use relative imports from `@/components/...` for consistency.
- Keep logic in hooks and UI in components for maintainability.

## What Not to Do

- Do not use global CSS classes, prefer Tailwind
- Do not use dynamic code in SSR render (avoid `Date.now()`, `Math.random()`, etc.)
- Do not access the Azure API directly from the frontend

## Copilot Instructions Template

## Project Objective

- Briefly describe the purpose of this project and the expected application type.

## Code Style

- Use [TypeScript|JavaScript|Python|other] according to the folder.
- Follow naming conventions: camelCase for variables/functions, PascalCase for components/classes.
- Always add explicit types for props and function returns (TypeScript).
- Use clear comments to explain complex parts.

## Folder Structure

- Organize code by feature or by type (e.g., components, hooks, services, pages).
- Place reusable components in `components/`.
- Custom hooks go in `hooks/`.
- API calls and business logic in `services/` or `api/`.

## Best Practices

- Favor pure functions and functional components.
- Use React hooks for state and effect logic.
- Prefer using Next.js `Link` for internal navigation.
- Never store secrets in the source code.
- Add unit tests for critical functions.

## Accessibility & UI

- Use semantic HTML tags.
- Add labels and ARIA attributes if needed.
- Ensure the UI is responsive.

## Documentation

- Document every exported function and public component.
- Add usage examples if relevant.

## Specific Instructions Examples

- Always use `async/await` for async calls.
- Prefer `const` over `let` unless reassignment is needed.
- Use root-relative imports (`@/components/...`) if possible.

---
