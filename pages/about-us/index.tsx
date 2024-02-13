import React from 'react';
import {NextPage} from "next";
import pizzaGroup from '../../images/pizzagroup.svg';
// @ts-ignore
import tomatoGroup from '../../images/tomatoGroup.svg';
// @ts-ignore
import coffeGroup from '../../images/coffeGroup.svg';
// @ts-ignore
import orangeBackground from '../../images/orangeBackground.svg'
import Image from "next/image";
import Link from "next/link";
import ClientLayout from "../../layoutClient/clientLayout";
const Index:NextPage = () => {
    return (
        <ClientLayout>
        <div>
<div className='flex lg:pl-40 flex-col lg:flex-row lg:mt-24 lg:space-x-64'>
    <div className='lg:w-[700px] w-full space-y-6 lg:p-0 p-7 lg:space-y-12'>
        <p className='lg:text-5xl text-3xl font-bold'>About Us</p>
        <p className='lg:text-2xl text-[16px] lg:leading-[50px]'> Delivery May Be Extended During Sale Periods. Please Refer To The Checkout Page For An Updated Estimate For Your Location. Kindly Note That Once You Have Placed An Order, It Is No Longer Possible To Modify Your Order. Taxes And Duties Are Included In All Product Prices.It Is Possible To Place An Order With Shipment To A Different Address Than Your Home Or Billing Address When Paying With A Credit Card. Please Note That Klarna Payments Require That Your Order Is Shipped To Your Registered Home Address.
        </p>
    </div>
    <div className='lg:flex hidden lg:flex-col' >
       <div>
           <Image className='absolute' src={orangeBackground} alt={'Orange'}></Image>
       </div>
       <Link href={'/resturants'}><Image className='relative lg:left-[350px] lg:hover:scale-125' src={pizzaGroup} alt={'pizzaGroup'}></Image></Link>
        <Link href={'/resturants'}><Image className='relative lg:hover:scale-125' src={tomatoGroup} alt={'tomatoGroup'}></Image></Link>
        <Link href={'/resturants'}><Image className='relative  lg:left-[250px] lg:hover:scale-125' src={coffeGroup} alt={'coffeGroup'}></Image></Link>

    </div>
</div>
        </div>
        </ClientLayout>
    );
};

export default Index;
