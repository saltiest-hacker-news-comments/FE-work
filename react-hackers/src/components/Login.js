// React Stuff
import React, { useState, useEffect } from 'react';
// Formik Stuff
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// Axios Stuff
import axiosWithAuth from '../utils/axiosWithAuth';
//React-strap
import {Button} from "reactstrap";



const Login = ({ values, errors, status, touched }) => {
    const [logins, setLogins] = useState([]);

    console.log("LOGINS: ",logins.username)
    useEffect(() => {
        if (status) {
            setLogins([[...logins, status]])
        }
    }, [status]);
    return (
        <div className="signUpForm form">
            <h2>Please Login</h2>

            <form>
                <Field className="signUpInput" type="text" name="username" placeholder="Your Username" />
                {touched.username && errors.username && (
                    <p className="error">{errors.username} </p>

              )}

                <Field className="signUpInput" type="text" name="password" placeholder="Your Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password} </p>

                )}
            
            <Button className="signUpSubmitBtn submitBtn">Login</Button>
            </form>
            {/* Response */}
            {logins.map(login => (

                <div className="response">
                    <h4>Thank you!</h4>
                    <p>UserName:{login.username}</p>
                    <p>Password:{login.password}</p>
                </div>
            ))}
        </div>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("Enter your username"),
        password: Yup.string().required("Enter your password")
      }),
    
    handleSubmit(values, { props, setStatus }) {
        console.log("%cUserLogin values: ", "color:orange", values)
        axiosWithAuth()
            .post('/auth/login')
            .then(res => 
                console.log("c%Axios Login res: ", "color:orange", res),
                    // localStorage.setItem('token', res.data.payload);
            )
            .catch(err => console.log("%cLogin Axios Err: ", "color:orange", err))
    }
})(Login);


// console.log(" Test HOF", FormikLogin);
export default FormikLogin;



