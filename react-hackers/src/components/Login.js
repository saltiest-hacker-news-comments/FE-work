// React Stuff
import React, { useState, useEffect } from 'react';
// Formik Stuff
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// Axios Stuff
import Axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'


const Login = ({ values, errors, status, touched }) => {
    const [logins, setLogins] = useState([]);
    useEffect(() => {
        if (status) {
            setLogins([[...logins, status]])
        }
    }, [status]);
    return (
        <div className="login-form">
            <h2>Please Login</h2>

            <form>
                <field type="text" email="email" placeholder="Your Email" />
                {touched.email && errors.email && (
                    <p classsName="error">{errors.email} </p>)}

                <Field type="text" name="password" placeholder="Your Password" />
                {touched.password && errors.password && (
                    <p className="error">{errors.password} </p>

                )}
            )}
            <button>Login</button>
            </form>
            {/* Response */}
            {logins.map(login => (
                <div className="response">
                    <h4>Thank you!</h4>
                    <p>Email:{login.email}</p>
                    <p>Password:{login.password}</p>
                </div>
            ))}
        </div>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Enter your email"),
        password: Yup.string().required("Enter your password")
      }),
    
    handleSubmit(values, { props, setStatus }) {
        console.log("%cUserLogin values: ", "color:orange", values)
        axiosWithAuth()
            .post('/auth/login')
            .then(res => {
                console.log("c%Axios Login res: ", "color:orange", res),
                    localStorage.setItem('token', res.data.payload);
            })
            .catch(err => console.log("%cLogin Axios Err: ", "color:orange", err))
    }
})(login);


console.log(" Test HOF", FormikLogin);
export default FormikLogin;

