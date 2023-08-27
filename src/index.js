import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Fire Base
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3yFp9Me9IOJlwmkWZtwsZWHVM1d420IM",
  authDomain: "ract-chat-room.firebaseapp.com",
  databaseURL: "https://ract-chat-room-default-rtdb.firebaseio.com",
  projectId: "ract-chat-room",
  storageBucket: "ract-chat-room.appspot.com",
  messagingSenderId: "331045416229",
  appId: "1:331045416229:web:e69ab4846758035caf3ecc"
};
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
