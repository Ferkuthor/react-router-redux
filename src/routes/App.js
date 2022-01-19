import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import Login from '../components/Login';

import '../App.css';

const App = () => (
    <BrowserRouter>
        <header className="App-header">

            <Link to="/">
                <div>Home</div>
            </Link>

            <Link to="Login">
                <div>Login</div>
            </Link>

        </header>

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

    </BrowserRouter>
);

export default App;
