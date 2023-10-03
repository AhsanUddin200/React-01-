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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/table" element={<Table />} />
        <Route path="/users" element={<Users />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/qa" element={<QA />} />
        <Route path="/video" element={<Vedio />} />
        <Route path="/app" element={<App />} />
        <Route path="/github" element={<Github />} />
   
      </Routes>
    </BrowserRouter>
  
    
  </React.StrictMode>
);

reportWebVitals();