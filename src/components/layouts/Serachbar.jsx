import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import {FaBars,FaShoppingCart} from "react-icons/fa"
import {BiSolidUser} from "react-icons/bi"
import {RxTriangleDown} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Serachbar = () => {
    let handleBreadCrumb = (name)=>{
        console.log(name)
    }
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
                    <FaShoppingCart/>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Serachbar