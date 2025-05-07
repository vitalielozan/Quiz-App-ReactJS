import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App.jsx';
import QuizProvider from './context/QuizProvider.jsx';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <QuizProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuizProvider>
  </React.StrictMode>
);
