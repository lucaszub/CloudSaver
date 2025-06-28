# Copilot Frontend Instructions

## Project Context

- Next.js project (App Router) with TypeScript
- Uses [Shadcn UI](https://ui.shadcn.com/) for component styling and primitives. When building new UI elements, prefer Shadcn components and patterns for consistency.
- Dashboard, sidebar, navigation, reusable UI components
- Uses Tailwind CSS for styling

## Folder Structure Guidance for the Sidebar

- `components/app-sidebar.tsx`: Main entry point for the sidebar. Composes the sidebar using reusable UI and navigation components.
- `components/nav-main.tsx`: Handles the main navigation items displayed in the sidebar. Edits here change the main menu.
- `components/nav-user.tsx`: Displays user information (avatar, name, etc.) at the bottom of the sidebar.
- `components/nav-secondary.tsx`: Handles secondary navigation or settings links in the sidebar.
- `components/nav-documents.tsx`: (If present) Handles document-related links or quick access in the sidebar.
- `components/ui/sidebar.tsx`: Contains all the low-level UI logic, context, and layout for the sidebar, including SidebarProvider, Sidebar, SidebarMenu, SidebarMenuButton, and related UI primitives.
- `hooks/use-mobile.ts`: Custom hook to detect mobile viewport, used for responsive sidebar behavior.
- `lib/utils.ts`: Utility functions (e.g., `cn` for className merging) used throughout UI components.

## How the Sidebar is Built

- The sidebar is composed in `app-sidebar.tsx` using the SidebarProvider and Sidebar components from `ui/sidebar.tsx`.
- Navigation items are passed to `NavMain`, which renders them as menu buttons using `SidebarMenuButton`.
- User info and secondary links are rendered via `NavUser` and `NavSecondary`.
- All layout, state, and responsive logic is handled in `ui/sidebar.tsx`.
- For styling, Tailwind CSS utility classes are used throughout.

## To Add or Edit Sidebar Items

- Edit the `navMain` array in `app-sidebar.tsx` to add, remove, or change main menu items.
- For user info, update the `user` object in `app-sidebar.tsx`.
- For secondary links, update the `navSecondary` array in `app-sidebar.tsx`.

## To Change Sidebar Layout or Behavior

- Edit `ui/sidebar.tsx` for layout, state management, or responsive logic.
- Use `use-mobile.ts` to adjust mobile-specific behavior.

## General Guidance

- All sidebar-related files are in `components/` or `components/ui/`.
- Use relative imports from `@/components/...` for consistency.
- Keep logic in hooks and UI in components for maintainability.

## What Not to Do

- Do not use global CSS classes, prefer Tailwind
- Do not use dynamic code in SSR render (avoid `Date.now()`, `Math.random()`, etc.)
- Do not access the Azure API directly from the frontend
