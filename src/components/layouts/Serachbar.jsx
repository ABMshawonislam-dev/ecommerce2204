import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import {FaBars,FaShoppingCart} from "react-icons/fa"
import {BiSolidUser} from "react-icons/bi"
import {RxTriangleDown} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,removeFromCart } from '../../slices/cartSlices'
import { useEffect } from 'react'

const Serachbar = () => {

    let [open,setOpen] = useState(false)
    let [total,setTotal] = useState(0)

    let handleBreadCrumb = (name)=>{
   
    }
        let cart = useSelector((state)=>state.cart.cartItem)
        let dispatch = useDispatch()

    let handleIncrement = (item) =>{
        dispatch(increment(item))
        setChange(!change)
    }

    let handleDecrement = (item) =>{
        dispatch(decrement(item))
    
    }


    useEffect(()=>{
    
        let total = 0
        cart.map(item=>{
            total += item.price*item.quantity
            
        })
        setTotal(total)
    },[cart])



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
            <div className="w-2/6 bg-black text-white h-screen absolute top-0 right-0 z-10">
                <FaShoppingCart onClick={()=>setOpen(false)}/> 
                <ul className='flex text-black  justify-between bg-ash py-5 px-2'>
                    <li>Action</li>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
                {cart.length > 0 
                ? 
                cart.map(item=>(
                    <ul className='flex  justify-between  py-5 px-2 border-b border-solid border-white'>
                            <li><button
          className="bg-red-500 hover:bg-red-600 text-white font-bold p-2  focus:outline-none focus:shadow-outline"
        onClick={()=>dispatch(removeFromCart(item))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block align-middle mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
    
        </button></li>
                            <li>{item.title}</li>
                            <li>{item.price}</li>
                            <li className='border border-white border-solid py-1 px-5'>
                                <button className='mr-2' onClick={()=>handleDecrement(item)}>-</button>
                                {item.quantity}
                                <button className='ml-2' onClick={()=>handleIncrement(item)}>+</button>
                            </li>
                            <li>{item.price*item.quantity}</li>
                    </ul>
                        ))
                :
                <h1 className='text-white text-center'>Cart Is Empty</h1>
                }
                <h1 className='text-white text-center absolute bottom-5 right-5'>Total: {total}</h1>
            </div>
            }
        </Container>
    </section>
  )
}

export default Serachbar