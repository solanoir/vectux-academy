import { Section } from 'lucide-react'
import React from 'react'
import LevelsCard from '../Cards/LevelsCard'
import TeamsCard from '../Cards/TeamsCard'

const TeamsSection = () => {
    return (

        <section id="nosotros" className='flex justify-center items-center px-7 md:px-10 lg:px-14 xl:px-16 py-14 bg-blue'>
            <div className='max-w-[1200px] '>

                <div>
                    <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col justify-center items-center gap-3 text-center'>
                        <p className="text-white font-Manrope font-semibold text-lg md:text-[15px] tracking-[0.2px]">
                            <span className='text-skyBlue'>{"["}</span> Our Teams   <span className='text-skyBlue'>{"]"}</span>
                        </p>
                        <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl leading-[45px] md:text-[45px]  lg:text-[48px]  sm:leading-[56px]">
                            Profesores altamente calificados

                        </h1>
                    </div>

                    <div className='grid sm:grid-cols-2 min-[860px]:!grid-cols-3 gap-7 mt-8 px-2 md:px-0 xl:px-6'>

                        <TeamsCard img={"Ana.png"} title={"Ana Mireya López"} desc={"CEO Vectux Analytics MBA, IPADE"} designation={'Certificado en Productos de Inteligencia Artificial, MIT.'} />
                        <TeamsCard img={"Gerzo.png"} title={"Gerzo Morales Gallardo"} desc={"Gerzo Morales Gallardo"} designation={'Certificado en Data Science, MIT.'} />
                        <TeamsCard img={"1566941444408.png"} title={"SURAJ SHINDE"} desc={"Enterprise Architect Director, CIO, CTO"} designation={'Certificado en Enterprise Architect, Carnegie Mellon University'} />
                        <TeamsCard img={"horacio.png"} title={"Horacio Sepúlveda"} desc={"Associate Director of Sales and Promotion."} designation={'IPADE Business School.'} />
                        <TeamsCard img={"Luis.png"} title={"Luis Fernando González Lara"} desc={"Commercial Insights & Advanced Analytics"} designation={'Johnson & Johnson México'} />
                        <TeamsCard img={"Francisco.png"} title={"Francisco Vargas Esparza"} desc={"Chief Data Officer."} designation={'BimboNet, especializado en análisis de datos'} />

                    </div>
                </div>
            </div>
        </section>

    )
}

export default TeamsSection