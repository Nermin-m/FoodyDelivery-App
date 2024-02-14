import React from 'react';
import {NextPage} from "next";
import Resturants from "../../components/resturantPage/resturants";
import SideBar from "../../components/resturantPage/sideBar";
import Search from '../../ui/search'
import ClientLayout from "../../layoutClient/clientLayout";
import FadeMenu from "../../ui/filters";

const Index:NextPage = () => {
    return (
        <ClientLayout>
        <>
            <div className='flex justify-center mb-5 mt-5 mx-4 space-x-3'>
                <Search></Search>
                <div ><FadeMenu></FadeMenu></div>
            </div>

            <div
                className='flex lg:w-10/12 lg:flex-row flex-col w-full bg-main-gray lg:p-5 p-3 lg:mx-auto  lg:my-4  my-3 rounded-2xl'>
                <div
                    className='lg:flex lg:flex-col lg:w-[400px] lg:h-screen p-4 lg:overflow-scroll lg:space-y-4 hidden '>
                    <SideBar></SideBar>
                    <SideBar></SideBar><SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar><SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar><SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar><SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar><SideBar></SideBar>
                    <SideBar></SideBar>
                    <SideBar></SideBar>
                </div>
                <div className='flex lg:justify-around flex-wrap lg:space-y-0 space-y-8 justify-center'>
                    <Resturants></Resturants>
                    <Resturants></Resturants>
                    <Resturants></Resturants>
                    <Resturants></Resturants>
                    <Resturants></Resturants>
                    <Resturants></Resturants>
                    <Resturants></Resturants>
                    <Resturants></Resturants>
                </div>
            </div>
        </>
        </ClientLayout>
    );
};

export default Index;
