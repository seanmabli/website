import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './blog';
import Post from './post';
import './index.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDi1AVuX6kiInM9bNMdq0xiWgU77rC_5sk",
  authDomain: "sean-mabli.firebaseapp.com",
  projectId: "sean-mabli",
  storageBucket: "sean-mabli.appspot.com",
  messagingSenderId: "662981595137",
  appId: "1:662981595137:web:7e3cd0cfffe02f35d07000",
  measurementId: "G-GQ489QS53Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Blog} />

      <Route path="/:id" component={Post} />
    </Switch>
  </Router>,

document.getElementById('root'));
