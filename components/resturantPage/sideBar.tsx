import React from 'react';
import {NextPage} from "next";
import Image from "next/image";
import pizza from '../../images/pizza.svg'

const SideBar:NextPage = () => {
    return (
        <>
<div className='flex w-full h-[50px] hover:bg-fuchsia-100 items-center  p-4 rounded-xl space-x-4'>
    <Image src={pizza} alt={'pizza'} width='40' height='35'></Image>
    <p>Chinesa</p>
</div>
        </>
    );
};

export default SideBar;
