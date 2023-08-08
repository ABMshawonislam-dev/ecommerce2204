import Image from "./components/Image"
import Logo from "./assets/logo.png"
import Facillity from "./components/Facillity"
import SubHeading from "./components/SubHeading"
import PortionHeading from "./components/PortionHeading"
import Button from "./components/Button"


function App() {


  return (
    <>
      <Image src={Logo} />
      <Facillity/>
      <SubHeading text="Sub HEading" className="text-49"/>
      <PortionHeading text="Portion Heading"  className="text-5xl"/>
      <Button text="Add To Cart"/>
    </>
  )
}

export default App
