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
import {FormattedMessage} from "react-intl";
const Index:NextPage = () => {
    return (
        <ClientLayout>
        <div>
<div className='flex lg:pl-40 flex-col lg:flex-row lg:mt-24 lg:space-x-64'>
    <div className='lg:w-[700px] w-full space-y-6 lg:p-0 p-7 lg:space-y-12'>
        <p className='lg:text-5xl text-3xl font-bold'><FormattedMessage id='aboutPage'/></p>
        <p className='lg:text-2xl text-[16px] lg:leading-[50px]'>
            <FormattedMessage id='bigLorem'/>
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
