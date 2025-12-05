import Image from 'next/image';
import React from 'react'

const ContactUsSection = () => {
    return (
        <section className='bg-blue relative overflow-hidden flex justify-center px-7.5 sm:px-10 min-[860px]:px-16'>
            <div className='py-16 sm:py-20 pt-28 flex flex-col min-[860px]:flex-row max-w-[1200px] w-full justify-center'>
                {/* Left Column */}
                <div className='min-[860px]:w-1/2 flex flex-col justify-center max-w-lg pr-4'>
                    <h1 data-aos="fade-up" data-aos-duration="1500" className="text-white text-[42px] font-bold leading-tight mb-5">
                        ¿Está listo tu negocio para la era de la Inteligencia Artificial?
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-white text-lg lg:text-xl leading-relaxed mb-6 border-l-4 border-[#00acf4] pl-4">
                        Transformar la cultura, los procesos y los resultados
                        empieza por cambiar la manera en que formamos a
                        nuestros equipos.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="600" className="text-white text-sm lg:text-base font-bold">
                        Vectux Academy | Decisiones que transforman
                    </p>
                </div>

                {/* Vertical Line */}
                <div className='hidden min-[860px]:block w-0.5 bg-[#3e7ef5] mx-4'></div>

                {/* Right Column */}
                <div className='min-[860px]:w-1/2 flex flex-col justify-center max-w-md pl-4'>
                    <h2 data-aos="fade-up" data-aos-duration="1500" className="text-white text-2xl lg:text-3xl font-bold mb-1">
                        Conversemos.
                    </h2>
                    <div data-aos="fade-up" data-aos-delay="300" className="text-white mb-2">
                        <h3 className="text-xl lg:text-2xl font-bold">
                            Mercedez Paez
                        </h3>
                        <p className="text-sm lg:text-base mb-1">
                            Head of Growth and Strategic Partnerships
                        </p>
                        <p className="text-sm lg:text-base mb-1">
                            mpaez@vectuxanalytics.com
                        </p>
                        <p className="text-sm lg:text-base">
                            +52 56 1195-5405
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col p-1">
                        <Image
                            src="/assets/qrMariaMercedes.jpg"
                            width={128}
                            height={128}
                            alt="QR Code"
                            className="mb-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsSection