import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
// import logo from './logo.svg';
import HomePage from './HomePage/HomePage'
import Login from './LoginSignUp/Login'
import Signup from './LoginSignUp/Signup'
import MapPage from './MapPage/MapPage'
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <main className="grid-container"></main> */}
      <Router>
      {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login'  component={Login} />
          <Route exact path='/signup'  component={Signup} />

          <Route exact path='/mappage'  component={MapPage} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
