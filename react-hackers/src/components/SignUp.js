//React
import React, { useState, useEffect } from "react";

//ReactStrap
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
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

    const [users,setUsers] = useState({firstName: '', lastname: '',username: '', email: '', password: ''});

    const handleChange = e => {
        setUsers({
            ...users,
            [e.target.name]: e.target.values
        });
    };


    const handleSubmit = () => {
        console.log("CLICKED!");
        axiosWithAuth()
        .post('auth/register', {username: values.username, password: values.password})
        .then( res => {
            console.log('%c UserSignUp Res: ', 'color:green', res)
        })
        .catch( err => console.log('%c UserSignUp Err: ', 'color:green', err))
    };

    return (
        <Form onSubmit={handleSubmit} className="signUpForm form"   >

         
{/* 
         <FormGroup className="signUpInput">
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

         {/* Link to Login If user has an Account */}


         <NavLink className="logInLink" href="/login" > Have an Account? Log In !</NavLink>
        </Form>
    );
}

export default SignUp;