import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { init, restoreInitData } from '@telegram-apps/sdk-react';


// Asynchronously initialize the SDK
async function initialize() {
  try {
    // Initialize the main SDK component.
    await init();
    
    // Restore the init data.
    await restoreInitData();
    
  } catch (e) {
    console.error('SDK initialization error:', e);
    // You can add some fallback UI here if needed
  }
}

// Render the application after initialization
initialize().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
