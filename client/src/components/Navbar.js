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
            navigate('/')
        })
    }

    return (
        <div>
            { user ?
            <div className={styles.nav_bar}>
                <button className={styles.nav_button} onClick={handleLogoutClick} >logout</button>
                <NavLink className={styles.nav_link} to="/galleries">
                    galleries
                </NavLink>
                {/* <NavLink className={styles.add_piece} to="/create_piece">
                    + P
                </NavLink> */}
            </div>
            :
            null
            }
        </div>

    )
}

export default Navbar