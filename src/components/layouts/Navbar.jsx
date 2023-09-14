import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import logo from "../../assets/logo.png"
import Container from '../Container'
import List from '../List'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pageName } from '../../slices/breadCrumbSlices'

const Navbar = () => {

    let dispatch = useDispatch()
    
    let handleBreadCrumb = (name)=>{
       dispatch(pageName(name))
    }



  return (
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-1/5'>
                    <Image src={logo}/>
                </div>
                <Flex className='w-4/5 justify-end'>
                    <ul className='flex gap-x-10'>
                        <Link onClick={()=>handleBreadCrumb("Home")} to="/">
                            <List text="Home"/>
                        </Link>
                        <Link onClick={()=>handleBreadCrumb("Shop")} to="/shop">
                            <List text="Shop"/>
                        </Link>
                        <List text="About"/>
                        <List text="Contacts"/>
                        <List text="Journal"/>
                    </ul>
                </Flex>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar