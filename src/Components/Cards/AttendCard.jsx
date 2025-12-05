"use client"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const AttendCard = ({title , img}) => {

        const [open, setOpen] = useState(false);
    
        
    return (
        <div data-aos="img-gutter-only" onClick={() => {
            const element = document.getElementById('about');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }}
  data-aos-duration="1000" className="group relative cursor-pointer">

            <div
                className="relative rounded-xl overflow-hidden bg-[#0B0F1A] transition-all duration-[1000ms] ease-[cubic-bezier(0.6,0.03,0.28,0.98)]"
            >

                {/* Text Block */}
                <div className="absolute bottom-0 py-8 px-7 z-50">
                    <div className="transition-all duration-1000 flex flex-col gap-4">
                        <h4 className="text-white text-[30px] leading-[37px] font-Manrope font-semibold">{title } <br />    Analytics</h4>
                        <p className="text-[#f0f0f0] font-Manrope font-semibold text-[15.5px] group-hover:text-white flex gap-2 items-center">
                            Más información <ArrowRight className='size-4.5'/>
                        </p>
                    </div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 w-full h-full z-40 bg-[#00000049]" />

                {/* Image */}
                <Image
                    src={`/assets/${img}.webp`}
                    width={270}
                    height={350}
                    alt=""
                    className={`w-[100%] h-[320px] sm:h-[340px] object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.6,0.03,0.28,0.98)] group-hover:scale-110 ${open ? "scale-110" : "scale-100"} z-0`}
                />

                {/* Purple Radial Glow (only on hover) */}
                <div
                    className={`absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle,#5676f641_55%,#5677F6_90%)] z-5 ${open ? "opacity-100" : "opacity-0"}`}
                ></div>
            </div>
        </div>
    )
}

export default AttendCard