import Footer from "../../components/homePage/footer"
import Navbar from "../../components/homePage/navbar"
import styles from './style.module.scss'
import profSvg from 'images/profile.svg'
import Image from "next/image";
import shekil2 from 'images/shekil2.svg'
import uploadImg from 'images/uploadImg.svg'
import { useRouter } from 'next/router';

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
                    <div onClick={profileClick}  className={styles.account}>
                        <Image  src={profSvg} alt="account" className="icon1"></Image><p className={styles.pp}>Profile</p>
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
                        <h2 className={styles.h2}>Profile</h2>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.uploadImg}>
                            <div className={styles.borderr}>
                                <Image src={uploadImg} alt="checkout"></Image>
                                <h6 className={styles.h6}>upload</h6>
                            </div>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.left}>
                                <div className={styles.input}>
                                    <p>Contact</p>
                                    <input type="text" />
                                </div>
                                <div className={styles.input}>
                                    <p>Username</p>
                                    <input type="text" />
                                </div>
                                <div className={styles.input}>
                                    <p>Full name</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.input}>
                                    <p>Email</p>
                                    <input type="email" />
                                </div>
                                <div className={styles.input}>
                                    <p>Address</p>
                                    <input type="text" />
                                </div>
                                <div className={styles.buttonSave}>
                                 
                                    <button className={styles.button}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}