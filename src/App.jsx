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
        visibility: "visible",
        opacity: 1,
        scrollTrigger:{
          trigger: ".scroll2",
          start: "top 90%",
        }
      })
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scroll3", {
        x: 0,
        visibility: "visible",
        opacity: 1,
        scrollTrigger:{
          trigger: ".scroll3",
          start: "top 90%",
        }
      })
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scroll1", {
        x: 0,
        visibility: "visible",
        opacity: 1,
      })
  
      return () => {
        gsap.killTweensOf(".relogio")
      }
    }, [])

  return (
    <>
      <div className="container">
        <div className="scroll1"><Header/></div>
        <div className="scroll1"><HeaderFixo/></div>
        <div className="scroll"><Banner/></div>
        <div className="scroll3"><Garantias/></div>
          <div className="scroll2"><Regioes/></div>
        <Whatsflu/>
        <div className="scroll3"><Fotter/></div>
      </div>
    </>
  )
}

export default App
