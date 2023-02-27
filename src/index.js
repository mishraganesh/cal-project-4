import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import Edit from './components/Edit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>
  
    <Routes>
    <Route  path='/' element={<App/>}/>
      <Route  path='/addpost' element={<AddPost/>}/>
      <Route  path='/edit' element={<Edit/>}/>
      

    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

