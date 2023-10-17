import React from 'react'
import {FaAngleRight} from "react-icons/fa"
const NextArrow = (props) => {
     const { className, style, onClick } = props;
  return (
    <div
      className={`flex justify-center items-center w-16 h-16 rounded-full bg-[#979797] cursor-pointer ${props.class}`}
    //   style={{ ...style, display: "inline-block", background: "red" }}
      onClick={onClick}
    >
        <FaAngleRight/>
    </div>
  )
}

export default NextArrow