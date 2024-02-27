import React from "react";
import Image from "next/image";
import styles from './orders.module.css'
import Dashboard from "../../../component/dashboard";
import Header from "../../../component/header";
import EaLogo from "../../../component/eacamplogo";

export default function Index() {
    return (
        <>
            <Header></Header>
            <Dashboard></Dashboard>
            <EaLogo></EaLogo>

            <section>
                <div className={styles.order}>
                    <p>Orders</p>
                </div>
            </section>

            <section>
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <th className={styles.TableHead}>Code</th>
                            <th className={styles.TableHead}>Customer Id</th>
                            <th className={styles.TableHead}>Time</th>

                            <th className={styles.TableHead}>Delivery Addres</th>
                            <th className={styles.TableHead}>Amount</th>
                            <th className={styles.TableHead}>Payment Method</th>
                            <th className={styles.TableHead}>Contact</th>

                        </tr>
                    </thead>
                    <tbody className={styles.TableBody}>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td>022401</td>
                            <td>25 Dec 2021</td>
                            <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                            <td>$249.7</td>
                            <td>Cash On Delivery</td>
                            <td>994-51-410-3130</td>
                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td>022401</td>
                            <td>25 Dec 2021</td>
                            <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                            <td>$249.7</td>
                            <td>Cash On Delivery</td>
                            <td>994-51-410-3130</td>
                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td>022401</td>
                            <td>25 Dec 2021</td>
                            <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                            <td>$249.7</td>
                            <td>Cash On Delivery</td>
                            <td>994-51-410-3130</td>
                        </tr>

                        <tr>
                            <td className={styles.text}>9177</td>
                            <td>022401</td>
                            <td>25 Dec 2021</td>
                            <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                            <td>$249.7</td>
                            <td>Cash On Delivery</td>
                            <td>994-51-410-3130</td>
                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td>022401</td>
                            <td>25 Dec 2021</td>
                            <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                            <td>$249.7</td>
                            <td>Cash On Delivery</td>
                            <td>994-51-410-3130</td>
                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td>022401</td>
                            <td>25 Dec 2021</td>
                            <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                            <td>$249.7</td>
                            <td>Cash On Delivery</td>
                            <td>994-51-410-3130</td>
                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td>022401</td>
                            <td>25 Dec 2021</td>
                            <td className={styles.td}>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                            <td>$249.7</td>
                            <td>Cash On Delivery</td>
                            <td>994-51-410-3130</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}


