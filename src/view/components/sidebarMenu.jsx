import React from 'react';
import styled from 'styled-components';
import {LogoBranca, LogoCliente} from '../../logos';


const Sidebar = styled.nav`
position: fixed;
background-color: white;
width: 16vw;
height: 100%;
display: flex;
flex-direction: column;
border-radius: 20px;
box-shadow: 1px 1px 10px 5px  #e9e9e9;
 .side-header{
    background-image: radial-gradient( #a2368c, #2a1225);
    height: 20vh;
    border-radius: 0px 20px 0px 0px;
    justify-content: center;
    display: flex;
 }
  .logoRFF{
        width: 10vw;
        height: 5vh;
        margin-top: 26px;
  }
  .logoRFF img{
        width: 100%;
        
  }

  .foto{
    width: 80px;
    height: 80px;
    background-image:url(${LogoCliente}); 
    background-position:center;
    background-size:100px;
    background-repeat:no-repeat;
    border-radius: 50px;
    position: absolute;
    top:90px;
    
    
  }
  .borderfoto{
      width: 95px;
      height: 95px;
      background-color: #2a12251c;
      position: fixed;
      border-radius: 50px;
      top: 82px;
    }
    
  .spnomelogo{
display: flex;
justify-content: center;
align-items: center;
  }
  .nomecliente{
    font-size:19px;
    font-family:'Poppins', sans-serif;
    font-weight:600;
    margin-top: 10px;
  }
 
`;

export default function SidebarMenu(props){
    return(
    <>
   <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <Sidebar>
        <div className="side-header">
            <div className="logoRFF">
                <img src={LogoBranca} alt="" />
            </div>
        </div>
        <div className="spnomelogo">
            <div className="borderfoto"></div>
            <div className="foto"></div>
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="nomecliente">{props.nome}</div>
            </div>
            <ul className='itensmenu'>
              <li>
                <a href="https://plataforma.fastfoodbr.com/">
                <box-icon color ='#2a122575'name='bar-chart-square'></box-icon>
                <span className='NomeC'>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="https://plataforma.fastfoodbr.com/">
                <box-icon color ='#2a122575'name='basket'></box-icon>
                <span className='NomeC'>Pedidos</span>
                </a>
              </li>
            </ul>
    </Sidebar>
    </>
    );
}