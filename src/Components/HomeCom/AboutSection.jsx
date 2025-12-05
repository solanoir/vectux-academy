import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <>

      <div id="about" className='bg-blue relative flex items-center justify-center px-8 sm:px-14 min-[860px]:!px-10 lg:!px-14 '>
        <div className='flex justify-center items-center py-16 md:py-14 min-[860px]:py-20 max-w-[1200px] '>
          <div className='grid grid-cols-1  min-[860px]:grid-cols-2 place-content-center gap-12 sm:gap-0'>
            <div className='flex justify-center order-2 min-[860px]:order-1 mt-0 sm:mt-10  '>
              <div className='flex flex-col justify-center gap-6 sm:gap-3 md:gap-6 [direction:ltr] '>
                <p data-aos="fade-up"   className="text-white font-Manrope font-semibold text-lg  md:text-[15px] tracking-[0.2px]">
                  <span className='text-skyBlue'>{"["}</span> En Vectux Academy   <span className='text-skyBlue'>{"]"}</span>
                </p>
                <h1 data-aos="fade-up" data-aos-delay="300" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl leading-[45px] md:text-5xl  lg:text-[48px]  sm:leading-[56px]">
                 Formamos Organizaciones  <br /> Data Driven
                </h1>

                <p data-aos="fade-up" data-aos-delay="500"  className='text-[#ffffffda] font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px] w-full sm:w-[90%] '>
                  En Vectux Academy, impartimos certificaciones y cursos de inteligencia artificial y analítica avanzada para empresas, con formación de alto impacto liderada por expertos certificados de prestigiosas instituciones como el MIT, Harvard, Kellogg, IPADE, ITAM y la Universidad Católica de Chile. Una combinación de excelencia académica y experiencia práctica adaptada a las necesidades de tu negocio.
                </p>

                <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col mt-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href="#section-tickets"
                        className="bg-skyBlue w-max font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                    >
                       Contáctanos
                    </a>
                   
                </div>
              </div>
            </div>

            <div className='flex justify-center min-[860px]:justify-end items-center order-1 min-[860px]:order-2'>
              <div  data-aos="big-zoom"  data-aos-duration="2000" className="flex justify-center items-center">
                <video
                  autoPlay
                  muted
                  loop
                  className=" w-[315px] h-[310px] sm:w-[355px] sm:h-[355px] min-[860px]:!w-[350px] min-[860px]:!h-[350px] lg:!w-[450px] lg:!h-[450px] object-cover rounded-lg"
                >
                  <source src="/video/1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
};

export default AboutSection;
