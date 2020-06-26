// React Stuff
import React, { useMemo, useState } from 'react';
import { Route, Switch } from "react-router-dom";
// Styling
import './App.css';
import About from "./components/About";
import AccountList from "./components/AccountList";
import { CommentList } from "./components/CommentList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/LandingPage/Landing";
import FormikLogin from "./components/Login";
// Component Imports
import PrivateRoute from './components/PrivateRouter';
import SignUp from "./components/SignUp";
import { UserContext } from './context/UserContext';

function App() {

  // get a list of users: https://salty-hackers.herokuapp.com/api/users/list


  const [user, setUser] = useState([]);
  console.log("%cAPP user: ", "color:blue", user);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  

  return (
    <UserContext.Provider value={providerValue} >
      <div className="App">

        {/* <SemanticNav /> */}
        <Header />
        {/* <FormikLogin /> */}

        {/* <ProgressLoader /> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={FormikLogin} />

          <Route exact path="/about" component={About} />
          <Route exact path="/commentList" component={CommentList} />
          {/* <Route exact path="/account" component={AccountList} /> */}
          <PrivateRoute exact path="/account" component={AccountList} />
          {/* <Route path="/navCondition" component={NavCondition} /> */}

        </Switch>
        <Footer />
      </div>
    </UserContext.Provider>

  );
}

export default App;
