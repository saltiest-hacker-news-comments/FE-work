// React Stuff
import React, { useState, useEffect, useContext, useMemo } from 'react';
// Formik Stuff
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// Axios Stuff
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';
//React-strap
import { Button, NavLink } from "reactstrap";
import { UserContext } from '../context/UserContext';
import ProgressLoader from './Loader';


const Login = ({ values, errors, status, touched, handleSubmit, ProgressLoader }) => {

    const { user, setUser } = useContext(UserContext);
    // console.log("User Login: ", user)

    const [logins, setLogins] = useState([]);
    console.log("Login Data: ", logins)



    useEffect(() => {
        if (status) {
            // setUser([[...logins, status]]);
            setLogins([[...logins, status]]);
        }
    }, [status]);
    return (
        <div className="signUpForm form">
            <h2 className="headerStyles">Have an Account? Login Below!</h2>

            <Form className="signUpForm form" onSubmit={handleSubmit}>

                <div className="loginUserPass">🧂 Username: </div>
                <Field className="loginComp" type="text" name="username" placeholder="Your Username" />
                {touched.username && errors.username && (
                    <p className="error">{errors.username} </p>

                )}
                <div className="loginUserPass"> 🔑 Password: </div>
                <Field className="loginComp" type="text" name="password" placeholder="Your Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password} </p>

                )}

                <Button className="signUpSubmitBtn submitBtn" type="submit">Login</Button>

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
        console.log(username, password);
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
            .post('/auth/login', values)
            .then(res => setStatus(res.data))
            .then(props.history.push('/'))
            .catch(err => console.log("%cLogin Axios Err: ", "color:orange", err))
    }
})(Login);


// console.log(" Test HOF", FormikLogin);
export default FormikLogin;



