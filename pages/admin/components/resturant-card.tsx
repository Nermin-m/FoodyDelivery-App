import React from "react";
import Image from "next/image";
import styles from '../../styles/resturant-card.module.css'
export default function Resturant() {
    return (

        <section>
            <div className={styles.resturantNameCard}>
                <div><img src="/resturantimg1.svg" alt="" className={styles.image} /></div>
                <div className={styles.textImg}>
                    <p>Papa John's</p>
                    <p>Pizza</p>
                </div>
                <div className={styles.Remover}>
                    <img src="/removepizza.svg" alt="" />
                    <img src="/editname.svg" alt="" />
                </div>
            </div>
        </section>
    );
}