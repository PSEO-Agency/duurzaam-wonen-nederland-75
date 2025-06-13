
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CmsProvider } from './contexts/CmsContext.tsx';
import { SearchProvider } from './contexts/SearchContext.tsx';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CmsProvider>
      <SearchProvider>
        <ScrollToTopOnNavigate />
        <App />
      </SearchProvider>
    </CmsProvider>
  </BrowserRouter>
);
