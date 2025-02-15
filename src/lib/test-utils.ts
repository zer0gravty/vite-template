import { routeTree } from '@/routeTree.gen';
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
} from '@tanstack/react-router';
import { RenderOptions, render } from '@testing-library/react';
// test-utils.tsx
import { ReactElement, ReactNode, createElement } from 'react';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialEntries?: string[];
}

function customRender(ui: ReactElement, options?: CustomRenderOptions) {
  const history = createMemoryHistory({
    initialEntries: options?.initialEntries || ['/'],
  });

  const router = createRouter({
    routeTree,
    history,
  });

  function Wrapper({ children }: { children: ReactNode }) {
    return createElement(RouterProvider, { router }, children);
  }

  return render(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { customRender as renderWithRouter };
