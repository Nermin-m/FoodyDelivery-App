import React from "react";
import Image from "next/image";
import styles from './offers.module.css'
import Dashboard from "../../../component/dashboard";
import Header from "../../../component/header";
import EaLogo from "../../../component/eacamplogo";
import AddOffer from '../../../component/addOffer'
export default function Index() {
    return (
        <>
            <Header></Header>
            <Dashboard></Dashboard>
            <EaLogo></EaLogo>

            <section>
                <div className={styles.offers}>
                    <p>Offers</p>
                    <AddOffer></AddOffer>
                </div>
            </section>

            <section>
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <th className={styles.TableHead}>Id</th>
                            <th className={styles.TableHead}>Image</th>
                            <th className={styles.TableHead}>Title</th>

                            <th className={styles.TableHead}>Description</th>


                        </tr>
                    </thead>
                    <tbody className={styles.TableBody}>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td><img src="/pizzaPic.svg" alt="" /></td>
                            <td>Do you like Pizza at Pap...</td>
                            <td>Yummy this pizza but...</td>

                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td><img src="/pizzaPic.svg" alt="" /></td>
                            <td>Do you like Pizza at Pap...</td>
                            <td>Yummy this pizza but...</td>

                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td><img src="/pizzaPic.svg" alt="" /></td>
                            <td>Do you like Pizza at Pap...</td>
                            <td>Yummy this pizza but...</td>

                        </tr>

                        <tr>
                            <td className={styles.text}>9177</td>
                            <td><img src="/pizzaPic.svg" alt="" /></td>
                            <td>Do you like Pizza at Pap...</td>
                            <td>Yummy this pizza but...</td>

                        </tr>
                        <tr>
                            <td className={styles.text}>9177</td>
                            <td><img src="/pizzaPic.svg" alt="" /></td>
                            <td>Do you like Pizza at Pap...</td>
                            <td>Yummy this pizza but...</td>

                        </tr>

                    </tbody>
                </table>
            </section>
        </>
    )
}






