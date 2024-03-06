// Pizza.js

import React, { useState } from "react";
import styles from '../styles2/pizza.module.css';
import Image from "next/image";

export default function Pizza() {
    const [pizzaName, setPizzaName] = useState("Marqarita");
    const [isRemoved, setIsRemoved] = useState(false);

    const handleEditNameClick = () => {
        const newName = prompt("Enter the new pizza name:");
        if (newName !== null) {
            setPizzaName(newName);
        }
    };

    const handleRemovePizzaClick = () => {
       
        setIsRemoved(true);
    };

    if (isRemoved) {
        return null;
    }

    return (
        <div className={styles.Pizza}>
            <div className={styles.pizzaimg}>
                <img src="/pizza.svg" alt="" />
            </div>
            <div className={styles.PizzaCard}>
                <p className={styles.type}>{pizzaName}</p>
                <p className={styles.RestoranName}>Papa John's</p>
                <div className={styles.pizzaEdit}>
                    <div><p>$16</p></div>
                    <div className={styles.editor}>
                        <img src="/editname.svg" alt="" onClick={handleEditNameClick} />
                        <img src="/removepizza.svg" alt="" onClick={handleRemovePizzaClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}
