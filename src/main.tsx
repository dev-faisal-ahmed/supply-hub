import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './router';
import './index.css';
import { AppProvider } from './context-api/app-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>,
);
