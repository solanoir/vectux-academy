'use client';
import { GraduationCap, Briefcase, BarChart3, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const AIShiftProgramSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        {
            icon: GraduationCap,
            title: 'Formación práctica',
            content: 'Enseñamos con tus datos, tus casos, tus indicadores y la realidad de tu industria, para que cada aprendizaje se traduzca en impacto inmediato.'
        },
        {
            icon: Briefcase,
            title: 'Diseñamos con propósito empresarial',
            content: 'Nuestros programas están directamente conectados a real impact project (ROI generation for the employer).'
        },
        {
            icon: BarChart3,
            title: 'Data-driven y human-centric',
            content: 'Analized interactive, critique, liderazgo, storytelling, and technology (Artificial Intelligence and IA generation), from the focus on human and ético liderazgo.'
        }
    ];

    return (
        <section className='relative overflow-hidden px-8 sm:px-20 py-20 sm:py-32 bg-blue flex justify-center items-center'>
            <div className='max-w-8xl w-full flex flex-col lg:flex-row max-w-[1200px]'>
                {/* Left Side */}
                <div data-aos="fade-right" data-aos-duration="1500" className='lg:w-3/5 flex items-center justify-start pl-8 lg:pl-16'>
                    <div className='text-left'>
                        <div data-aos="fade-up" data-aos-delay="300" className="mb-6">
                            <Image
                                src="/assets/Icons/the-AI-shift-program-bl.svg"
                                width={400}
                                height={100}
                                alt="Shift Program"
                                className="w-auto h-auto"
                            />
                        </div>
                        <p data-aos="fade-up" data-aos-delay="600" className="text-white text-lg lg:text-xl max-w-lg mb-8 leading-relaxed border-l-4 border-[#00acf4] pl-4">
                            The AI Shift Program no es un curso más. <span className='font-bold'>Es un programa de capacitación en inteligencia artificial y analítica avanzada</span> con mentoría de proyectos reales, diseñado para que tus líderes generen resultados desde el primer día.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="900" className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                            <span className="text-white">Data.</span>
                            <span className="text-[#4cc9f0]"> Thinking.</span>
                            <span className="text-white"> Action.</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Accordion */}
                <div data-aos="fade-left" data-aos-duration="1500" className='lg:w-2/5 mt-12 lg:mt-0 lg:pl-8'>
                    <div className='space-y-4'>
                        {items.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index} data-aos="fade-up" data-aos-delay={index * 300} className='bg-white/10 backdrop-blur-sm rounded-xl border border-white/20'>
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className='w-full flex items-center gap-3 p-4 text-left cursor-pointer'
                                    >
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform transition-colors ${openIndex === index ? 'rotate-180 text-blue-400' : 'text-white'}`}
                                        />
                                        <h3
                                            className={`font-Manrope font-medium text-lg transition-colors ${openIndex === index ? 'text-blue-400' : 'text-white'}`}
                                        >
                                            {item.title}
                                        </h3>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className='p-4 flex items-center gap-4'>
                                            <IconComponent className='w-15 h-15 text-white' />
                                            <div className='flex-1'>
                                                <p className='text-white/90 font-Manrope text-base leading-relaxed'>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIShiftProgramSection;