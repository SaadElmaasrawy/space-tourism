
import Nav from './../components/Nav';
import Home from './../components/home/Home';


function page() {
  return (
    <div className='bg-[url("../public/assets/home/background-home-mobile.jpg")] xl:bg-[url("../public/assets/home/background-home-desktop.jpg")] md:bg-[url("../public/assets/home/background-home-tablet.jpg")] bg-cover text-white min-h-screen px-[24px] bg-center md:p-0'>
        <Nav/>
        <Home/>
    </div>
  )
}

export default page