import React from "react"
import FooterStyled from "../../atomic/FooterStyled"


export default function Footer(){
    return(<FooterStyled>
    
    <div className="footerspc">
        <div className="logospc">
            <div className="logo"></div>
            <div className="frase">Chegando para Revolucionar!</div>
        </div>

      


        <div className="redesspc">
            <div className="redes">
            <i class='bx bxl-whatsapp'></i>
            <i class='bx bxl-instagram'></i>
            <i class='bx bxl-facebook'></i>
            </div>
        </div>

        
        <div className="divisoria"></div>
        
        <div className="caminhospc">
                <ul>
                    <li>
                    <a href="#">Dashboard</a>
                    </li>

                    <li>
                        <a href="#">Pedidos</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="#">Cardápio</a>
                    </li>

                    <li>
                        <a href="#">Comércio</a>
                    </li>

                </ul>

                <ul>
                <li>
                    <a href="#">Bairros</a>
                    </li>

                    <li>
                        <a href="#">Configurações</a>
                    </li>
                </ul>
        </div>
    </div>
    
    </FooterStyled>)
}