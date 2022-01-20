import React from 'react';
import { Link } from "react-router-dom";

// Redux: Imports
import { connect } from "react-redux";

// Redux: Map State
const Home = ({ isLogin, user }) => {

    return (
        <>
            {isLogin
                ? <h1> Welcome, {user.username} </h1>
                : <h1> Go to <Link to="/login">Login </Link>  </h1>
            }
        </>
    )
}

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
