import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import reportWebVitals from './utils/reportWebVitals';
import { App } from './modules/app/app';
import { pdfjs } from 'react-pdf';
import { initGApi } from './apis/gapi';

console.log(process.env);

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

window.gapi.load('client', initGApi);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
