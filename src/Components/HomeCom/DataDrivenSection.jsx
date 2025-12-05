import Image from 'next/image';
import React from 'react';

const DataDrivenSection = () => {
    const cards = [
        {
            img: 'Icons/icons8-chart-100',
            title: 'Crecimiento sostenible',
            text: '<strong>+23% de crecimiento en ventas:</strong> mayor expansión impulsada por decisiones basadas en datos.'
        },
        {
            img: 'Icons/book',
            title: 'Eficiencia financiera',
            text: '<strong>+19% en rentabilidad:</strong> menos costos, mejores márgenes y uso inteligente del capital.'
        },
        {
            img: 'Icons/User',
            title: 'Fidelidad fortalecida',
            text: '<strong>2.5x mayor retención:</strong> Clientes más satisfechos, más leales y más recurrentes.'
        },
        {
            img: 'Icons/psychology',
            title: 'Agilidad estratégica',
            text: '<strong>3x más velocidad:</strong> Decisiones rápidas, precisas y mejor sincronizadas con el negocio.'
        },
        {
            img: 'Icons/List',
            title: 'Impacto comprobado',
            text: '<strong>5–10x más ROI:</strong> Proyectos de IA y analítica que generan valor real y medible.'
        }
    ];

    return (
        <section className='relative overflow-hidden px-8 sm:px-20 py-20 sm:py-32 bg-blue flex justify-center items-center'>
            <div className='max-w-[1200px]'>
                <h1 data-aos="fade-up" data-aos-duration="1500" className="absolute text-center bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-[32px] leading-[38px] md:text-4xl lg:text-[48px] sm:leading-[56px]">
                     <span className='font-bold text-blue-400'>
                        Data-driven:&nbsp;
                     </span>
                     <span className='text-[18px] sm:text-[20px] md:text-4xl lg:text-[34px]'>
                          la ventaja competitiva del futuro
                     </span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-32'>
                    {cards.map((card, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 200} className='bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:bg-white/20'>
                            <div className='w-2/5 mb-4'>
                                <Image
                                    src={`/assets/${card.img}.png`}
                                    width={100}
                                    height={100}
                                    alt={card.title}
                                    className='w-full h-auto cursor-pointer'
                                />
                            </div>
                            <h3 className='text-white font-Manrope font-semibold text-xl mb-2'>{card.title}</h3>
                            <p className='text-white/80 font-Manrope text-sm' dangerouslySetInnerHTML={{ __html: card.text }}></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DataDrivenSection;