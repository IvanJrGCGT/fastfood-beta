import React from 'react';
import styled from 'styled-components';
import {Logo,LogoCliente} from '../../logos';
import 'boxicons';



const Sidebar = styled.nav`
position: fixed;
background-color: white;
width: 16vw;
height: 100%;
display: flex;
flex-direction: column;
border-radius: 20px;
box-shadow: 1px 1px 10px 5px  #e9e9e9;

/* Aqui temos o heder do menu sidebar */
 .side-header{
    background-image: radial-gradient( #a2368c, #2a1225);
    height: 22vh;
    border-radius: 0px 20px 0px 0px;
    justify-content: center;
    display: flex;
 }
   .logoRFF{
        width: 9vw;
        height: 5vh;
        margin-top: 26px;
  }
   .logoRFF img{
        width: 100%;
        
  }
  
    .spnomelogo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 11vh;
    }

    .foto{
     width: 5.9vw;
     height: 12.2vh;
     background-image:url(${LogoCliente});  
     background-position:center;
     background-size:100px;
     background-repeat:no-repeat;
     border-radius: 50px;
     position: absolute;
     top:90px;
  }
      
      .borderfoto{
      width: 6.9vw;
      height: 14.5vh;
      background-color: #00000024;
      position: fixed;
      border-radius: 50px;
      top: 82px;
    }
    
     .nomecliente{
     font-size:19px;
     font-family:'Poppins', sans-serif;
     font-weight:600;
     margin-top: 40px;
  }


/* Aqui começa a estilização dos itens do menu */
.itensmenu{
  height: 69vh;
  padding-top: 30px;
}

.itensmenu li{
  list-style: none;
}
 
`;


export default function SidebarMenu(props){
    return(
    <>
   <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <Sidebar>
        <div className="side-header">
            <div className="logoRFF">
                <img src={Logo} alt="" />
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
              <li>
                <div className="drop">
                <a href="https://plataforma.fastfoodbr.com/">
                <box-icon color='#2a122575'name='dish'></box-icon>
                <span className='NomeC'>Cardápio</span>
                </a>
                <box-icon type='solid' name='chevron-down'></box-icon>
                </div>
              </li>
            </ul>
    </Sidebar>
    </>
    );
}