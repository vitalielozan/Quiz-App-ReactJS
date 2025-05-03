import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './features/App.jsx';
import QuizProvider from './features/quiz/QuizProvider';

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
