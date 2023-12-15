import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const firebaseConfig = {
    apiKey: "AIzaSyDPEUY5RbsrV6gb_ePb6DkgyWZSo15Ehrc",
    authDomain: "profinalreact.firebaseapp.com",
    projectId: "profinalreact",
    storageBucket: "profinalreact.appspot.com",
    messagingSenderId: "1096003689359",
    appId: "1:1096003689359:web:6aa11feaf800c7e71789fa"
  };


 initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App />
</React.StrictMode>
)
