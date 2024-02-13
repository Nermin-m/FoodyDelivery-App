import React from 'react';
import {NextPage} from "next";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.svg";
import Language from "../../ui/language";
import clientLogin from "../../images/loginClient.svg";
import ClientloginPage from "../../components/loginPage/clientloginPage";

const Index:NextPage = () => {
    return (
        <div>
            <div className='w-full lg:p-6 h-screen '>
                <div className=" flex lg:items-center lg:flex-row flex-col lg:justify-center lg:h-[730px]">
                    <div className=' rounded-2xl bg-red lg:w-1/2 flex justify-center items-center lg:h-full h-[500px]'>
                        <Image src={clientLogin} alt={'Register Image'}></Image></div>
                    <div className=' lg:w-1/2 lg:h-full'><ClientloginPage></ClientloginPage></div>
                </div>
            </div>
        </div>
    );
};

export default Index;
