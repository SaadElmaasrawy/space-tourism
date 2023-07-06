import Nav from '@/components/Nav'
import Technology from '@/components/technology/Technology'
import React from 'react'

function page() {
  return (
    <div className='bg-[url("/assets/technology/background-technology-mobile.jpg")] md:bg-[url("/assets/technology/background-technology-tablet.jpg")] xl:bg-[url("/assets/technology/background-technology-desktop.jpg")] min-h-screen bg-cover bg-center '>
        <div className='px-[24px] md:px-0 z-40'>
        <Nav/>
        </div>
        <div className=''>
        <Technology/>
        </div>
    </div>
  )
}

export default page