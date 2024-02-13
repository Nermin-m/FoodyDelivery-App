import React from 'react';
import { NextPage } from "next";
import human from '../../images/homan.svg';
import Image from "next/image";
import ClientLayout from "../../layoutClient/clientLayout";

const Index: NextPage = () => {
    return (
        <ClientLayout>
        <div>
            <div className='flex flex-col items-center'>
                <div className='lg:space-y-12 lg:mb-0 mb-14 lg:w-3/4 w-full space-y-7 p-4 flex flex-col justify-center lg:p-5'>
                    <p className='lg:text-6xl text-4xl font-bold text-black2 text-center'>How It Works</p>
                    <p className='lg:text-2xl text-[18px] italic'>Delivery May Be Extended During Sale Periods. Please Refer To The Checkout Page For An Updated Estimate For Your Location. Kindly Note That Once You Have Placed An Order, It Is No Longer Possible To Modify Your Order. Taxes And Duties Are Included In All Product Prices.It Is Possible To Place An Order With Shipment To A Different Address Than Your Home Or Billing Address When Paying With A Credit Card. Please Note That Klarna Payments Require That Your Order Is Shipped To Your Registered Home Address.</p>
                </div>
                <div className='lg:mb-8'>
                    <Image src={human} alt='human' />
                </div>
            </div>
        </div>
        </ClientLayout>
    );
};

export default Index;
