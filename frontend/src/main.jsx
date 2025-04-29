import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store/Store.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import ToastProvider from './Store/Provider/ToastProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastProvider>
        <App />
        </ToastProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
