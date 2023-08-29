import { useState,useRef, useEffect } from "react"

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
import Input from "./components/Input"



function App() {



  

  return (
   <>

  <Input placehoder="Ami Tmi " type="password" title="First Name *"/>
  <Input placehoder="Email" type="email" title="First Name"/>
  
   

   

   </>
      
  )
}

export default App
