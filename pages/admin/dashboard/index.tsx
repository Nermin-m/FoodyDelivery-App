// Product.js

import React from "react";
import styles from './dashboardPage.module.css';
import Image from 'next/image';
import Header from '../../../component/header'
import Dashboard from "../../../component/dashboard";
import Ealogo from '../../../component/eacamplogo';
import OrderLogo from '../../../public/ordersstatic.svg'
export default function Index() {
    return (
        <>


            <Header></Header>

            <section>
                <Dashboard></Dashboard>


                <div className={styles.orders}>
                    <div className={styles.ordersmain}>
                        <p className={styles.orderstext}>Orders</p>
                        <p className={styles.imgText}>Projects by account</p>
                        <Image src={OrderLogo} alt='order' className={styles.ordersimg}></Image>
                    </div>
                    <div className={styles.ellipseMain}>
                        <div className={styles.ellipse}>
                            <img src="/ellipse1.svg" alt="" />
                            <p>KFC</p>
                        </div>


                        <div className={styles.ellipse}>
                            <img src="/ellipse2.svg" alt="" />
                            <p>KLM</p>
                        </div>



                        <div className={styles.ellipse}>
                            <img src="/ellipse3.svg" alt="" />
                            <p>American Express</p>
                        </div>
                    </div>
                </div>


                <div className={styles.TotalSalary}>
                    <div className={styles.SalaryStatic}>
                        <p className={styles.SalaryText1}>Total Salary</p>
                        <p className={styles.SalaryText2}>Years</p>
                        <img src="/diagram.svg" alt="" className={styles.Diagram} />
                        <div className={styles.diagramMain}>
                            <div className={styles.diagramExtend}>
                                <img src="/diagram1.svg" alt="" />
                                <p>KFC</p>
                            </div>


                            <div className={styles.diagramExtend}>
                                <img src="/diagram2.svg" alt="" />
                                <p>KLM</p>
                            </div>



                            <div className={styles.diagramExtend}>
                                <img src="/diagram3.svg" alt="" />
                                <p>American Express</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Ealogo></Ealogo>

                <div className={styles.layout2}>
                    <p>Assigned Risks</p>
                    <p>There are no risks assigned.</p>
                </div>
                <div className={styles.layout3}>
                    <p>Assigned Action Items</p>
                    <p>There are no action items assigned.</p>
                </div>
            </section>
        </>
    );
}
