"use client"
import Image from "next/image"
import { useState } from "react"
function Content() {
  const [objnum, setObjnum] = useState(1)
  const obj = {
    1: {
      name: 'MOON',
      img : '/assets/destination/image-moon.webp',
      content:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance :"384,400 km",
      time: "3 days"
    },
    2: {
      name: 'MARS',
      img : '/assets/destination/image-mars.webp',
      content: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance :"225 MIL. km",
      time: "225 MIL. km"
    },
    3: {
      name: 'EUROPA',
      img : '/assets/destination/image-europa.webp',
      content: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance :"628 MIL. km",
      time: "3 years"
    },
    4: {
      name: 'TITAN',
      img : '/assets/destination/image-titan.webp',
      content: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance :"1.6 BIL. km",
      time: "7 years"
    }
  }
  return (

    <div className="flex flex-col items-start px-6">
        <h1 className='text-white text-center mb-6 text-[16px] font-Barlow tracking-[2.7px]'><span className=' font-bold opacity-[0.25]'>01</span> Pick your destination</h1>
        <div className="flex justify-around flex-col md:flex-row">
          <div className='flex flex-col items-center gap-4  mb-6'>
            <Image src={obj[objnum].img} width={1500} height={1500} 
            className=" w-[170px] h-[170px] md:w-[378px] md:h-[378px]"/>
          </div>
          <div className="basis-[40%] ">
            <div className="text-[#D0D6F9] flex justify-between w-[80%] xl:w-[100%] m-auto font-Barlow text-[14px]">
              <button 
              className=" hover:border-b-2 active:border-b-2 hover:text-white active:text-white  border-white py-2"
              onClick={()=> setObjnum(1)}>MOON</button>
              <button 
              className=" hover:border-b-2 active:border-b-2 hover:text-white active:text-white border-white py-2"
              onClick={()=> setObjnum(2)}>MARS</button>
              <button 
              className=" hover:border-b-2 active:border-b-2 hover:text-white active:text-white border-white py-2"
              onClick={()=> setObjnum(3)}>EUROPA</button>
              <button 
              className=" hover:border-b-2 active:border-b-2 hover:text-white active:text-white border-white py-2"
              onClick={()=> setObjnum(4)}>TITAN</button>
            </div>
            <div className="">
              <h1 className=" font-Bellefair xl:text-[100px] text-white text-[56px] text-center xl:text-left">{obj[objnum].name}</h1>

              <p className="text-[#D0D6F9] xl:text-left text-center text-[14px] font-Barlow leading-[25px] md:w-[80%] xl:w-[100%] md:m-auto">
                {obj[objnum].content}
              </p>
            </div>
            <hr className="h-px my-8 bg-[#383B4B] border-0"/>
            <div className="text-white flex flex-col gap-6 pb-20 xl:flex-row xl:gap-20">
              <div>
                <h3 className="text-[#D0D6F9] xl:text-left xl:text-[10px] text-[8px] text-center font-Barlow tracking-[2.362px]">AVG DISTANCE</h3>
                <h1 className="text-white xl:text-left text-center xl:text-[32px] font-Bellefair text-[28px]">{obj[objnum].distance}</h1>
              </div>
              <div>
                <h3 className="text-[#D0D6F9] xl:text-left xl:text-[10px] text-[8px] text-center font-Barlow tracking-[2.362px]">EST TRAVEL TIME</h3>
                <h1 className="text-white xl:text-left text-center xl:text-[32px] font-Bellefair text-[28px] ">{obj[objnum].time}</h1>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Content