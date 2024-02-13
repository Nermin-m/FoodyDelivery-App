// Product.js

import React from "react";
import styles from '../../styles/header.module.css';
import Image from 'next/image';


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerdiv}>
                <p className={styles.foodytext}>Foody<span className={styles.span}>.</span></p>
            </div>
            <div className={styles.headerend}>
                <button className={styles.button}>+ ADD PRODUCT</button>
                <p>
                    <img src="/adminImg.svg" alt="Admin Image" />
                    Admin
                </p>
            </div>
        </header>
    )
}