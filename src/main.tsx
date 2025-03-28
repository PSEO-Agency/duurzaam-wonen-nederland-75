
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CmsProvider } from './contexts/CmsContext.tsx';
import AdminWrapper from './components/admin/AdminWrapper.tsx';

createRoot(document.getElementById("root")!).render(
  <CmsProvider>
    <AdminWrapper>
      <App />
    </AdminWrapper>
  </CmsProvider>
);
