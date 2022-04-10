import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './blog';
import Post from './post';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Blog/>} />
      <Route path="/:id" element={<Post/>} />
    </Routes>
  </BrowserRouter>,

document.getElementById('root'));
