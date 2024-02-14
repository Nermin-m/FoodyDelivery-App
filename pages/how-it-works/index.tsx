import React from 'react';
import { NextPage } from "next";
import human from '../../images/homan.svg';
import Image from "next/image";
import ClientLayout from "../../layoutClient/clientLayout";
import {FormattedMessage} from "react-intl";

const Index: NextPage = () => {
    return (
        <ClientLayout>
        <div>
            <div className='flex flex-col items-center'>
                <div className='lg:space-y-12 lg:mb-0 mb-14 lg:w-3/4 w-full space-y-7 p-4 flex flex-col justify-center lg:p-5'>
                    <p className='lg:text-6xl text-4xl font-bold text-black2 text-center'><FormattedMessage id='Howitworks'/></p>
                    <p className='lg:text-2xl text-[18px] italic'><FormattedMessage id='howitworksMain'/> </p>
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
