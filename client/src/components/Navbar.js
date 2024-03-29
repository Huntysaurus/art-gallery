import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../appStyles.module.css';


function Navbar({ onLogoutClick, user }) {

    return (
        <div>
            { user ?
            <div>
                <button className={styles.nav_button} onClick={onLogoutClick} >logout</button>
                <NavLink className={styles.nav_link} to="/galleries">
                    galleries
                </NavLink>
                <NavLink className={styles.nav_link} to='/profile'>
                    profile
                </NavLink>
            </div>
            :
            null
            }
        </div>

    )
}

export default Navbar