import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import {FaBars,FaShoppingCart} from "react-icons/fa"
import {BiSolidUser} from "react-icons/bi"
import {RxTriangleDown} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Serachbar = () => {

    let [open,setOpen] = useState(false)

    let handleBreadCrumb = (name)=>{
        console.log(name)
    }
        let cart = useSelector((state)=>state.cart.cartItem)
  return (
    <section className='bg-ash py-10'>
        <Container>
            <Flex>
                <Flex className='w-1/5 items-center gap-x-2.5'>
                    <FaBars/>Shop by Category
                </Flex>
                <div className='w-3/5 relative'>
                    <input className='w-full py-4 px-5' placeholder='Search Products'/>
                    <AiOutlineSearch className='text-2xl absolute top-1/2  right-4 -translate-y-1/2'/>
                </div>
                <Flex className='w-1/5 gap-x-10 justify-end items-center'>
                    <Flex>
                        <Link onClick={()=>handleBreadCrumb("Sign Up")} to="/sign-up">
                            <BiSolidUser/>
                        </Link>
                        <RxTriangleDown/>
                    </Flex>
                    <FaShoppingCart onClick={()=>setOpen(true)}/> {cart.length}
                </Flex>
            </Flex>
            {open &&
            <div className="w-2/6 bg-red-500 h-screen absolute top-0 right-0 z-10">
                <FaShoppingCart onClick={()=>setOpen(false)}/> 
                <ul>
                    {cart.map(item=>(
                        <li>{item.title}- {item.quantity}</li>
                    ))}
                </ul>
            </div>
            }
        </Container>
    </section>
  )
}

export default Serachbar