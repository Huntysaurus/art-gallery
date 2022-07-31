import React, { useState } from "react";
import styles from '../appStyles.module.css'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e){
        e.preventDefault()
        console.log({username, password})
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title_name}>Login Here</h2>

                <form onSubmit={handleLogin}>
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
        </>
    )
}

export default Login