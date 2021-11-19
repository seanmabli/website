import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import content from './content';
import blog from './blog';
import post from './post';
import './index.css';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={blog} />
        {content.map((item) => {
          return (
            <Route exact path={item.url} component={post} />
          ) 
        })}
      </Switch>
    </Router>,

  document.getElementById('root'));