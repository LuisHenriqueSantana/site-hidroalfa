import { useLayoutEffect } from "react"
import { Header } from "./Header"
import { HeaderFixo } from "./HeaderFixo"
import { Banner } from "./banner"
import { Garantias } from "./garantias"
import { Regioes } from "./Regioes"
import { Whatsflu } from "./whatsflu"
import { Fotter } from "./footer"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";


function App() {

    useLayoutEffect(() => {

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scroll2", {
        x: 0,
        display: "block",
        duration: 1,
        scrollTrigger:{
          trigger: ".scroll2",
          markers: true,
          start: "top 90%",
        }
      })
  
      return () => {
        gsap.killTweensOf(".relogio")
      }
    }, [])

  return (
    <>
      <div className="scroll"><Header/></div>
      <div className="scroll"><HeaderFixo/></div>
      <Banner/>
      <Garantias/>
      <div className="scroll2"><Regioes/></div>
      <Whatsflu/>
      <Fotter/>
    </>
  )
}

export default App
