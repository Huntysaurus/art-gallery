import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../appStyles.module.css';

function SignUp({ onLogin }) {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passConfirmation, setPassConfirmation] = useState('')
    const [bio, setBio] = useState('')
    const [profilePic, setProfilePic] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passConfirmation,
                image_url: profilePic,
                bio,
            }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then((user) => onLogin(user))
            } else {
                r.json().then((err) => console.log(err.errors))
            }
        })
    }

    // create validations for param errors to show if rejected

    return (
        <>
        <div className={styles.bg2}>    
            <div className={styles.wrapper}>
                <button style={{marginRight:350}} onClick={()=>navigate('/login')}>back to login</button>
                <h2 className={styles.title_name}>Sign Up</h2>
                <p className={styles.text}>Create an account so you can share your creations with the world!</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Create a username: '}
                            <input
                                placeholder="enter username"
                                type="text"
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
                                type="password"
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
                                type="password"
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
                                type="text"
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
        </div>
        </>
    )
}

export default SignUp