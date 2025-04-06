import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ContextProvider } from './utils/contexts';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
     <HashRouter>
      <App />
    </HashRouter>
  </ContextProvider>,
);
