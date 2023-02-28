import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddPost from './components/Addpost/AddPost';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>
    <Navbar/>
  
    <Routes>
    <Route  path='/' element={<App/>}/>
      <Route  path='/addpost' element={<AddPost/>}/>
      <Route  path='/edit' element={<Edit/>}/>
      <Route  path='/about' element={<About/>}/>
      

    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

