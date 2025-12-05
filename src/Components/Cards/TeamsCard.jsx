"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const TeamsCard = ({title , img , desc , designation}) => {
    const [open, setOpen] = useState(false);


    return (
        <div data-aos="zoom-in-up" onClick={() => setOpen(!open)} className="group relative cursor-pointer">

            <div
                className="relative rounded-xl overflow-hidden bg-[#0B0F1A] transition-all duration-[1000ms] ease-[cubic-bezier(0.6,0.03,0.28,0.98)]"
            >

                {/* Text Block */}
                <div style={{backdropFilter: "blur(10px)"}} className={`absolute left-4 right-4  py-5 rounded-[10px]  z-50 bg-[#ffffff2c] w-[90%]  
                  transition-all duration-700 ease-out   ${open ? "bottom-4" : "bottom-[-100%]"}
                  group-hover:bottom-4`}>
                    <div className="transition-all duration-1000 flex flex-col gap-2 sm:gap-1 z-40 relative items-center  text-center px-6">
                        
                        <h4 className="text-white text-[22px] sm:text-[26px] leading-[30px] font-Manrope font-semibold">{title } </h4>
                         <p className="text-[#e7e7e7] mt-1 sm:mt-3 font-Manrope font-semibold text-[15px] sm:text-[16px] group-hover:text-white flex gap-2 items-center leading-[18px]">
                           {desc}

                        </p>
                        <p className="text-[#f0f0f0] font-Manrope font-semibold text-[13px] group-hover:text-white flex gap-2 items-center ">
                           {designation}

 
                        </p>
                    </div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 w-full h-full z-40 bg-[#00000077]" />

                {/* Image */}
                <Image
                    src={`/assets/${img}`}
                    width={250}
                    height={380}
                    alt=""
                    className="w-[100%] h-[330px] sm:h-[300px] md:h-[330px] xl:h-[380px] object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.6,0.03,0.28,0.98)] group-hover:scale-110 z-0"
                />

                {/* Purple Radial Glow (only on hover) */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle,#5676f641_55%,#5677F6_90%)] z-5"
                ></div>
            </div>
        </div>
    )
}

export default TeamsCard