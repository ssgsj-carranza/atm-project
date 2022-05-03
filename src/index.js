import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


//npm install -D tailwindcss
//npx tailwindcss init
// npm install redux react-redux bulma
// npm install node-sass
