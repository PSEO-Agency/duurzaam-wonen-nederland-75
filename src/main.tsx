
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CmsProvider } from './contexts/CmsContext.tsx';
import AdminWrapper from './components/admin/AdminWrapper.tsx';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CmsProvider>
      <AdminWrapper>
        <App />
      </AdminWrapper>
    </CmsProvider>
  </BrowserRouter>
);
