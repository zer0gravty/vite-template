import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ColorTheme = 'light' | 'dark' | 'system';

type Store = {
  colorTheme: ColorTheme;
  setColorTheme: (colorTheme: ColorTheme) => void;
  applyTheme: (theme?: ColorTheme) => void;
};

const getSystemTheme = (): ColorTheme => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return 'dark';
};

const useColorTheme = create<Store>()(
  persist(
    (set, get) => ({
      colorTheme: get()?.colorTheme || 'system',
      setColorTheme: (colorTheme: ColorTheme) => {
        set({ colorTheme });
        get().applyTheme(colorTheme);
      },
      applyTheme: (theme?: ColorTheme) => {
        if (typeof document !== 'undefined') {
          const htmlElement = document.documentElement;
          const selectedTheme =
            theme === 'system' ? getSystemTheme() : theme || get().colorTheme;
          htmlElement.classList.remove('light', 'dark');
          htmlElement.classList.add(selectedTheme);
        }
      },
    }),
    // TODO: make this a constant and configurable somewhere
    { name: 'vtct' },
  ),
);

if (typeof window !== 'undefined') {
  useColorTheme.getState().applyTheme();
}

export default useColorTheme;
