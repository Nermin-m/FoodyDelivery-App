import React from 'react';
import discount from '../../images/discount.svg';
import tomatoSup from '../../images/tomatoSoup.svg';
import delivery from '../../images/homeDelivery.svg';
import Image from "next/image";
function Features() {
    return (
        <>
            <div className='w-full h-auto lg-p-0 p-8 lg:mt-16 mt-4 lg:space-y-12'>
                <div className='flex flex-col justify-center items-center lg:space-y-12 space-y-6'>
                    <p className='lg:text-6xl text-3xl font-bold'>Features</p>
                    <p className='lg:text-3xl text-xl text-center font-roboto'>Lorem ipsum is placeholder text commonly used in the graphic.</p>
                </div>
                <div
                    className='flex lg:w-9/12 lg:flex-row flex-col space-y-9 lg:space-y-0 lg:justify-center items-center mx-auto h-auto p-6 lg:space-x-14'>
                    <div
                        className='lg:shadow-2xl shadow-xl rounded-2xl flex lg:space-y-4 space-y-2 justify-center flex-col items-center lg:w-[350px] lg:p-5 p-4 lg:hover:scale-110 '>
                        <Image src={discount} alt={"Discount"} className='mb-5'></Image>
                        <p className='lg:text-3xl text-xl  text-center font-roboto'>Discount Boucher</p>
                        <p className='lg:text-xl text-[18px]  text-center font-roboto'>Lorem ipsum is placeholder
                            commonly used in the graphic </p>
                    </div>
                    <div
                        className='lg:shadow-2xl shadow-xl rounded-2xl flex lg:space-y-4 space-y-2 justify-center flex-col items-center lg:w-[350px] lg:p-5 p-4 lg:hover:scale-110 '>
                        <Image src={tomatoSup} alt={"Tomato"} className='mb-5'></Image>
                        <p className='lg:text-3xl text-xl  text-center font-roboto'>Fresh healthy Food</p>
                        <p className='lg:text-xl text-[18px]  text-center font-roboto'>Lorem ipsum is placeholder
                            commonly used in the graphic </p>
                    </div>
                    <div
                        className='lg:shadow-2xl shadow-xl rounded-2xl flex lg:space-y-4 space-y-2 justify-center flex-col items-center lg:w-[350px] lg:p-5 p-4 lg:hover:scale-110 '>
                        <Image src={delivery} alt={"Delivery"}></Image>
                        <p className='lg:text-3xl text-xl  text-center font-roboto'>Fast Home Delivery</p>
                        <p className='lg:text-xl text-[18px] text-center  font-roboto'>Lorem ipsum is placeholder
                            commonly used in the graphic </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
