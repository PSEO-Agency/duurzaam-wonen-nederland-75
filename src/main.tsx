
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CmsProvider } from './contexts/CmsContext.tsx';
import AdminWrapper from './components/admin/AdminWrapper.tsx';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate.tsx';
import ReactSnapRoot from './components/ReactSnapRoot.tsx';

const rootElement = document.getElementById("root")!;

// Check if we're in a React-snap environment
const isReactSnap = typeof window !== 'undefined' && window.navigator.userAgent === 'ReactSnap';

const AppWithProviders = () => (
  <ReactSnapRoot>
    <BrowserRouter>
      <CmsProvider>
        <AdminWrapper>
          <ScrollToTopOnNavigate />
          <App />
        </AdminWrapper>
      </CmsProvider>
    </BrowserRouter>
  </ReactSnapRoot>
);

if (isReactSnap) {
  // Use hydrate for React-snap
  import('react-dom').then(({ hydrate }) => {
    hydrate(<AppWithProviders />, rootElement);
  });
} else {
  // Use createRoot for normal rendering
  createRoot(rootElement).render(<AppWithProviders />);
}
