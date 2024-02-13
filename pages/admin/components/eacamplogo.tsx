
import React from "react";
import styles from '../../styles/eacamplogo.module.css';
import Image from 'next/image';


export default function EaLogo() {
    return (
        <div className={styles.mark}>
            <div className={styles.MarkMain1}>
                <img src="/eacampLogo.svg" alt="" />
                <p className={styles.markText1}>EACAMP</p>
            </div>
            <div className={styles.MarkMain2}>
                <p>Version: 1.0.</p>
                <p>2024</p>
            </div>
            <div>

            </div>
        </div>
    )
}