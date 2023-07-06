"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const CrewComponent = () => {
  const [crew, setCrew] = useState(1);
  const crewMembers = {
    1: {
      name:'Douglas Hurley',
      img:'/assets/crew/image-douglas-hurley.webp',
      p:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      title:'Commander '
    },
    2: {
      name:'MARK SHUTTLEWORTH',
      img:'/assets/crew/image-mark-shuttleworth.webp',
      p:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      title:'Mission Specialist '
    },
    3: {
      name:'Victor Glover',
      img:'/assets/crew/image-victor-glover.webp',
      p:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
      title:'PILOT'
    },
    4: {
      name:'Anousheh Ansari',
      img:'/assets/crew/image-anousheh-ansari.webp',
      p:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
      title:'Flight Engineer'
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCrew((prevCrew) => (prevCrew === 4 ? 1 : prevCrew + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='xl:px-[10%] xl:py-10'>
      <h1 className='text-white text-[16px] xl:text-[28px] text-center xl:text-left font-Barlow uppercase tracking-[4.725px] mb-8'><span className=' opacity-[0.25]'>02 </span>Meet your crew</h1>
      <div className='flex flex-col justify-center items-center md:flex-col-reverse xl:flex-row-reverse gap-10'>

        <div className='flex flex-col w-[80%]'>
          <Image src={crewMembers[crew].img} width={327} height={327} className='m-auto w-fit h-fit' alt="hero"/>
          <hr className='border-[#383B4B] bg-[#383B4B] border-3 h-px w-[100%] xl:hidden'/>
        </div>

        <div className=' flex xl:flex-col-reverse flex-col'>
          <div className='w-[100%] flex flex-row gap-5 py-8 justify-center items-center'>
            <button className={'w-[10px] h-[10px] rounded-full ' 
            +
            `${crew ===1 ? 'bg-white' : 'bg-[#565a63]'}`} onClick={()=>{setCrew(1)}}></button>

            <button className={'w-[10px] h-[10px] rounded-full ' 
            +
            `${crew ===2 ? 'bg-white' : 'bg-[#565a63]'}`} onClick={()=>{setCrew(2)}}></button>

            <button className={'w-[10px] h-[10px] rounded-full ' 
            +
            `${crew ===3 ? 'bg-white' : 'bg-[#565a63]'}`} onClick={()=>{setCrew(3)}}></button>

            <button className={'w-[10px] h-[10px] rounded-full ' 
            +
            `${crew ===4 ? 'bg-white' : 'bg-[#565a63]'}`} onClick={()=>{setCrew(4)}}></button>

          </div>
          <div className='text-white flex flex-col gap-[16px] mb-32 md:mt-12 md:mb-0'>
            <div className='flex flex-col gap-[8px]'>
            <h3 className=' opacity-[0.4951259195804596] font-Bellefair text-[16px] text-center uppercase font-normal'>
              {crewMembers[crew].title}
            </h3>
            <h1 className='text-center text-[24px] font-Bellefair font-normal uppercase'>
              {crewMembers[crew].name}
            </h1>
            </div>
            <p className='text-[#D0D6F9] text-center text-[15px] font-Barlow font-normal leading-[25px] not-italic w-[327px] m-auto'>
              {crewMembers[crew].p}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewComponent;
