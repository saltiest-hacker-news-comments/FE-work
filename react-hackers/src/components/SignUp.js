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
    Input
  } from "reactstrap";

//Formik
import { withFormik, Form, Field } from "formik";

//Yup
import * as Yup from "yup";

//Axios
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";





/* Component ------------------------------------------------------------------------------------------------------ */
const SignUp =({ touched, status, errors, values })=> {

    const [users,setUsers] = useState([]);

      return (
        <Form className="signUpForm form">

         <FormGroup className="signUpInput">
             <Label> 🥨 First Name: </Label>
             <Input type="text" name="firstName" placeholder="First Name"/>
         </FormGroup>


         <FormGroup className="signUpInput">
             <Label> 🥨 Last Name: </Label>
             <Input type="text" name="lastName" placeholder="Last Name"/>
         </FormGroup>


        <FormGroup className="signUpInput">
             <Label> 🧂 Username: </Label>
             <Input type="text" name="username" placeholder="Username"/>
        </FormGroup>


         <FormGroup className="signUpInput">
             <Label> 📧 E-Mail: </Label>
             <Input type="email" name="email" placeholder="E-Mail"/>
         </FormGroup>
         

         <FormGroup className="signUpInput">
             <Label> 🔑 Password: </Label>
             <Input type="text" name="password" placeholder="Password"/>
         </FormGroup>

         <button className="signUpSubmitBtn submitBtn">Submit ✔️</button>

        </Form>
    );
}


const FormikUserSignUpForm = withFormik({
    mapPropsToValues({username, password, email, firstName, lastName}) {
        return {
            username: username || '',
            password: password || '',
            email: email || '',
            firstName: firstName || '',
            lastName:lastName || '',
            
        };
    },

    handleSubmit(values, {resetForm, props, setStatus}) {
        axiosWithAuth()
        .post('auth/register', {username: values.username, password: values.password})
        .then( res => {
            console.log('%c UserSignUp Res: ', 'color:green', res)
        })
        .catch( err => console.log('%c UserSignUp Err: ', 'color:green', err))
    }
    
})


export default SignUp;