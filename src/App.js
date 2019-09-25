// React Stuff
import React, { useEffect, useState, useMemo } from 'react';
import { Route, Switch } from "react-router-dom";
// Axios Stuff
import axiosWithAuth from './utils/axiosWithAuth';
// Styling
import './App.css';
// Component Imports
import PrivateRoute from './components/PrivateRouter';
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import FormikLogin from "./components/Login";
import About from "./components/About";
import Landing from "./components/LandingPage/Landing";
import AccountCard from "./components/AccountCard";
import AccountList from "./components/AccountList";
import { CommentList } from "./components/CommentList";
import { UserContext } from './context/UserContext';

import ProgressLoader from './components/Loader';
import Footer from "./components/Footer"

function App() {

  const [user, setUser] = useState([]);
  console.log("%cAPP user: ", "color:blue", user);

  // const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <div className="App">


        <Header />
        {/* <FormikLogin /> */}

        {/* <ProgressLoader /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={FormikLogin} />
          <Route exact path="/about" component={About} />
          <Route exact path="/commentList" component={CommentList} />
          <PrivateRoute exact path="/account" component={AccountList} />


        </Switch>
      </div>
    </UserContext.Provider>

  );
}

export default App;
