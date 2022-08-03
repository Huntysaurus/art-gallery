import React from "react";
import styles from '../appStyles.module.css';

function SignUp() {

    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.title_name}>Sign Up</h2>
                <p className={styles.text}>Share your creations with the world!</p>

                <form>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Create a username: '}
                            <input
                                placeholder="enter username"
                                // value={username}
                                // onChange=
                            />
                            <br/>
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Create a password: '}
                            <input
                                placeholder="enter password"
                                // value={password}
                                // onChange=
                            />
                            <br/>
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Confirm Password: '}
                            <input
                                placeholder="confirm password"
                                // value={passwordConfirmation}
                                // onChange=
                            />
                            <br/>
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Add a bio: '}
                            <textarea className={styles.textarea}
                                placeholder="enter bio"
                                // value={username}
                                // onChange=
                            />
                            <br/>
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <label className={styles.label}>
                            {'Add a Profile Picture: '}
                            <input
                                placeholder="enter picture"
                                // value={username}
                                // onChange=
                            />
                            <br/>
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp