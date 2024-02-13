import React from "react";
import styles from '../../styles/dashboard.module.css';
import Image from 'next/image';
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <div className={styles.dashboard}>
                <div className={styles.move}>
                    <div className={styles.dashboard1}>
                        <Image src="/dasboardimg1.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/products" className={styles.text}>Dashboard</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg2.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/products2" className={styles.text}>Products</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg3.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/resturant" className={styles.text}>Resturants</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg4.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/category" className={styles.text}>Category</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg5.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/orders" className={styles.text}>Orders</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboardimg6.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/offers" className={styles.text}>Offer</Link>
                    </div>

                    <div className={styles.dashboard1}>
                        <Image src="/dashboard7.svg" alt="Dashboard Image" width={20} height={20} />
                        <Link href="/adminlogin" className={styles.text}>Log out</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
