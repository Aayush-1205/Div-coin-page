import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Hero = () => {
    return (

        <header className='w-full h-full bg-gradient-to-r from-[#f953c7c7] to-[#e03392] flex flex-col md:flex-row items-center justify-center gap-10 text-white relative'>

                <div
                    class="overflow-hidden cursor-pointer relative flex items-center justify-center"
                >

                    <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut'>
                        <div
                            class="z-50 cursor-pointer w-full h-full absolute top-0 bottom-0 left-0 right-0 from-[#f953c79d] to-transparent bg-gradient-to-t inset-x-0 text-white flex items-center justify-center"
                        >
                            <div>
                                <div
                                    class="p-4 pb-10 transform transition duration-300 ease-in-out"
                                >
                                    <h1 className='montserrat text-[1.5rem] w-72 md:text-[3rem] md:w-[37rem]'>Digital curency of Divueens</h1>

                                    <p className='text-xs md:w-[37rem] md:text-base text-[#e1e1e1] poppins-medium'>Stay informed with the latest insights and updates on our unique digital coin. Join us in exploring the innvoative world of Div Coins.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <img
                        alt=""
                        class="w-full h-[18rem] md:h-full group-hover:scale-110 transition duration-300 ease-in-out"
                        src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg"
                    />
                </div>

        </header>
    )
}

export default Hero