import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className=' text-center mt-[48px] md:mt-[106px] flex flex-col gap-[81px] items-center xl:flex-row xl:w-[80%] xl:mx-auto  xl:gap-0 xl:justify-between xl:text-left'>
        <div className="flex flex-col gap-[24px]">
          <h3 className='text-[#D0D6F9] text-[16px] tracking-[2.7px] font-Barlow md:text-[20px] md:tracking-[3.375px] xl:text-[22px] xl:tracking-[ 4.725px]'>SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className='font-Bellefair text-[88px] md:text-[150px] leading-[100px] md:leading-[150px] '>SPACE</h1>
          <p className='text-[#D0D6F9] text-[15px]  leading-[25px] font-Barlow md:w-[444px] md:text-[16px] md:leading-[28px] text-center xl:text-left xl:text-[18px]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="w-[180px] h-[180px] md:w-[272px] md:h-[272px] flex
         justify-center items-center hover:bg-white hover:bg-opacity-20 rounded-full m-auto xl:m-0 xl:w-[350px] xl:h-[350px]">
        <Link href="/destination" className=" text-[20px] text-darkBlue tracking-[2px] w-[150px] h-[150px] bg-white rounded-full font-Bellefair md:w-[242px] md:h-[242px] xl:w-[274px] xl:h-[274px] text-center xl:pt-[130px] pt-[60px] md:pt-[110px]">
          EXPLORE
        </Link>
        </div>
    </div>
  )
}

export default Home