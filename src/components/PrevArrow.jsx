import React from 'react'
import {FaAngleLeft} from "react-icons/fa"

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    console.log("prev",props)
  return (

    <div
      className={`flex justify-center items-center w-16 h-16 rounded-full bg-[#979797] cursor-pointer ${className}`}
    //   style={{ ...style, display: "inline-block", background: "red" }}
      onClick={onClick}
    >
        <FaAngleLeft/>
    </div>

  )
}

export default PrevArrow