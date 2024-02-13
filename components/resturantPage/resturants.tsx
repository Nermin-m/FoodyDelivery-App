import React from 'react';
import Image from "next/image";
import bgKing from '../../images/burgerKing.svg'
import {NextPage} from "next";
const Resturants:NextPage=()=> {
    return (
        <div>
        <div className='lg:w-[280px] w-auto p-4 rounded-2xl flex flex-col lg:justify-evenly items-center h-auto shadow-gray shadow-lg lg:space-y-5 space-y-3'>
            <Image src={bgKing} alt={"Pizza"} width='180' height='200'></Image>
            <p className='lg:text-3xl text-2xl font-bold'>Coffee Mania</p>
            <p className='lg:text-xl text-[16px]'>chinese, sea-food, thai, lebanese, caribbean</p>
            <div className='flex justify-between items-center lg:space-x-0 space-x-8'>
                <p>$5 Delivery</p>
                <button className='bg-red py-2 px-6 rounded-2xl'>09 Min</button>
            </div>
        </div>
        </div>
    );
}

export default Resturants;
