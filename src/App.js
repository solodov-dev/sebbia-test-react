import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Categories from './components/Categories';
import Details from './components/Details';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Redirect to="/categories"/>
          </Route>
          <Route path="/categories" component={Categories}/>
          <Route path="/news/details" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
