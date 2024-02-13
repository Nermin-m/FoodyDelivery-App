import React from 'react';
import {NextPage} from "next";
import ClientRegisterForm from "../../components/registerPage/clientRegisterForm";
import Image from "next/image";
import logo from '../../images/logo.svg'
import language from "../../ui/language";
import Language from "../../ui/language";
import registerImg from '../../images/registerimg.svg'
import Link from "next/link";

const Index: NextPage = () => {
    return (
        <>
            <div className='w-full lg:p-6 h-screen'>
                <div className=" flex lg:items-center lg:justify-center lg:flex-row flex-col lg:h-[730px]">
                    <div className=' rounded-2xl bg-red lg:w-1/2 w-full flex justify-center items-center lg:h-full'>
                        <Image src={registerImg} alt={'Register Image'}></Image></div>
                    <div className=' lg:w-1/2 w-full lg:h-full'><ClientRegisterForm></ClientRegisterForm></div>
                </div>
            </div>
        </>
    );
}

export default Index;
