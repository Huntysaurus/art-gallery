import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../appStyles.module.css'

function Header({ user }){

    const navigate = useNavigate()

    function navigateClick() {
        if (user === null) {
            navigate('/')
        } else {
            navigate('/galleries')
        }
    }

    return (
        <>
        <div className={styles.banner}>
            <h1 onClick={()=>navigateClick()}className={styles.fancy_Header}>Art Gallery</h1>
            <h1 className={styles.title_name_2}>Creatives Sharing Work With Creatives</h1>
        </div>
        </>
    )
}

export default Header