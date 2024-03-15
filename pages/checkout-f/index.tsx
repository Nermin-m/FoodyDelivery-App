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
                        <h2 className={styles.h2}>Checkout</h2>
                    </div>
                    <div className={styles.checkout}>
                        <div className={styles.input}>
                            <p>Delivery Address</p>
                            <input type="text" />
                        </div>
                        <div className={styles.input}>
                            <p>Contact Number</p>
                            <input type="text" />
                        </div>
                        <h4>Payment Method</h4>
                        <div className={styles.radios}>
                            <div className={styles.radio1}>
                                <input type="radio" />
                                <p>pay at the door</p>
                            </div>
                            <div className={styles.radio2}>
                                <input type="radio" />
                                <p>pay at the door</p>
                            </div>
                        </div>
                        <button className={styles.btnCheckout}>Checkout</button>
                    </div>

                </div>
                <div className={styles.orderss}>
                    <table>

                        <caption className={styles.caption}>Your Order</caption>
                        <tbody>
                            <tr >
                                <td><span>1x </span>Papa John's Pizza Restaurant</td>
                                <td>$8.00</td>
                            </tr>
                            <tr>
                                <td><span>3x </span>Papa Coffee</td>
                                <td>$4.00</td>
                            </tr>

                            <tr>
                                <td><span>2x </span>Coca Cola</td>
                                <td>$6.00</td>
                            </tr>
                            <tr>
                                <td><span>2x </span>Papa John's Pizza Restaurant</td>
                                <td>$8.00</td>
                            </tr>
                            <tr>
                                <td><span>1x </span>Papa Coffee</td>
                                <td>$2.00</td>
                            </tr>




                        </tbody>
                        <tfoot>
                            <tr><td>Total:</td>
                                <td>$20.00</td></tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
} 