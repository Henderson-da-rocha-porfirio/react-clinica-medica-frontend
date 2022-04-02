import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// App é o primeiro a pegar as renderizações. Depois dele, precisamos ir em App.js e configurarmos as rotas como segundo passo.
// App é o root element
// App.js = é o cara que roteia para o App alí embaixo.
ReactDOM.render(                                      
  <React.StrictMode>                                                     
    <BrowserRouter><App /></BrowserRouter>                                
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
