import React from "react";
import SidebarMenu from "../components/SidebarMenu/sidebarMenu";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

const Body = styled.body`
width: 98.7vw;
min-height:100vh;

.centro{
display: flex;
flex-direction: row;
width: 100%;
height: 900px;

.esquerdo{
 width: 16%;
 height: 100%;
}

.direito{
width: 84%;
height: 100%;
}
}
`;


            export default function HomePage(){
                return (


                    <Body>

                    <div className="centro">
                    <div className="esquerdo">
                    <SidebarMenu nome="Burguer King" itemname1="Dashboard" itemname2="Pedidos" itemname3="Cardápio"
                    subname1="Categorias" subname2="Produtos" subname3="Banners" subname4="Cupons" itemname4="Comércio"
                    subname5="QR Code" subname6="Funcionamento" subname7="Suporte" itemname5="Funções" subname8="Integração"
                    subname9="Impressão" itemname6="Bairros" subname10="Adicionar" subname11="Gerenciar" itemname7="Configurações"
                    itemname8="Sair"
                    />
                    </div>

                    <div className="direito">
                    </div>
                    </div>
                    <Footer/>

                    </Body>
                );
            }