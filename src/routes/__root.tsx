import AppHeader from '@/components/layout/AppHeader';
import AppSidebar from '@/components/layout/Appsidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import useColorTheme from '@/hooks/useColorTheme';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export function AppRoot() {
  const { applyTheme } = useColorTheme();

  // TODO: how to do this in React 19?
  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex flex-col w-full h-full p-2 border-2 border-cyan-100">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export const Route = createRootRoute({
  component: AppRoot,
});
