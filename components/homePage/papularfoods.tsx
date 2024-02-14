import React from 'react';
import {NextPage} from "next";
import chees from'../../images/doubleChees.svg'
import marqarita from'../../images/margarita.svg'
import twistermenu from'../../images/twisterMenu.svg'
import Image from "next/image";
import {FormattedMessage} from "react-intl";

const Papularfoods:NextPage = () => {
    return (
        <div className='w-screen lg:h-auto p-3 flex flex-col space-y-6 mb-7'>
<div className='flex-col flex justify-center items-center space-y-12'><p className='lg:text-5xl text-3xl lg:text-start text-center font-bold mt-7'><FormattedMessage id='ourpapular'/></p>

<p className='lg:text-2xl text-xl mb-7'><FormattedMessage id='Lorem'/></p></div>
            <div className='flex justify-center items-center space-x-14'>
                <div  className='cursor-pointer'><Image src={chees} alt={'Double chees'}></Image></div>
                <div className='cursor-pointer'><Image src={marqarita} alt={'marqarita'}></Image></div>
                <div className='cursor-pointer'><Image src={twistermenu} alt={'twistermenu'}></Image></div>

            </div>
        </div>
    );
};

export default Papularfoods;
