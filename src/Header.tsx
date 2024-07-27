import React, { useEffect } from "react";
import MobileNavbar from "./mobileNavbar";
import img from "./imagens/HidroAlfa.png";
import "./index.css";

export function Header() {
  useEffect(() => {
    const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".nav-list",
      ".nav-list li"
    );
    mobileNavbar.init();
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <a href="/"><img src={img} alt="" /></a>
          </div>
          <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-list">
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
