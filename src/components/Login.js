import React from 'react';

// Redux: Imports
import { connect } from "react-redux";
// Redux: Actions
import { loginRequest } from "../actions";

const Login = (props) => {    

    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        if (username && password) {
            props.loginRequest({ username, password });
        }
    }

    return (
        <>
            <h1>Login:</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder='Username' />
                <input type="password" name="password" placeholder='Password' />
                <button type="submit"> OK</button>
            </form>
        </>
    )
}

// Redux: Actions -> Props
const mapDispatchToProps = {
    loginRequest,
}

// Redux: Connect
export default connect(null, mapDispatchToProps)(Login);
