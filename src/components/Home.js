import React from 'react';

// Redux: Imports
import { connect } from "react-redux";

// Redux: Map State
const Home = ({ isLogin, user }) => (

    <h1>Welcome, {user.username} </h1>

);

// Redux: State -> Props
const mapStateToProps = state => (
    {
        // Map only the necessary
        isLogin: state.isLogin,
        user: state.user,
    }
);

// Redux: Connect Component
export default connect(mapStateToProps, null)(Home);
