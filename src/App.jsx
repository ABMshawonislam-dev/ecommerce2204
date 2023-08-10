import "./App.css"
import Image from "./components/Image"
import Logo from "./assets/logo.png"
import Facillity from "./components/Facillity"
import SubHeading from "./components/SubHeading"
import PortionHeading from "./components/PortionHeading"
import Button from "./components/Button"
import Product from "./components/Product"
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import PrevArrow from "./components/PrevArrow"
import NextArrow from "./components/NextArrow"


function App() {
const settings = {
  arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };

  return (
    <>
      <Image src={Logo} />
      <Facillity/>
      <SubHeading text="Sub HEading" className="text-49"/>
      <PortionHeading text="Portion Heading"  className="text-5xl"/>
      <Button text="Add To Cart"/>
      <div className="w-[300px]">
        <Product/>
      </div>

       <Slider {...settings}>
          <div>
            <Product/>
          </div>
          <div>
            <Product/>
          </div>
          <div>
           <Product/>
          </div >
          <div>
            <Product/>
          </div>
          <div>
            <Product/>
          </div>
          <div >
            <Product/>
          </div>
        </Slider>
    </>
  )
}

export default App
