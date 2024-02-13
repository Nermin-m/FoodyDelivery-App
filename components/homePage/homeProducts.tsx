import React from 'react';
import homeKfc from '../../images/homePageKfc.svg'
import Image from "next/image";
import homePagefrie from'../../images/homePagefries.svg'
import homepizza from'../../images/homePagePizza.svg'
function HomeProducts() {
    return (
        <>
            <div className='lg:mx-auto  lg:w-10/12 w-full lg:p-0 p-2 lg:space-y-24 lg:mt-24'>
                <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-5  justify-center items-center'>
                    <div className='lg:w-1/3 flex flex-col space-y-6 lg:space-y-16'>
                        <h1 className='font-serif lg:leading-snug font-bold lg:text-5xl text-4xl lg:text-start text-center'>Menu
                            That Always Make You Fall In
                            Love</h1>
                        <p className='lg:text-2xl text-[16px] leading-8 lg:leading-10 font-roboto'>Lorem ipsum is
                            placeholder text commonly used in
                            the graphic, print, and publishing industries for previewing layouts and visual
                            mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                            industries for previewing layouts and visual mockups.</p>
                    </div>
                    <div className='lg:w-2/3  lg:flex lg:justify-end lg:items-center'>
                        <Image src={homeKfc} alt={'Home Page Kfc Image'}
                               className='lg:w-[650px] lg:h-[700px] w-[400px] h-[450px]'></Image>
                    </div>
                </div>
                {/*///////////////////////////*/}
                {/*///////////////////////////////////*/}
                <div className='flex lg:flex-row-reverse  flex-col lg:space-y-0 space-y-5  justify-center items-center'>
                    <div className='lg:w-1/3  flex flex-col space-y-6 lg:space-y-16'>
                        <h1 className='font-serif lg:leading-snug font-bold lg:text-5xl text-4xl lg:text-start text-center'>Do
                            You Like French Fries?</h1>
                        <p className='lg:text-2xl text-[16px] leading-8 lg:leading-10 font-roboto'>Lorem ipsum is
                            placeholder text commonly used in
                            the graphic, print, and publishing industries for previewing layouts and visual
                            mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
                            industries for previewing layouts and visual mockups.</p>
                    </div>
                    <div className='lg:w-2/3  lg:flex lg:justify-start lg:items-center'>
                        <Image src={homePagefrie} alt={'Home Page Kfc Image'}
                               className='lg:w-[650px] lg:h-[700px] w-[400px] h-[450px]'></Image>
                    </div>
                </div>
                {/*////////////////////////*/}
                {/*//////////////////////////////*/}
            </div>
        </>
    );
}

export default HomeProducts;
