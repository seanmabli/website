import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Blog from './Pages/blog';
import Aiinpy from './Pages/aiinpy';

function App() {
  return (
    <div className="App">
      <Router>
			  <Navbar />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/aiinpy" component={Aiinpy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;