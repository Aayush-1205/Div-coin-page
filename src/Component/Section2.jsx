import React from 'react'
import { Gift1, Gift2, winner } from '../assets'

const Section2 = () => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-5 py-10'>
            <h1 className='montserrat text-[1.5rem] md:text-[2rem] font-medium'>Collect your Div Coins?</h1>
            <p className='poppins-medium p-color text-xs text-center md:text-base'>Stay updated with our latest blog posts, offering deep insights and news.</p>

            <div className='flex flex-col md:flex-row items-center gap-10'>

                <div className='w-72 h-[22rem] bg-gradient-to-b from-[#f953c700] to-[#b91d73] rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#d474a9]'>
                    <div className='w-full relative rounded-lg overflow-hidden'>
                        <img src={Gift1} className='object-cover h-48' alt="" />
                        <div className='bg-[#f953c6] bg-opacity-20 absolute top-0 bottom-0 left-0 right-0'>
                            
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 py-2'>
                        <h1 className='w-[80%] montserrat text-xl text-white'>Understanding Digital Currencies</h1>

                        <p className='poppins-regular text-[#F2C8D7] text-sm text-center w-[15rem] px-1'>A comprehensive guide to digital currencies and their impact on the global economy.</p>
                    </div>
                </div>

                <div className='w-72 h-[22rem] bg-gradient-to-b from-[#f953c700] to-[#b91d73] rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#d474a9]'>
                    <div className='w-full relative rounded-lg overflow-hidden'>
                        <img src={Gift2} className='object-cover h-48' alt="" />
                        <div className='bg-[#f953c6] bg-opacity-20 absolute top-0 bottom-0 left-0 right-0'>
                            
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 py-2'>
                        <h1 className='w-[80%] montserrat text-xl text-white'>The Rise of Div Coins</h1>

                        <p className='poppins-regular text-[#F2C8D7] text-sm text-center w-[15rem] px-1'>Explore the journey and success story of Div Coins in the digital currency market.</p>
                    </div>
                </div>

                <div className='w-72 h-[22rem] bg-gradient-to-b from-[#f953c700] to-[#b91d73] rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#d474a9]'>
                    <div className='w-full relative rounded-lg overflow-hidden'>
                        <img src={winner} className='object-cover w-full h-48' alt="" />
                        <div className='bg-[#f953c6] bg-opacity-20 absolute top-0 bottom-0 left-0 right-0'>
                           
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 py-2'>
                        <h1 className='w-[80%] montserrat text-xl text-white'>Investing in Div Coins</h1>

                        <p className='poppins-regular text-[#F2C8D7] text-sm text-center w-[15rem] px-1'>Learn the best strategies for investing in Div Coins to maximize your returns.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Section2