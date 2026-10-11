import { StrictMode, useSyncExternalStore } from 'react';
import { createRoot } from 'react-dom/client';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { AppDarkTheme, AppTheme } from './theme/theme';

import { App } from './App';

import './index.css';

const engine = new Styletron();
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const subscribeToColorScheme = (listener: () => void) => {
  colorSchemeQuery.addEventListener('change', listener);
  return () => colorSchemeQuery.removeEventListener('change', listener);
};

const getSystemColorScheme = () => colorSchemeQuery.matches;
const root = createRoot(document.getElementById('root')!);

const Root = () => {
  const isDarkMode = useSyncExternalStore(
    subscribeToColorScheme,
    getSystemColorScheme,
    getSystemColorScheme,
  );

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={isDarkMode === true ? AppDarkTheme : AppTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  );
};

root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
