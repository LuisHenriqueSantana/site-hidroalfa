import React from "react";
import bannner from "./assets/desentupimento-cozinha.jpg"
import "./index.css";

export function Banner(){
    return(
        <>
           <div className="banner_ea">    
       <div className="banner">
           <img src={bannner} alt=""/>
       </div>
       <div className="info">
            <div className="text">
                <h4>DESENTUPIDORA <span className="verde">24H</span></h4>
                <p>Visita gratuita imediata</p>
            </div>
            <div className="cta">
                <p>SOLICITE UM ORÇAMENTO</p>
            </div>
       </div>
   </div>
        </>
    )
}