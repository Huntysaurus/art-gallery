import React, { useState } from "react";
import styles from '../appStyles.module.css';

function SignUp() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirmation, setPassConfirmation] = useState('')
    const [bio, setBio] = useState('')
    const [profilePic, setProfilePic] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(
            {username: username, 
            password: password,
            passConfirmation: passConfirmation, 
            bio: bio, 
            profilePic: profilePic
            })
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title_name}>Sign Up</h2>
                <p className={styles.text}>Create an account so you can share your creations with the world!</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Create a username: '}
                            <input
                                placeholder="enter username"
                                 value={username}
                                 onChange={(e)=>setUsername(e.target.value)}
                            />
                        </label>
                        <br/>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Create a password: '}
                            <input
                                placeholder="enter password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </label>
                        <br/>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Confirm Password: '}
                            <input
                                placeholder="confirm password"
                                value={passConfirmation}
                                onChange={(e)=>setPassConfirmation(e.target.value)}
                            />
                        </label>
                        <br/>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Add a bio: '}
                            <textarea className={styles.textarea}
                                placeholder="enter bio"
                                value={bio}
                                onChange={(e)=>setBio(e.target.value)}
                            />
                        </label>
                        <br/>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Add a Profile Picture: '}
                            <input
                                placeholder="enter picture"
                                value={profilePic}
                                onChange={(e)=>setProfilePic(e.target.value)}
                            />
                        </label>
                        <br/>
                    </div>
                    <br/>
                    <button className={styles.button} type='submit'>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp