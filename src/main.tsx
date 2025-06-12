
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CmsProvider } from './contexts/CmsContext.tsx';
import AdminWrapper from './components/admin/AdminWrapper.tsx';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CmsProvider>
      <AdminWrapper>
        <ScrollToTopOnNavigate />
        <App />
      </AdminWrapper>
    </CmsProvider>
  </BrowserRouter>
);
