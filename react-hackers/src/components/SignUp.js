//React
import React, { useState, useEffect } from "react";

//ReactStrap
import {
    FormGroup,
    Label,
    Input,
    NavLink
  } from "reactstrap";

//Formik
import { withFormik, Form, Field } from "formik";

//Yup
import * as Yup from "yup";

//Axios
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

/* Component ------------------------------------------------------------------------------------------------------ */
const SignUp =({ touched, status, errors, values })=> {

    const [users,setUsers] = useState({username:'', password:''});

    const handleChange = e => {
        setUsers({
            ...users,
            [e.target.name]: e.target.values
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("CLICKED!");
        axiosWithAuth()
        .post('/auth/register', {username: users.username, password: users.password})
        .then( res => {
            console.log('%c UserSignUp Res: ', 'color:green', res)
        })
        .catch( err => console.log('%c UserSignUp Err: ', 'color:green', err))
    };

    return (
    <div className="signUpForm form">
        <Form onSubmit={handleSubmit} className="signUpForm form"   >

        <h2 className="headerStyles signUpHeaderStyles">Don't Have an Account? Sign Up Below !</h2>

        {/*<FormGroup className="signUpInput">
             <Label> 🥨 First Name: </Label>
             <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
         </FormGroup>


         <FormGroup className="signUpInput">
             <Label> 🥨 Last Name: </Label>
             <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
         </FormGroup> */}


        <FormGroup className="signUpInput">
             <Label> 🧂 Username: </Label>
             <Input type="text" name="username" placeholder="Username" onChange={handleChange}/>
        </FormGroup>


         {/* <FormGroup className="signUpInput">
             <Label> 📧 E-Mail: </Label>
             <Input type="email" name="email" placeholder="E-Mail" onChange={handleChange}/>
         </FormGroup>
          */}

         <FormGroup className="signUpInput">
             <Label> 🔑 Password: </Label>
             <Input type="password" name="password" placeholder="Password" onChange={handleChange}/>
         </FormGroup>

         <button className="signUpSubmitBtn submitBtn">Submit ✔️</button>

        </Form>

         {/* Link to Login If user has an Account */}
         <NavLink className="logInLink" href="/login" > Have an Account? Login Here!</NavLink>
    </div>
    );
}

export default SignUp;