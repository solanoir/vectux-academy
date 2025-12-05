'use client';
import { Calendar, MapPin } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen md:min-h-max lg:min-h-screen pb-52 pt-36 w-full flex justify-center  items-center overflow-hidden ">

            <div className='max-w-8xl'>
                <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-[120%] object-cover"
            >
                <source src="/video/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-[30%] z-20 bg-gradient-to-b blur-3xl from-[#5676f68c] to-[#5676f61a]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[100%] z-20 bg-gradient-to-b from-[#5676f696] to-[#000000a4]"></div>


            <div data-aos="zoom-out"  data-aos-duration="2000"  data-aos-delay="1000" className="relative z-30 flex flex-col items-center justify-center text-center mt-21 gap-2 sm:gap-0 h-full px-4  "> 
                
                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-semibold text-[37px] sm:text-[42px]  md:text-5xl lg:text-[72px] mb-3 leading-tight">
                    <span className='font-bold text-blue-500'>
                        Unlock
                    </span>
                    <div className='text-[18px] sm:text-[20px] md:text-4xl lg:text-[34px]'>
                        the power of AI
                    </div>
                </h1>
               

                <div className="flex flex-col mt-5 mb-5 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href="#section-tickets"
                        className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                    >
                        Más información
                    </a>
                   
                </div>

                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-semibold text-[24px] sm:text-[28px] uppercase md:text-5xl lg:text-[48px] mb-3 leading-tight">
                    Formamos Organizaciones Data Driven
                </h1>
                
            </div>


            <div className="absolute -bottom-28 -left-20 w-[140%] h-[30%] z-50 bg-gradient-to-b blur-3xl from-[#343ec2] to-[#8d4aed]"></div>
            </div>

        </section>
    );
};

export default HeroSection;
