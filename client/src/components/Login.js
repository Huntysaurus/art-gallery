import React, { useState } from "react";
import styles from '../appStyles.module.css';

function Login({ onLogin }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => r.json()
        
        // {
            // if (r.ok) {
            //     r.json().then((user) => console.log(user))

            // } else {
            //     // r.json().then((error) => console.log(error))
            //     console.log('error')
            // }
        // }
        ).then(console.log)
    }

    return (
        <body className={styles.bg1}>
            <div className={styles.wrapper}>
                <h2 className={styles.title_name}>Login Here</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'username: '}
                            <input
                                placeholder="enter username"
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)} 
                            />
                            <br/>
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'password: '} 
                            <input
                                placeholder="enter password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <br/>
                    <button className={styles.button} type="submit">Login</button>
                </form>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.text}>No account? Sign up here!</p>
                <button>Sign Up</button>
            </div>
        </body>
    )
}

export default Login