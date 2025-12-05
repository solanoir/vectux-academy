"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const LevelsCard = ({title , desc, icon, bgColor}) => {
    const [open, setOpen] = useState(false);


    return (
        <div data-aos="img-gutter-only"    onClick={() => setOpen(!open)}
  data-aos-duration="1000" className={`${bgColor} rounded-[14px] group   `}>

            <div className='px-9 py-10 flex justify-between flex-col gap-7'>
                <div className={`flex items-center group-hover:scale-120 cursor-pointer transition-all duration-700 ease-out  w-max ${open ? "scale-120" : "scale-100"}`}>
                    <Image src={`${icon}`} className='w-[70px] sm:w-[80px]' width={90} height={90} alt={"icon"}></Image>
                </div>

                <div className=''>
                    <h1 className="text-[#ebebeb] font-bold mb-3 text-[20.5px] leading-[28px] sm:text-[24px]  sm:leading-[32px] tracking-[0.4px]">
                        {title}
                    </h1>

                    <p className='text-[#ebebeb] font-Manrope text-[15px] sm:text-[15.5px] tracking-[0.5px] font-[500] leading-[22px] '>
                        {desc}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default LevelsCard