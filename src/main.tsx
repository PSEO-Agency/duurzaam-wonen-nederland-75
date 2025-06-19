
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CmsProvider } from './contexts/CmsContext.tsx';
import { SearchProvider } from './contexts/SearchContext.tsx';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate.tsx';

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <CmsProvider>
      <SearchProvider>
        <ScrollToTopOnNavigate />
        <App />
      </SearchProvider>
    </CmsProvider>
  </BrowserRouter>
);

// Use hydration for SSR in production
if (import.meta.env.PROD) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
