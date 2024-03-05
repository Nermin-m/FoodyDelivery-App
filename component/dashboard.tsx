import React from "react";
import styles from '../styles2/dashboard.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <div className={styles.dashboard}>
                <div className={styles.move}>
                    <div className={styles.dashboard1}>
                        <Image src="/dasboardimg1.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/admin/dashboard" className={styles.text}>Dashboard</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg2.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/admin/products" className={styles.text}>Products</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg3.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/admin/resturants" className={styles.text}>Resturants</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg4.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/admin/category" className={styles.text}>Category</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg5.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/admin/orders" className={styles.text}>Orders</Link>
                    </div>
        
                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg6.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/admin/offers" className={styles.text}>Offer</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboard7.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/admin" className={styles.text}>Log out</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
