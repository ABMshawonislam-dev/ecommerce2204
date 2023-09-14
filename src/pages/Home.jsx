import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import Product from '../components/Product'


const Home = () => {

  return (
    <Container>
        <SubHeading text="Our Bestsellers"/>
        <Flex>
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
  )
}

export default Home