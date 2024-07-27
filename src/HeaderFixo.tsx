import React from "react";
import "./index.css";
import SvgComponent from "./assets/whatsapp";

export function HeaderFixo() {
  return (
    <>
      <div className="menu-suspenso">
        <div className="verde atendimento">
          <p>ATENDIMENTO 24 HORAS</p>
        </div>
        <div className="contato">
        <SvgComponent />
          <div className="teste">
            <p>(11) 93333-6000</p>
            <p className="verde">Whatsapp</p>
          </div>
        </div>
      </div>
    </>
  );
}
