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
        // You can implement the logic to remove the pizza from the site here
        // For example, you can make an API call to delete the pizza from the database.
        // After removing the pizza, update the state to hide the pizza element.
        setIsRemoved(true);
    };

    if (isRemoved) {
        // If the pizza is removed, return null to render nothing
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
