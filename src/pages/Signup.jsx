import React from 'react'
import SubHeading from '../components/SubHeading'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { useSelector } from 'react-redux'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Signup = () => {

    const pageName = useSelector((state=> state.breadcrumb.currentname))
  return (
    <Container>
        <SubHeading text="Sign Up"/>
       <Flex className="mt-3">
        <Link className='mr-2' to={pageName == "Home"?"/":`/${pageName.toLowerCase()}`}> {pageName}</Link> /   
        <p className='first-letter:uppercase ml-2'>{window.location.pathname.replace("/","").replace("-"," ")}</p>

       </Flex>
       
        <p className='font-dm font-normal text-base max-w-644 my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

        <div className='border-t border-solid border-red-500'>
            <SubHeading text="Your Personal Details " className="pt-10"/>
            <Flex className="flex-wrap justify-between">
                <div className='w-48'>

                     <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                <div className='w-48'>

                    <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                <div className='w-48'>

                     <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                <div className='w-48'>

                    <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
            </Flex>
        </div>
        <div className='border-t border-solid border-red-500 mt-36'>
            <SubHeading text="Your Personal Details " className="pt-10"/>
            <Flex className="flex-wrap justify-between">
                <div className='w-48'>

                     <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                <div className='w-48'>

                    <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                <div className='w-48'>

                     <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                <div className='w-48'>

                    <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
            </Flex>
        </div>
        <div className='border-t border-solid border-red-500 mt-36'>
            <SubHeading text="Your Personal Details " className="pt-10"/>
            <Flex className="flex-wrap justify-between">
                <div className='w-48'>

                     <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                <div className='w-48'>

                    <Input title="First Name" placeholder="First Name" type="text"/>
                </div>
                
            </Flex>
            <input id='test' type='checkbox' className='peer/test' hidden/>
            <label className='relative mt-10 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-red-500 before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test:border after:peer-checked/test:border-solid after:peer-checked/test:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test:bg-red-500' for='test'>
            I have read and agree to the Privacy Policy
            </label>
            <br/>
            <Button className="mt-10" text="Log in"/>
        </div>
    </Container>
  )
}

export default Signup