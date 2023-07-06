"use client"


import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
function Nav() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="flex h-[96px] text-white justify-between items-center w-[100%]">
      <Link href='/'>
        <Image src="../assets/shared/logo.svg" width={40} height={40} className="md:ml-[39px]"/>
      </Link>
        <img 
          src="../assets/shared/icon-hamburger.svg" 
          className="h-[21px] w-[24px] md:hidden"
          onClick={() => setMenu(!menu)}
        />
        <div className={`${menu ? '' : 'hidden'} absolute bg-white bg-opacity-[0.04] backdrop-blur-md right-0 w-[60%] min-h-screen top-0 flex flex-col justify-center pl-6`} >
          <Image src='/assets/shared/icon-close.svg' width={20} height={20} className=" absolute top-10 right-6" onClick={() => setMenu(!menu)}/>
          <Link href="/" className=" border-solid border-white hover:border-r-2 h-full py-[4%]">00 HOME</Link>
            <Link href="/destination" className=" border-solid border-white hover:border-r-2 h-full py-[4%]">01 DESTINATION</Link>
            <Link href="/crew" className=" border-solid border-white hover:border-r-2 h-full py-[4%]">02 CREW</Link>
            <Link href="/technology" className=" border-solid border-white hover:border-r-2 h-full py-[4%]">03 TECHNOLOGY</Link>
        </div>
        <hr className="w-[550px] absolute left-[120px] hidden xl:flex z-20"/>
        <div className="hidden md:flex gap-[37px] bg-white bg-opacity-[0.04] h-[80%] items-center md:px-[48px] backdrop-blur-sm font-Barlow text-[16px] tracking-[2.7px]">
          <Link href="/" className=" border-solid border-white hover:border-b-2 h-full py-[4%]">00 HOME</Link>
          <Link href="/destination" className=" border-solid border-white hover:border-b-2 h-full py-[4%]">01 DESTINATION</Link>
          <Link href="/crew" className=" border-solid border-white hover:border-b-2 h-full py-[4%]">02 CREW</Link>
          <Link href="/technology" className=" border-solid border-white hover:border-b-2 h-full py-[4%]">03 TECHNOLOGY</Link>
        </div>
    </div>
  )
}

export default Nav