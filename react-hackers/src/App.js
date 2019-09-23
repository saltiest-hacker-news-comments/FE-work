// React Stuff
import React from 'react';
import { Route, Switch} from "react-router-dom";
// Styling
import './App.css';
// Component Imports
import PrivateRoute from './components/PrivateRouter';
import Header from "./components/Header";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <Header />
      <h1>hello</h1>
      <Switch>

        <Route exact path="/" />
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" />
        <PrivateRoute path="/account" />
        

      </Switch>
    </div>
  );
}

export default App;
