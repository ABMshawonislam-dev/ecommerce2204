import React from 'react'
import Image from './Image'
import productImg from "../assets/productimg.png"
import Badge from './Badge'
import PortionHeading from './PortionHeading'
import Flex from './Flex'
import {AiFillHeart} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtocart } from '../slices/cartSlices'

const Product = ({heading}) => {

    let dispatch = useDispatch()

    let handlecart = ()=>{
        dispatch(addtocart({
            title:heading,
            price:44,
            image:productImg,
            quantity:1
        }))
    }

  return (
    <div className='mx-3'>
        <div className='relative overflow-hidden group'>
            <Image src={productImg} className="w-full"/>
            <Badge text="New"/>
            <div className='bg-white absolute -bottom-32 left-0 w-full p-6 group-hover:bottom-0 duration-500 '>
                <Flex className=' items-center justify-end gap-x-2'>
                    <p>Add to Wish List </p> <AiFillHeart/>
                </Flex>
                <Flex className=' items-center justify-end gap-x-2 my-3'>
                    <p>Compare </p> <AiFillHeart/>
                </Flex>
                <Flex  className='items-center justify-end gap-x-2 cursor-pointer'>
                    <p onClick={handlecart}>Add to Cart </p> <AiFillHeart/>
                </Flex>
            </div>
        </div>
        <Flex className="justify-between mt-3">
            <Link to="/">
                 <PortionHeading text={heading}/>
            </Link>
           
            <p className='font-dm font-regular text-base'>$44.00</p>
        </Flex>
    </div>
  )
}

export default Product