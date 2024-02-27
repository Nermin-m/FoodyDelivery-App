import React from 'react';
import { Button } from "@mui/material";
import Image from "next/image";
import hamburgerImg from '../../images/hamburgerImg.svg';
import fries from '../../images/friess.svg';
import pizza from '../../images/pizza.svg';
import cheeseBurger from '../../images/cheeseBurger.svg';
import Link from "next/link";
import styles from'../../styles/Home.module.css';
import {FormattedMessage} from "react-intl";

function MainPage() {
    return (
        <>
            <div className='lg:w-10/12 w-full h-screen lg:mx-auto  lg:my-4 p-7 bg-main-gray lg:h-screen lg:flex-row lg:flex lg:rounded-xl'>
                <div className='lg:w-6/12 h-auto flex flex-col lg:space-y-24 space-y-9 justify-center items-start'>
                    <div>
                        <p className='font-bold lg:text-start lg:text-6xl text-2xl mx-auto text-center mt-6 text-neutral-800 font-sans'><FormattedMessage id='ourSite'/></p>
                    </div>
                    <div className='lg:text-2xl lg:flex font-roboto lg:leading-10 leading-7 text-md '><FormattedMessage id='mainFood'/></div>
                    <div className='flex lg:flex-row flex-col mx-auto lg:mx-0 lg:space-x-5 lg:space-y-0 space-y-3'>
                        <Link href={'/register'}><Button variant="contained" className="bg-main-red lg:w-52 lg:h-16 w-36 h-11"><FormattedMessage id='registr'/> </Button></Link>
                        <Link href={'/resturants'}><Button variant="contained" color="inherit" className="lg:w-52 lg:h-16 w-36 h-11"><FormattedMessage id='order'/></Button></Link>
                    </div>
                </div>
                <div className='lg:w-6/12 lg:p-7 relative '>
                    <div className={' lg:flex bg-main-black hidden lg:w-[38rem] lg:h-[500px] lg:rounded-[150px] absolute top-28 sm:hidden'}></div>
                    <div><Image className='lg:absolute lg:right-14 lg:top-0  h-auto relative top-7' src={hamburgerImg} alt={'Hamburger'}></Image></div>
                    <div className='absolute lg:top-[370px] lg:left-2 top-4'>
                        <div className={styles.animations}><Image src={fries} alt={'Fries'} className='lg:w-80 lg:h-24 w-26 h-14'></Image></div>
                    </div>
                    <div className='absolute lg:left-96 lg:top-[100px] left-32 top-36'>
                        <div className={styles.animations}><Image src={pizza} alt={'Pizza'} className='lg:w-80 lg:h-24 w-26 h-14'></Image></div>
                    </div>
                    <div className='absolute lg:top-[580px] lg:right-14 top-64 right-40'>
                        <div className={styles.animations}><Image src={cheeseBurger} alt={'Burger'} className='lg:w-80 lg:h-24 w-26 h-14'></Image></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
