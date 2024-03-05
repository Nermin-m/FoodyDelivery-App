import React from "react";
import styles from './login.module.css';
import Image from 'next/image';

export default function Index() {
    return (
        <>
        <div className={styles.Background}>

       
            <header>
                <p className={styles.text}>Foody <span className={styles.nokta}>.</span></p>
            </header>
            <section>
                <div className={styles.maindiv}>
                    <div className={styles.logindiv}>
                        <p className={styles.maindivtext}>Welcome Admin</p>
                        <input type="text" className={styles.input} placeholder="Username" />
                        <input type="password" className={styles.input} placeholder="Password" />
                        <button className={styles.button}>Sign in</button>

                    </div>
                    <div className={styles.fotodiv}>
                        <img src={'/adminlogin.svg'} alt="" />
                    </div>
                </div>
            </section>
            </div>
        </>
    );
}