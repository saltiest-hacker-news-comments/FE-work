//React
//Formik
import { Form } from "formik";
import React, { useState } from "react";
//ReactStrap
import {
    FormGroup,

    Input, Label,

    NavLink
} from "reactstrap";
import axiosWithAuth from "../utils/axiosWithAuth";






/* Component ------------------------------------------------------------------------------------------------------ */
const SignUp = (props) => {

    const [users, setUsers] = useState([]);

    console.log("USERS: ", users);

    const handleChange = e => {
        // console.log('here in the handleChange ', e.target.value);
        setUsers({
            ...users, [e.target.name]: e.target.value
        });
    };



    const handleSubmit = e => {
        // ProgressLoader();
        console.log("CLICKED!");
        axiosWithAuth()
            .post('/auth/register', { username: users.username, password: users.password })
            // .then(res => setUsers(res))
            .then(res => console.log('%c UserSignUp Res: ', 'color:green', res))
            .then(props.history.push("/login"))
            .catch(err => console.log('%c UserSignUp Err: ', 'color:green', err))
        e.preventDefault();
    };

    return (
        <div className="signUpForm form">
            <Form onSubmit={handleSubmit} className="signUpForm form"   >

                <h2 className="headerStyles signUpHeaderStyles">Don't Have an Account? Sign Up Below !</h2>

                <FormGroup className="signUpInput">
                    <Label> 🧂 Username: </Label>
                    <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={users.username} />
                </FormGroup>

                <FormGroup className="signUpInput">
                    <Label> 🔑 Password: </Label>
                    <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={users.password} />
                </FormGroup>

                <button className="signUpSubmitBtn submitBtn" type="submit">Submit ✔️</button>

            </Form>

            {/* Link to Login If user has an Account */}
            <NavLink className="logInLink" href="/login" > Have an Account? Login Here!</NavLink>
        </div>
    );
}

export default SignUp;




{/*<FormGroup className="signUpInput">
             <Label> 🥨 First Name: </Label>
             <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange}/>
         </FormGroup>


         <FormGroup className="signUpInput">
             <Label> 🥨 Last Name: </Label>
             <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange}/>
         </FormGroup> *
          <FormGroup className="signUpInput">
             <Label> 📧 E-Mail: </Label>
             <Input type="email" name="email" placeholder="E-Mail" onChange={handleChange}/>
         </FormGroup>
          */}
