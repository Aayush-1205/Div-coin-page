import React from 'react'
import { FaChartLine, FaShieldAlt } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { collecting, discount, onlineConnections } from '../assets'

const Section1 = () => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-5 py-10 mb-24'>
            <h1 className='montserrat text-[1.5rem] md:text-[2rem] font-medium'>Redeem Gifts Using Div Coins?</h1>
            <p className='poppins-medium p-color text-xs text-center md:text-base'>Explore the unparalleled features that make Div Coins the leading choice in digital currency.</p>

            <div className='flex items-center flex-col gap-5 md:flex-row justify-between mt-2'>
                <div class="w-80 md:w-full relative shadow-lg hover:shadow-[#d474a9] transition-all duration-500 flex items-center justify-center h-auto rounded-xl overflow-hidden">
                    <div class="group bg-gradient-to-b from-[#f953c77c] to-[#b91d73] p-2.5 w-96">
                        <div class="rounded-3xl h-[15rem] ">
                            <img src={collecting} alt="image" class="rounded-xl w-full h-full" />
                        </div>
                        <div class="flex flex-col items-center justify-center py-6 gap-4 text-center">
                            <h4 class="font-bold text-center montserrat text-xl text-white">Top-notch Security</h4>
                            <p class="font-medium mb-4 text-center poppins-regular text-[#F2C8D7] text-sm">Our advanced security measures ensure your investments are always protected.</p>
                        
                        </div>
                    </div>
                </div>
                <div class="w-80 md:w-full relative shadow-lg hover:shadow-[#d474a9] transition-all duration-500 flex items-center justify-center h-auto rounded-xl overflow-hidden">
                    <div class="group bg-gradient-to-b from-[#f953c77c] to-[#b91d73] p-2.5 w-96">
                        <div class="rounded-3xl h-[10rem] md:h-[15rem]">
                            <img src={discount} alt="image" class="rounded-xl w-full h-full" />
                        </div>
                        <div class="flex flex-col items-center justify-center py-6 gap-4 text-center">
                            <h4 class="font-bold text-center montserrat text-xl text-white">Market Growth</h4>
                            <p class="font-medium mb-4 text-center poppins-regular text-[#F2C8D7] text-sm">Benefit from the growing market and maximize your returns with Div Coins.</p>
                        
                        </div>
                    </div>
                </div>
                <div class="w-80 md:w-full relative shadow-lg hover:shadow-[#d474a9] transition-all duration-500 flex items-center justify-center h-auto rounded-xl overflow-hidden">
                    <div class="group bg-gradient-to-b from-[#f953c77c] to-[#b91d73] p-2.5 w-96">
                        <div class="rounded-3xl h-[10rem] md:h-[15rem]">
                            <img src={onlineConnections} alt="image" class="rounded-xl w-full h-full" />
                        </div>
                        <div class="flex flex-col items-center justify-center py-6 gap-4 text-center">
                            <h4 class="font-bold text-center montserrat text-xl text-white">Community Support</h4>
                            <p class="font-medium mb-4 text-center poppins-regular text-[#F2C8D7] text-sm">Join a thriving community of users and experts ready to help you succeed.</p>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Section1