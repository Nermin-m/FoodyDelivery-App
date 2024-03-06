// Product.js

import React from "react";
import styles from '../styles2/header.module.css';
import Image from 'next/image';
import AddProduct from './addProduct';
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerdiv}>
                <p className={styles.foodytext}>Foody<span className={styles.span}>.</span></p>
            </div>
            <div className={styles.headerend}>
                <AddProduct/>
                <div className={styles.adminUser}> 
                    <img src="/adminImg.svg" alt="Admin Image" />
                    <p>Admin</p>
                </div>
            </div>
        </header>
    )
}
