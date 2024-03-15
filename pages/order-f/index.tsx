import Footer from "../../components/homePage/footer"
import Navbar from "../../components/homePage/navbar"
import styles from './style.module.scss'
import profSvg from 'images/profile.svg'
import Image from "next/image";
import shekil2 from 'images/shekil2.svg'
import { useRouter } from "next/router";

export default function Index() {


    const router = useRouter()

    const profileClick = () => {
        router.push('/profile-f')
    }

    const orderClick = () => {
        router.push('/order-f')
    }

    const basketClick = () => {
        router.push('/basket-f')
    }

    const checkoutClick = () => {
        router.push('/checkout-f')
    }

    const logoutClick = () => {
        router.push('/')
    }




    return (
        <>
            <Navbar></Navbar>
            <div className={styles.profileAccount}>
                <div className={styles.profileNav}>
                    <div onClick={profileClick} className={styles.account}>
                        <Image src={profSvg} alt="account" className="icon1"></Image><p className={styles.pp}>Profile</p>
                    </div>
                    <div onClick={basketClick} className={styles.basket}>
                        <Image src={shekil2} alt="basket"></Image><p className={styles.pp}>Your Basket</p>
                    </div>
                    <div onClick={orderClick} className={styles.orders}>
                        <Image src={shekil2} alt="orders"></Image><p className={styles.pp}>Yours Orders</p>
                    </div>
                    <div onClick={checkoutClick} className={styles.checkout}>
                        <Image src={shekil2} alt="checkout"></Image><p className={styles.pp}>Checkout</p>
                    </div>
                    <div onClick={logoutClick} className={styles.logout}>
                        <Image src={shekil2} alt="logout"></Image><p className={styles.pp}>Logout</p>
                    </div>
                </div>
                <div className={styles.profile}>
                    <div className={styles.head}>
                        <h2 className={styles.h2}>Your Orders</h2>
                    </div>
                    <div className={styles.orders}>
                        <table>
                            <thead>
                                <tr >
                                    <th>ID</th>
                                    <th>Time</th>
                                    <th>Delivery Address</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>9177</td>
                                    <td>25 Dec 2021</td>
                                    <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                                    <td>$249.7</td>
                                    <td>Cash On Delivery</td>
                                    <td>994-51-410-3130</td>
                                </tr>
                                <tr >
                                    <td >9177</td>
                                    <td>25 Dec 2021</td>
                                    <td>29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                                    <td>$249.7</td>
                                    <td>Cash On Delivery</td>
                                    <td>994-51-410-3130</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
} 