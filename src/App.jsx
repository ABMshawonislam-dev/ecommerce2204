import { useState,useRef } from "react"

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
  let dropRef = useRef(null)

  let handleDrop = (e)=>{
    console.log(e.target)
    console.log(dropRef.current.contains(e.target))

    if(e.target.classList[0] == "clickbtn"){
      if(dropRef.current.style.display == "block"){
        dropRef.current.style.display = "none"
      }else{
        dropRef.current.style.display = "block"
      }
    }else{
      if(!dropRef.current.contains(e.target)){
        if(dropRef.current.style.display == "block"){
          dropRef.current.style.display = "none"
        }
      }
      
    }
  }

  return (
    <>
      <div onClick={handleDrop}>
      <button className="clickbtn">Click</button>

<div className="bg-red-500 hidden" ref={dropRef}>
<ul>
  <li>Home</li>
  <li>Home</li>
  <li>Home</li>
  <li>Home</li>
</ul>

</div>

<h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, blanditiis ab facilis enim quidem accusamus impedit velit aliquid voluptatibus suscipit natus saepe optio reprehenderit laudantium cupiditate? Ea aut delectus eum?</h1>
      </div>

 
      
    </>
  )
}

export default App
