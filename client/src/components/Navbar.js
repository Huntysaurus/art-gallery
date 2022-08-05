import React from "react";
import { NavLink } from "react-router-dom";


function Navbar({ user, setUser }) {

    function handleLogoutClick() {
        fetch('/logout', {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

    return (
        <div>
            { user ?
            <>
                <button onClick={handleLogoutClick} >logout</button>
                <NavLink to="/gallery">
                    gallery
                </NavLink>
            </>
            :
            <>
                <NavLink to="/login">
                    Login
                </NavLink>
                <NavLink to='/signup'>
                    Sign Up
                </NavLink>
            </>
            }
        </div>

    )
}

export default Navbar