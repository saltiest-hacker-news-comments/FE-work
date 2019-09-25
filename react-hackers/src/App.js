// React Stuff
import React, {useEffect} from 'react';
import { Route, Switch} from "react-router-dom";
// Axios Stuff
import axiosWithAuth  from './utils/axiosWithAuth';
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

function App() {

  // useEffect(() => {
  //   axiosWithAuth()
  //   .get('/app/login',)
  //   .then(res => console.log("%cGet Axios: ", "color:blue", res))
  //   .catch(err=> console.log( err ))
  // })

  return (
    <div className="App">
      <Header />
      {/* <FormikLogin /> */}
      
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login"  component={FormikLogin}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/commentList"  component={CommentList} />
        <Route exact path="/account"  component={AccountCard}/>
        <Route exact path="/account"  component={AccountList}/> 
        {/* <PrivateRoute exact path="/account"  component={AccountList}/> */}
      </Switch>
    </div>
  );
}

export default App;
