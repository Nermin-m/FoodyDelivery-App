// Import React and CSS module
import React from "react";
import styles from '../../styles/table.module.css';
import Image from "next/image";

// Table component
export default function Table() {
    return (
        <table className={styles.Table}>
            <thead>
                <tr>
                    <th className={styles.TableHead}>Code</th>
                    <th className={styles.TableHead}>Item</th>
                    <th className={styles.TableHead}>Name</th>
                    <th className={styles.TableHead}>Slug</th>
                </tr>
            </thead>
            <tbody className={styles.TableBody}>
                <tr>
                    <td className={styles.text}>9177</td>
                    <td className={styles.TableCell}>
                        <Image src="/pizzaPic.svg" alt="Delicious Pizza" width={50} height={50} />
                    </td>
                    <td className={styles.text2}>Pizza </td>
                    <td>yummuy-pizza</td>
                </tr>
                <tr>
                    <td className={styles.text}>9178</td>
                    <td className={styles.TableCell}>
                        <Image src="/sendvic.svg" alt="Tasty Sandwich" width={50} height={50} />
                    </td>

                    <td className={styles.text2}>Sendvic</td>
                    <td>sendvic</td>
                </tr>
                <tr>
                    <td className={styles.text}>9179</td>
                    <td className={styles.TableCell}>
                        <Image src="/fires.svg" alt="Crispy Fries" width={50} height={50} />
                    </td>
                    <td className={styles.text2}>Fries Name</td>
                    <td>fries</td>
                </tr>

                <tr>
                    <td className={styles.text}>9179</td>
                    <td className={styles.TableCell}>
                        <Image src="/fires.svg" alt="Crispy Fries" width={50} height={50} />
                    </td>
                    <td className={styles.text2}>Fries Name</td>
                    <td>fries</td>
                </tr>

                {/* Additional rows here */}
            </tbody>
        </table>
    );
}
