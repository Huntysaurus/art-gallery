import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from '../appStyles.module.css';


function Navbar({ user, setUser }) {

    const navigate = useNavigate()

    function handleLogoutClick() {
        fetch('/logout', {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null)
            }
            window.confirm('are you sure you want to log out?')
            navigate('/')
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
            null
            }
        </div>

    )
}

export default Navbar