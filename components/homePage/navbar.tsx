import React from 'react';
import Link from "next/link";
import { Button } from "@mui/material";
import Image from "next/image";
import logo from '../../images/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Language from "../../ui/language";
import AccountMenu from "../../ui/userAccount";
import Search from "../../ui/search";
import LeftBarMenu from "../../ui/leftBarMenu";
import { FormattedMessage } from "react-intl";

function Navbar() {
    return (
        <div className=" w-full h-auto lg:w-10/12 lg:h-auto bg-main-gray p-2 lg:p-5 md:p-3 mx-0 my-0 lg:mx-auto lg:my-4 md:mx-0 md:my-0 lg:rounded-2xl ">
            <div className=' w-full flex items-center space-x-1   '>
                <div className='sm:w-1/2 lg:w-1/5 flex items-center justify-start space-x-3 ml-1'>
                    <div className='lg:hidden'><LeftBarMenu></LeftBarMenu></div>
                    <div><Image src={logo} alt={'Logo'} className='lg:w-32 lg:h-11  h-auto  mt-2'></Image>
                    </div>
                </div>
                <div className='lg:flex lg:w-2/5   lg:justify-between  lg:items-center  hidden'>
                    <div><Link className='lg:text-[20px] md:text-[16px] sm:text-[14px] text-gray hover:text-main-red font-roboto '
                        href={'/'}><FormattedMessage id='home' /> </Link></div>
                    <div><Link className='lg:text-[20px] md:text-[16px] sm:text-[14px] text-gray hover:text-main-red font-roboto'
                        href={'/resturants'}><FormattedMessage id='Restaurants' /></Link></div>
                    <div><Link className='lg:text-[20px] md:text-[16px] sm:text-[14px] text-gray hover:text-main-red font-roboto'
                        href={'/about-us'}><FormattedMessage id='about' /></Link></div>
                    <div><Link
                        className='lg:text-[20px]  md:text-[16px] sm:text-[14px] text-gray hover:text-main-red font-roboto'
                        href={'/how-it-works'}><FormattedMessage id='Howitworks' /></Link></div>
                    <div><Link
                        className='lg:text-[20px] sm:text-[14px] md:text-[16px] text-gray hover:text-main-red font-roboto'
                        href={'/FAQs'}><FormattedMessage id='faqs' /></Link></div>
                </div>

                <div className='flex sm:w-1/2 lg:w-2/5  items-center lg:space-x-5 space-x-1 sm:pr-5 justify-end'>
                    <div className=' md:p-2 '>
                        <Language></Language>
                    </div>
                    <div>
                        <Link href={'/login'}><Button variant="contained" className='lg:text-l lg:block lg:rounded-2xl bg-main-red lg:px-9 lg:py-3 hidden'><FormattedMessage id='registr' /></Button></Link>
                    </div>

                    <div className='bg-main-red  lg:p-2 p-2 rounded-3xl  text-white cursor-pointer '>
                        <ShoppingCartIcon className='lg:w-8 lg:h-8 w-8 h-auto' />
                    </div>
                    <div>
                        <AccountMenu></AccountMenu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
