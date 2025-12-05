import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <section className='relative overflow-hidden px-8 sm:px-12 min-[860px]:px-20 py-20  min-[860px]:!py-40 bg-blue  flex justify-center flex-col items-center
                            bg-[url("/assets/testimonialsparallaximage.webp")] bg-cover bg-center bg-fixed'>
            <div className="absolute -top-20 -left-20 w-[140%] h-[25%] z-50 bg-gradient-to-b blur-3xl from-[#343ec2] to-[#8d4aed]"></div>

            <div className="absolute inset-0 bg-[#000000]  opacity-50 
                  transition-all duration-500"></div>

            <div className='flex flex-col min-[860px]:flex-row relative z-50 py-10 max-w-[1200px] min '>
                <div className='relative  sm:block sm:w-[50%] md:w-[42%] min-[860px]:!w-[32%] lg:!w-[36%]'>
                    <div data-aos="img-gutter-only" data-aos-duration="1000" >
                        <Image width={310} height={450} className='rounded-[9px] w-[320px] sm:w-[360px]' src={"/assets/s9.jfif"} alt="testimonial" />
                    </div>
                    <div data-aos="fade-left" className='bg-skyBlue absolute px-4 rounded-[10px] top-6 sm:top-4 right-2 py-4'>
                        <Quote className='size-8 text-white' />
                    </div>
                </div>

                <div data-aos="fade-up" className='min-[860px]:w-[64%] flex flex-col justify-center mt-8 min-[860px]:pl-10 min-[860px]:mt-0'>
                    <p className='font-Manrope font-[700]  text-[22.5px] leading-[33px] sm:text-[27px] min-[860px]:text-[32px] sm:leading-[37px] min-[860px]:leading-[48px] 
                                  bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] 
                                  bg-clip-text text-transparent'>
                        “Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.”
                    </p>

                    <h4 className='font-Manrope mt-5 text-[17.5px] text-white font-semibold'>
                        Elon Musk
                    </h4>
                </div>


            </div>

            <div className="absolute -bottom-28 -left-20 w-[140%] h-[23%] sm:h-[30%] z-50 bg-gradient-to-b blur-3xl from-[#343ec2] to-[#8d4aed]"></div>
        </section>
    )
}

export default Testimonials

