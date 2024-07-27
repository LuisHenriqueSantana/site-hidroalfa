import SvgComponent from "./assets/whatsapp";
import React from "react";
import "./index.css";

export function Whatsflu(){
    return(
        <>
        <div className="botao_flutuante">
        <div className="whatsapp">
            <a href="#">
            <SvgComponent />  
            </a>
        </div>
    </div>
    </>
    )
}