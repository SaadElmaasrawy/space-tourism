import Nav from './../../components/Nav';
import Content from './../../components/destination/Content';

function page() {
  return (
    <div className=' bg-[url("/assets/destination/background-destination-mobile.jpg")] md:bg-[url("/assets/destination/background-destination-tablet.jpg")] xl:bg-[url("/assets/destination/background-destination-desktop.jpg")] xl:px-0 min-h-screen bg-no-repeat px-6 bg-cover'>
        <Nav/>
        <Content/>
    </div>
  )
}

export default page