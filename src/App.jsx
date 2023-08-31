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

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Test from "./components/Test"
import RootLayouts from "./components/RootLayouts"
import ErrorPage from "./pages/ErrorPage"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>


    <Route
      path="/"
      element={<RootLayouts />}
      >
        <Route
          path="/"
          element={<Test />}
          ></Route>
          <Route
            path="/shawon"
            element={<Product />}
          ></Route>
          <Route
            path="*"
            element={<ErrorPage />}
          ></Route>

      </Route>



      
    </Route>
  )
);



function App() {



  

  return (
   <>

    
   <RouterProvider router={router} />

   

   </>
      
  )
}

export default App
