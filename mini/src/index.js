import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"; 
import {ApolloProvider,} from "@apollo/client"; 
import client from './apollo/apollo-client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <ApolloProvider client={client}> 
  {/*menghubungkan Apollo */}
  <React.StrictMode>
    <App />
  </React.StrictMode> 
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
