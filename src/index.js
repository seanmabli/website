import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import blog from './blog';
import Post from './post';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={blog} />

      <Route path="/:id" component={Post} />
    </Switch>
  </Router>,

document.getElementById('root'));

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCFLpjJ7-5yDGXm0sIaXKZ1RSh7X4BHdq0",
  authDomain: "seanmabli-website.firebaseapp.com",
  projectId: "seanmabli-website",
  storageBucket: "seanmabli-website.appspot.com",
  messagingSenderId: "202273441435",
  appId: "1:202273441435:web:d72e44884fa14a28b0683e",
  measurementId: "G-H6M65EG29S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);