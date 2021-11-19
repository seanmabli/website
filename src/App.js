import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import content from './Pages/content';
import Blog from './Pages/blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Blog} />
          {content.map((item) => {
            return (
              <Route exact path={item.url} component={Blog} />
            ) 
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;