import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Product from '../components/Product'
import Slider from "react-slick";
import PrevArrow from "../components/PrevArrow"
import NextArrow from "../components/NextArrow"
import Image from '../components/Image'
import ad1 from '../assets/ad1.png'
import ad2 from '../assets/ad2.png'
import ad3 from '../assets/ad3.png'
import banner from '../assets/banner.png'


const Home = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow class="absolute top-1/2 -translate-y-1/2 left-0 z-30"/>,
        nextArrow: <NextArrow class="absolute top-1/2 -translate-y-1/2 right-0 z-30"/>,
      };
    const bannersettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div >
              <ul > {dots} </ul>
            </div>
          ),
        customPaging: i => (
        <button
         
        >
          0{i + 1}
        </button>
      )
    };


  return (
    <>
        <Slider {...bannersettings}>
        <div>
        <Image src={banner} className="w-full"/>
        </div>
        <div>
        <Image src={banner} className="w-full"/>
        </div>
        <div>
        <Image src={banner} className="w-full"/>
        </div>
        
        </Slider>
    <Container>




        <Flex className="gap-x-5">
            <div className="w-1/2">
                <Image src={ad1} className="w-full"/>
            </div>
            <div className="w-1/2">
            <Image src={ad2} className="w-full mb-10"/>
            <Image src={ad3} className="w-full"/>
            </div>
        </Flex>
        </Container>


       <Container>
       <SubHeading text="Our Bestsellers"/>

<Slider {...settings}>
<div className='w-23'>
        <Product  heading="Product 1"/>
    </div>
<div className='w-23'>
        <Product  heading="Product 1"/>
    </div>
<div className='w-23'>
        <Product  heading="Product 1"/>
    </div>
<div className='w-23'>
        <Product  heading="Product 1"/>
    </div>
<div className='w-23'>
        <Product  heading="Product 1"/>
    </div>
<div className='w-23'>
        <Product  heading="Product 1"/>
    </div>
</Slider>
       </Container>

       <Container>
       <SubHeading text="New Arrivals"/>
        <Flex className="justify-between">
            <div className='w-23'>
                <Product  heading="Product 1"/>
            </div>
            <div className='w-23'>
                <Product heading="Product 2"/>
            </div>
            <div className='w-23'>
                <Product heading="Product 3"/>
            </div>
            <div className='w-23' >
                <Product heading="Product 4"/>
            </div>
        </Flex>
       </Container>

        <Container>
        <SubHeading text="Special Offers"/>
        <Flex className="justify-between">
            <div className='w-23'>
                <Product  heading="Product 1"/>
            </div>
            <div className='w-23'>
                <Product heading="Product 2"/>
            </div>
            <div className='w-23'>
                <Product heading="Product 3"/>
            </div>
            <div className='w-23' >
                <Product heading="Product 4"/>
            </div>
        </Flex>
        </Container>

 
    </>
  )
}

export default Home