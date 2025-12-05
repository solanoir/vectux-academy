"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const CardData = [
    {
        id: 1,
        image: "/assets/benefits1.jpg",  // Your image path
        card: "/assets/benefits-card-1.png",
        bgColor: "#f59e0b", // ORANGE
        title: "Aplicación real desde el inicio",
        desc: "Aprendizaje práctico con problemas de negocio de tu industria."
    },
    {
        id: 2,
        image: "/assets/benefits2.jpg",  // Your image path
        card: "/assets/benefits-card-2.png",
        bgColor: "#3b82f6", // BLUE
        title: "Máximo el potencial",
        desc: "Aprovechar al máximo el potencial de los datos para decisiones estratégicas."
    },
    {
        id: 3,
        image: "/assets/benefits3.jpg",  // Your image path
        card: "/assets/benefits-card-3.png",
        bgColor: "#8b5cf6", // PURPLE
        title: "Fomentar la innovación",
        desc: "Fomentar la innovación y el desarrollo de soluciones creativas."
    },
    {
        id: 4,
        image: "/assets/benefits4.jpg",  // Your image path
        card: "/assets/benefits-card-4.png",
        bgColor: "#10b981", // GREEN
        title: "Mejorar la retención",
        desc: "Mejorar la retención del talento al demostrar compromiso con su crecimiento."
    }
];



const BenefitsSection = () => {

    const [openCard, setOpenCard] = useState(null); // 👈 per-card open state

    // Mobile toggle function
    const handleCardClick = (id) => {
        setOpenCard(openCard === id ? null : id);
    };

    return (
        <section className='flex flex-col justify-center items-center bg-blue py-20 sm:py-14 md:py-20 pb-32 px-7 md:px-10 min-[860px]:!px-16'>
            <div className='max-w-[1200px]'>

                <div className='max-w-[1200px]'>
                    <div className='flex flex-col justify-center items-center gap-3 text-center '>
                        <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl md:text-5xl  lg:text-[48px] leading-[56px]"> Generamos resultados de Alto Impacto </h1>
                        <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500" className='text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] md:w-[60%] '> No somos escuela, somos consultoria en IA con formacion aplicada. </p>
                    </div>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 md:gap-10 place-content-center mt-10'>

                    {CardData.map((items) => (
                        <div key={items.id} data-aos="img-gutter-only" data-aos-duration="1000" className='w-full'>

                            <div
                                className="relative group w-full h-[320px] min-[860px]:!h-[370px] overflow-hidden rounded-[12px] cursor-pointer"
                                onClick={() => handleCardClick(items.id)} // 👈 mobile click
                            >

                                {/* IMAGE */}
                                <Image
                                    src={items.image}
                                    alt="l1"
                                    width={570}
                                    height={600}
                                    className="w-full h-full object-cover rounded-[12px] transition-all duration-700 ease-out group-hover:scale-110 sm:group-hover:scale-110 z-0"
                                />

                                {/* dark dim */}
                                <div className={`absolute inset-0 bg-[#0000005d] blur-3xl shadow-inner-blue ...`}></div>

                                {/* blue shadow overlay hover/tap */}
                                <div
                                    className={`absolute inset-0 bg-[#0000005d] blur-3xl shadow-inner-blue transition-all duration-500 group-hover:opacity-100 ${openCard === items.id ? "opacity-100" : "opacity-0"}`}
                                ></div>

                                {/* SLIDING OVERLAY CONTENT */}
                                <div
                                    className={`absolute left-1/2 w-[35%] max-w-[200px] rounded-xl shadow-lg
                                        transition-all duration-500
                                        ${openCard === items.id ? "bottom-6 opacity-100" : "bottom-[-10px] opacity-0"}
                                        group-hover:bottom-6 group-hover:opacity-100
                                        ${[1, 3].includes(items.id) ? "transform -translate-x-2/2" : ""}
                                    `}
                                    style={{ position: 'fixed' }}
                                >
                                    <Image
                                        src={items.card}
                                        alt={"benefit-card" + items.id}
                                        width={250}
                                        height={150}
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>


                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default BenefitsSection;
