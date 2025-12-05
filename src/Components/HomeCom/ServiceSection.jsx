import Image from 'next/image'
import React from 'react'


const MiniCardItems = [
    {
        id: 1,
        img: "/assets/Icons/psychology.png",
        title: "Inteligencia Artificial & Machine Learning",
    },
    {
        id: 2,
        img: "/assets/Icons/network.png",
        title: "Inteligencia Artificial Generativa",
    },
    {
        id: 3,
        img: "/assets/Icons/List.png",
        title: "Análisis Avanzado de Datos",
    },
    {
        id: 4,
        img: "/assets/Icons/book.png",
        title: "Storytelling",
    },
    {
        id: 5,
        img: "/assets/Icons/briefCase.png",
        title: "Resolución de Problemas",
    },
    {
        id: 6,
        img: "/assets/Icons/User.png",
        title: "Creative Thinking",
    },
    {
        id: 7,
        img: "/assets/Icons/User.png",
        title: "Estratégico",
    },
    {
        id: 8,
        img: "/assets/Icons/User.png",
        title: "Comunicación Efectiva",
    },
];


const ServiceSection = () => {
    return (
        <>
            <section className='bg-blue px-8 pt-4 sm:px-7 md:px-10 min-[860px]:!px-10 lg:!px-14 sm:pt-10 pb-24 sm:pb-16 md:pb-24 flex justify-center items-center'>
                <div className='max-w-[1200px]'>
                    <div className='flex flex-col min-[860px]:flex-row'>
                        <div className='flex flex-col justify-center gap-6 md:w-[60%] lg:w-[65%]'>
                            <h1 data-aos="fade-up" data-aos-duration="1500" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-[38px] md:text-5xl  lg:text-[43px] leading-[45px] sm:leading-[56px]">
                                Desarrollamos <br /> habilidades analíticas
                            </h1>

                            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" className='text-[#ffffffda] font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px] sm:w-[80%] md:w-full min-[860px]:!w-[80%]'>
                                Nuestros programas son desarrollados a la medida y están enfocados en exponenciar las habilidades analíticas “soft” y “hard” de tus colaboradores, que son necesarias para mantener tu negocio a la vanguardia en la era de la Inteligencia Artificial.
                            </p>

                            <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500" className="flex flex-col mt-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <button
                                    href="#section-tickets"
                                    className="bg-skyBlue cursor-pointer w-max font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                                >
                                    Más información
                                </button>
                            </div>
                        </div>

                        <div data-aos="zoom-in" className='flex justify-end pt-12 md:pt-0  lg:pr-2 min-[860px]:w-[40%] lg:!w-[35%]'>
                            <Image alt={"services"} src={"/assets/Frame 40.jpg"} className="rounded-[12px]" width={750} height={360}></Image>
                        </div>
                    </div>
                    <div className='mt-12'>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1'>
                            {MiniCardItems.map(item => (
                                <div data-aos="zoom-in" key={item.id} className='flex flex-col gap-2 justify-center items-center py-9 px-8 rounded-[8px] border border-[#e3e3e349] bg-[#444d5a19] group'>
                                    <Image alt='icons' src={item.img} width={45} height={37} className='group-hover:scale-130 cursor-pointer transition-all duration-700 ease-out ' />
                                    <h3 className='font-Manrope text-center font-semibold text-[19px] tracking-[0.4px] bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent'>{item.title}</h3>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceSection