import Footer from "../../components/homePage/footer"
import Navbar from "../../components/homePage/navbar"
import styles from './style.module.scss'
import profSvg from 'images/profile.svg'
import Image from "next/image";
import shekil2 from 'images/shekil2.svg'
import productImage1 from "images/productImage1.svg"
import productImage2 from "images/productImage2.svg"
import productImage3 from "images/productImage3.svg"
import { useState } from "react";
import { useRouter } from "next/router";



export default function Index() {
    let [birinci, setBirinci] = useState(1)
    let [ikinci, setIkinci] = useState(1)
    let [ucuncu, setUcuncu] = useState(1)



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
                        <h2 className={styles.h2}>Your Basket</h2>
                    </div>
                    <div className={styles.baskets}>
                        <div className={styles.basket}>
                            <div className={styles.product}>
                                <div className={styles.productImage}>
                                    <Image src={productImage1} alt="productImage1"></Image>
                                </div>
                                <div className={styles.productName}>
                                    <h3>Papa John’s Pizza Restaurant</h3>
                                    <p>$15.80</p>
                                </div>
                            </div>
                            <div className={styles.count}>
                                <span onClick={() => {
                                    setBirinci(birinci++)
                                }}>+</span>
                                <h4>{birinci}</h4>
                                <span onClick={() => {
                                    if (birinci < 1) {
                                        return birinci
                                    } else {
                                        setBirinci(birinci--)
                                    }

                                }}>-</span>
                            </div>
                        </div>
                        <div className={styles.basket}>
                            <div className={styles.product}>
                                <div className={styles.productImage}>
                                    <Image src={productImage2} alt="productImage2"></Image>
                                </div>
                                <div className={styles.productName}>
                                    <h3>Cheecburger</h3>
                                    <p>$15.80</p>
                                </div>
                            </div>
                            <div className={styles.count}>
                                <span onClick={() => {
                                    setIkinci(ikinci++)
                                }}>+</span>
                                <h4>{ikinci}</h4>
                                <span onClick={() => {
                                    if (ikinci < 1) {
                                        return ikinci
                                    } else {
                                        setIkinci(ikinci--)
                                    }

                                }}>-</span>
                            </div>
                        </div>
                        <div className={styles.basket}>
                            <div className={styles.product}>
                                <div className={styles.productImage}>
                                    <Image src={productImage3} alt="productImage3"></Image>
                                </div>
                                <div className={styles.productName}>
                                    <h3>Papa Coffee</h3>
                                    <p>$15.80</p>
                                </div>
                            </div>
                            <div className={styles.count}>
                                <span onClick={() => {
                                    setUcuncu(ucuncu++)
                                }}>+</span>
                                <h4>{ucuncu}</h4>
                                <span onClick={() => {
                                    if (ucuncu < 1) {
                                        return ucuncu
                                    } else {
                                        setUcuncu(ucuncu--)
                                    }

                                }}>-</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.checkouts}>
                        <h3>Checkout</h3>
                        <div className={styles.price}>
                            <p>$37.40</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}