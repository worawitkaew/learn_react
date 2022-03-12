import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {FavoritesContextProvider} from './store/favorites-context'
// import {UserProvider} from './store/userContext'
ReactDOM.render(
  // <UserProvider>
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
  // </UserProvider>
 
    ,
  document.getElementById('root')
);

