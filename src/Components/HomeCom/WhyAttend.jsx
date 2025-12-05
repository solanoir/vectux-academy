import Image from "next/image";
import AttendCard from "../Cards/AttendCard";

export default function GlobalNetworkingCard() {
  return (
    <>
      <section id="cursos" className="px-8 md:px-10 lg:px-20 py-20 sm:py-14 md:py-20 bg-blue">
        <div className="flex flex-col justify-center items-center ">
          <div className='flex flex-col justify-center items-center gap-3 text-center'>
            
            <h1 data-aos="fade-up" data-aos-delay="300" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-[35px] sm:text-4xl md:text-5xl   lg:text-[48px]  leading-[45px] sm:leading-[56px]">
             Conoce nuestra oferta de Diplomados:
            </h1>

            <p data-aos="fade-up" data-aos-delay="300" className='text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] sm:w-[80%] md:w-[60%] '>
              Descubre nuestra oferta de Diplomados pensados para impulsar tu crecimiento profesional.
            </p>

          </div>
          <div className="mt-10 grid flex-col md:grid-cols-2 lg:grid-cols-3 gap-10"> 
            <AttendCard title="People" img={"s4"}></AttendCard>
            <AttendCard title="Financial " img={"s3"}></AttendCard>
            <AttendCard title="Marketing " img={"s6"}></AttendCard>
          </div>
        </div>
      </section>
    </>
  );
}
