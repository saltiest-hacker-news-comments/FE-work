// React Stuff
import React, { useState, useEffect, useContext, useMemo } from 'react';
// Formik Stuff
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// Axios Stuff
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
//React-strap
import {
    FormGroup,
    Label,
    Input,
    NavLink,
    Button

} from "reactstrap";

import { UserContext } from '../context/UserContext';




const Login = ({ values, errors, status, touched, handleSubmit }) => {

    const { setUser } = useContext(UserContext);


    const [logins, setLogins] = useState([]);
    // console.log("User Login: ", logins)

    useEffect(() => {
        if (status) {
            setLogins([...logins, status]);
            setUser(status);
        }
    }, [status]);
    return (
        <div className="signUpForm form">
            <h2 className="headerStyles">Have an Account? Login Below!</h2>

            <Form className="signUpForm form" onSubmit={handleSubmit}>


                {/* <FormGroup className="loginUserPass">
                    <Label> 🧂 Username: </Label>
                    <Input className="loginComp" type="text" name="username" placeholder="Username" />
                </FormGroup> */}

                <div className="loginUserPass">🧂 Username: </div>
                <Field className="loginComp" type="text" name="username" placeholder="Your Username" />

                {touched.username && errors.username && (
                    <p className="error">{errors.username} </p>

                )}

                {/* <FormGroup className="loginUserPass">
                    <Label> 🔑 Password: </Label>
                    <Input className="loginComp" type="password" name="password" placeholder="Password" />
                </FormGroup> */}

                <div className="loginUserPass"> 🔑 Password: </div>
                <Field className="loginComp" type="text" name="password" placeholder="Your Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password} </p>

                )}

                <button className="signUpSubmitBtn submitBtn" type="submit">Login ✔️</button>

                {/* Link to SignUp If user has an Account */}
                <NavLink className="signUpLink" href="/signup"> Don't Have an Account? Sign Up Here !</NavLink>

            </Form>
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

    handleSubmit(values, { props, setStatus, setUser }) {
        // console.log("UserLogin values: ", values)
        axiosWithAuth()
            .post('/auth/login', values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
                // setUser(values);
                localStorage.setItem("token", res.data.token);
                props.history.push('/account')

            })
            .catch(err => console.log("%cLogin Axios Err: ", "color:orange", err))
    }
})(Login);


// console.log(" Test HOF", FormikLogin);
export default FormikLogin;



