import React from 'react';
import Image from "next/image";
import pizzaDiscover from'../../images/pizzaDiscover.svg'
import burgerSmall from '../../images/burgerSmall.svg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import group from '../../images/group.svg'
import Link from "next/link";
function Footer() {
    return (
        <>
        <div className='h-auto w-full lg:flex hidden flex-col  items-center absolute'>
           <div className='flex lg:space-x-24 space-x-14 relative top-16 justify-center rounded-2xl w-3/4 h-[300px] bg-black2'>
<Image src={pizzaDiscover} alt={'pizzaDiscover'}></Image>
               <div className='flex flex-col  justify-around items-center'>
                   <p className='text-4xl  w-[330px] text-white text-center'>Discover Restaurants
                       Near From you</p>
                   <Link href={'/resturants'}><button className='bg-orange p-5 rounded-2xl text-xl text-white'>Explore now</button></Link>
               </div>
               <Image src={burgerSmall} alt={'burgerSmall'}></Image>
           </div>
            <div className='bg-main-black h-[230px] w-full p-4 flex justify-between'>
                <div className='flex flex-col space-y-4 ml-8'>
                    <p className='text-white text-2xl font-bold'>Foody</p>
                    <p className='text-white w-[200px]'>Lorem ipsum is placeholder text commonly used in the graphic, </p>
                    <div className='flex space-x-4'>
                    <FaFacebook className='text-white bg-orange p-1 rounded-full w-14 h-14'></FaFacebook>
                    <FaInstagramSquare className='text-white bg-orange p-1 rounded-full w-14 h-14'></FaInstagramSquare>
                    <FaTwitter className='text-white bg-orange p-1 rounded-full w-14 h-14'></FaTwitter>
                    </div>
                </div>
                <div className='mt-10'>
                    <Image src={group} alt={'Group'}></Image>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;
