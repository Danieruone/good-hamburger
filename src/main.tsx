import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// toast
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

// router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
