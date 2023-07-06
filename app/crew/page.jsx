import Nav from "@/components/Nav"
import Swiper from "@/components/crew/swiper"
function page() {
  
  return (
    <div className=" bg-[url(/assets/crew/background-crew-mobile.jpg)] md:bg-[url(/assets/crew/background-crew-tablet.jpg)] xl:bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-cover min-h-screen bg-center px-[24px] md:p-0">
      <Nav />
      <Swiper />
    </div>
  )
}

export default page