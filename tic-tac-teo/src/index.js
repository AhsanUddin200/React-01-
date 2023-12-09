import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import QA from './QA';
import Vedio from './Vedio';
import reportWebVitals from './reportWebVitals';
import Quotes from './Quotes';
import Users from './Users';
import Table from './Table';
import Github from './Github'
import List from './List';
import Weather from './Weather';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import News from './News';
import Todo from './Todo';
import Book from './Book';
import Mcqs from './Mcqs';
import BMI from './BMI';
import Stopwatch from './Stopwatch';
import Product from './Product';
import AppOption from './AppOption';

import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  
    domain={'dev-2fc21sxxpt7gtef7.us.auth0.com'}
    clientId={'wxCDUejxoTWos3QJXTRVPjNliENqAnVS'}
    authorizationParams={{
      redirect_uri: "http://localhost:3000/list"
    }}  >
      
        
                                                                                                                                                                                                                                          
      
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
     

        <Route path="/list" element={<List/>}/>
        <Route path="/table" element={<Table />} />
        <Route path="/users" element={<Users />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/video" element={<Vedio />} />
        <Route path="/app" element={<App />} />
        <Route path="/github" element={<Github />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/news" element={<News />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/book" element={<Book />} />
        <Route path="/mcqs" element={<Mcqs />} />
        <Route path="/BMI" element={<BMI />} />
        <Route path="/Stopwatch" element={<Stopwatch />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/AppOption" element={<AppOption />} />
       
        
                 
                
       
   
      </Routes>
    </BrowserRouter>
  
    
  </Auth0Provider>
);

reportWebVitals();