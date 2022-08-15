import React, { useEffect } from "react";
import styles from '../appStyles.module.css';

function ProfilePage({ user }) {


    // useEffect(()=> {
    //     fetch('/users')
    // })

    console.log(user)
    
    return (
        <div className={styles.card_holder}>
            <h1 className={styles.title_name}>{user.username}</h1>
            <img className={styles.card_page}
                src={user.image_url}
                alt={user.username}
            />
            <div className={styles.card_iw}>
                <p className={styles.card_description} >{user.bio}</p>
            </div>
        </div>
    )
}

export default ProfilePage