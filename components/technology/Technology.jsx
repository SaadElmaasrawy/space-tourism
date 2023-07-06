'use client'
import React, { useState } from 'react'
function Technology() {
    const [index , setIndex] = useState(1)
    const tech = {
        [1] : {
            title : 'THE TERMINOLOGY…',
            header: 'LAUNCH VEHICLE',
            p: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            imgL:'bg-[url("/assets/technology/image-launch-vehicle-landscape.jpg")]',
            imgP:'bg-[url("/assets/technology/image-launch-vehicle-portrait.jpg")]'
        },
        2 : {
            title : '',
            header: 'SPACEPORT',
            p: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
            imgL:'bg-[url("/assets/technology/image-space-capsule-landscape.jpg")]',
            imgP:'bg-[url("/assets/technology/image-space-capsule-portrait.jpg")]'
        },
        3 : {
            title : 'THE TERMINOLOGY…',
            header: 'SPACE CAPSULE',
            p: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            imgL:'bg-[url("/assets/technology/image-spaceport-landscape.jpg")]',
            imgP:'bg-[url("/assets/technology/image-spaceport-portrait.jpg")]'
        }
    }

  return (
    <div className='text-white mt-10'>
        <h1 
        className=' font-Barlow text-[16px] tracking-[2.7px] uppercase text-center md:text-left pl-[40px]'><span className=' opacity-[0.25] '>03</span>&nbsp;&nbsp; SPACE LAUNCH 101</h1>
        <div className='mt-10 flex flex-col gap-6 xl:flex-row-reverse xl:pl-[24px]'>
            <div 
                className={`w-full h-[170px] ${tech[index].imgL} bg-center bg-cover bg-no-repeat md:h-[310px] xl:${tech[index].imgP} xl:h-[427px] xl:basis-[70%]`}>

            </div>
            <div className='flex flex-col gap-10 xl:flex-row xl:items-center'>
                <div className='flex justify-center gap-4 xl:flex-col '>
                    <button 
                    className=' border-2 border-white border-solid p-2  rounded-full w-[50px] h-[50px] opacity-[0.50] hover:opacity-[1] hover:bg-white hover:text-black focus:bg-white focus:text-black focus:opacity-[1]' onClick={()=> setIndex(1)}>
                        1</button>
                    <button 
                    className=' border-2 border-white border-solid p-2  rounded-full w-[50px] h-[50px] opacity-[0.50] hover:opacity-[1] hover:bg-white hover:text-black focus:bg-white focus:text-black focus:opacity-[1]' onClick={()=> setIndex(2)}>
                        2</button>
                    <button 
                    className=' border-2 border-white border-solid p-2  rounded-full w-[50px] h-[50px] opacity-[0.50] hover:opacity-[1] hover:bg-white hover:text-black focus:bg-white focus:text-black focus:opacity-[1]' onClick={()=> setIndex(3)}>
                        3</button>
                </div>
                <div className='text-center flex flex-col gap-4 xl:text-left'>
                    <div className='flex flex-col gap-2'>
                        <h3
                        className='text-[#D0D6F9] font-Barlow text-[14px] tracking-[2.362px]'
                        >{tech[index].title}</h3>
                        <h1 className=' font-Bellefair text-[24px] uppercase'>{tech[index].header}</h1>
                    </div>
                    <p 
                    className='text-[#D0D6F9] font-Barlow text-[15px] leading-[25px] px-[24px] md:w-[60%] m-auto xl:m-0 xl:p-0 xl:w-[40%]'
                    >{tech[index].p}</p>
                </div>
            <div>

            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Technology