import React, { useEffect } from "react";
import img from "./imagens/HidroAlfa.png";
import "./index.css";

export function Fotter(){
    return(
        <>
            <footer>
        <div className="rodape">
            <div className="logo2">
    <a href="/"><img src={img} alt=""/></a>
            </div>
        <div className="contato2">
            <div>
                <h1>CONTATO</h1>
            </div>
            <div className="telef">
                <p>tel:</p>
                <p>3122-213-3212</p>
            </div>
            <div className="email">
                <p>E-mail:</p>
                <p>ddajkwdajkwdwajk@gmail.com</p>
            </div>
            <div className="endereco">
                <p>Endereço</p>
                <p>R. Javaés, 613 - Bom Retiro - São Paulo - SP</p>
            </div>
        </div>
        <div className="regioes">
            <h1>REGIÕES ATENDIDAS</h1>
            <p>CENTRO</p>
            <p>ZONA LESTE</p>
            <p>ZONA NORTE</p>
            <p>ZONA OESTE</p>
            <p>ZONA SUL</p>
        </div>
    </div>
    </footer>

        </>
    )
}