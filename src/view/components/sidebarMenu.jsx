import React from 'react';
import styled from 'styled-components';
import {Logo,LogoCliente} from '../../logos';




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
      background-color: #008d2a23;
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
     position: relative;
     list-style: none;
     }
      .itensmenu li i{
      height: 2vh;
      min-width: 4vw;
      text-align: center;
      line-height: 50px;
      font-size: 23px;
      
     } 

   

     .itensmenu li a{
      text-decoration: none;
      color :#2a1225 ;
      transition: 0.2s;
      
     }

     .itensmenu .nomeC{
      font-size: 17px;
      font-weight: 600;

      
    
     }
     
    .hover :hover{
     transition: 0.2s;
     color:#a2368c !important;
    }
  
     
     
    
     .drop{
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
    
    /* Aqui fica o sub-menu */
      .sub-menu a{
        text-decoration: none;
        color:#2a122596;
        font-size: 16px;
        display: none;
      }

      .sub-menu li{
        padding: 4px 20px 0px 50px;
        
      }

      


 
`;


export default function SidebarMenu(props){
    return(
    <>
   <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <Sidebar>

        {/* estrutura header menu */}
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
            
            
            {/* Estrutura dos itens menu */}
            <ul className='itensmenu'>

              {/* Dashboard */}
              <li className="hover">
                <a href="https://plataforma.fastfoodbr.com/">
                  <div >
                <i className='bx bx-bar-chart'></i>
                <span className='nomeC'>Dashboard</span>
               
                </div>
                </a>
              </li>

              {/* Pedidos */}
              <li className="hover">
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-basket'></i>
                <span className='nomeC'>Pedidos</span>
                </a>
              </li>

              {/* Cardápio e seus sub-menus */}
              <li className="hover">
                <div className="drop">
                <a href="https://plataforma.fastfoodbr.com/">
                <i class='bx bx-dish'></i>
                <span className='nomeC'>Cardápio</span>
                </a>
                <i className='bx bxs-chevron-down arrow' ></i>
                </div>

               {/*  Sub-menu cardápio */}
                <ul className="sub-menu">
                  <li><a href="https://plataforma.fastfoodbr.com/">Categorias</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Produtos</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Banners</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Cupons</a></li>
                </ul>
              </li>


            </ul>
    </Sidebar>
    </>
    );
}