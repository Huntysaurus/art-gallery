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
            navigate('/login')
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