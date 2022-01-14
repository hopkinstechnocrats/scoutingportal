import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCcq_zzJ4Y0jeUIDCqzmT4U0-1kBofkaps",
    authDomain: "frcscouter-2239.firebaseapp.com",
    projectId: "frcscouter-2239",
    storageBucket: "frcscouter-2239.appspot.com",
    messagingSenderId: "737522006626",
    appId: "1:737522006626:web:a0a0923ab7f33a70d8ef3b",
    measurementId: "G-9VVLR48SCP"
};

initializeApp(firebaseConfig);

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
