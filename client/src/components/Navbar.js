import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {

    // work on navbar and how to get a user/session to be logged in

    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to='/signup'>
                Sign Up
            </NavLink>
        </div>

    )
}

export default Navbar