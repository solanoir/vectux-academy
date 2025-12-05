'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-blue'>
      <div>
        <div className='flex justify-center'>
          <div className='pb-12 pt-16 sm:pt-24 w-full max-w-[1170px] md:px-10 lg:px-0 '>
              <div className="flex justify-between w-full flex-col md:flex-row gap-14 md:gap-0">
                {/* Address */}
                <div className='font-Manrope text-center text-white'>
                  <h3 className='font-bold text-[21px]'>Address</h3>
                  <p className='font-[500] text-[15.5px] leading-[30px] pt-2'>
                    121 AI Blvd, San Francisco<br />
                    BCA 94107
                  </p>
                </div>

                {/* Logo and social icons */}
                <div className='flex flex-col justify-center items-center'>
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={140}
                    height={60}
                  />
                  <div className='flex gap-[10px] mt-8' >
                    <Link href="#"><Facebook size={20} className='bg-[#5676f671] text-[#cecece] w-10 h-9.5 p-1.5 rounded-[7px]  size-8' /></Link>
                    <Link href="#"><Instagram size={20} className='bg-[#5676f671] text-[#cecece] w-10 h-9.5 p-1.5 rounded-[7px]  size-8' /></Link>
                    <Link href="#"><Twitter size={20} className='bg-[#5676f671] text-[#cecece] w-10 h-9.5 p-1.5 rounded-[7px]  size-8' /></Link>
                    <Link href="#"><Youtube size={20} className='bg-[#5676f671] text-[#cecece] w-10 h-9.5 p-1.5 rounded-[7px]  size-8' /></Link>
                  </div>
                </div>

                {/* Contact */}
                <div className='font-Manrope text-center text-white'>
                  <h3 className='font-bold text-[21px]'>Contact Us</h3>
                  <p className='font-[500] text-[15.5px] pt-2 leading-[30px]'>
                    T. +1 123 456 789<br />
                    M. contact@aivent.com
                  </p>
                </div>
              </div>
          </div>
        </div>

        <div className='border-t-[0.5px] border-[#aaaaaa] py-4.5'>
          <div>
            <div>
              <div className='font-Manrope text-[14px] sm:text-[15px] md:text-[16px] text-white text-center font-[500] tracking-[0.5px]  '>
                Copyright 2025 - AIvent by Designesia

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
