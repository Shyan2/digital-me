// place files you want to import through the `$lib` alias in this folder.
import { writable } from 'svelte/store';

const key = '@my-theme';

const isBrowser = typeof window !== 'undefined';

const updateLocalStorage = (value) => {
  if (isBrowser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const theme = writable(false);

export const toggleTheme = (value) => {
  console.log('topggling theme!')
  return theme.update((it) => {
    const newValue = (typeof value === 'boolean') ? value : !it;

    updateLocalStorage(newValue);

    if (isBrowser) {
      const rootElement = document.documentElement; // This is the :root or html element
      if (newValue) {
        rootElement.classList.add('dark');
      } else {
        rootElement.classList.remove('dark');
      }
    }

    return newValue;
  });
};

export const onHydrated = () => {
  if (isBrowser) {
    const fromStore = localStorage.getItem(key);

    if (!fromStore) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // dark mode
        toggleTheme(true);
      }
    } else {
      toggleTheme(JSON.parse(fromStore));
    }
  }
};

