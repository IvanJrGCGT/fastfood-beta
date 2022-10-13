import React from 'react';
import styled from 'styled-components';
import {Logo,LogoCliente,LogoIcon} from '../../logos';
import './scriptSidebar.js';


const Styled = styled.nav`
.sidebar{
position: fixed;
background-color: white;
width: 210px;
height: 100%;
display: flex;
flex-direction: column;
border-radius: 20px;
box-shadow: 1px 1px 10px 5px  #e9e9e9;
transition: all 0.5s ease;

}

/* Aqui temos o header do menu sidebar */
 .sidebar .side-header{
    background-image: radial-gradient( #a2368c, #2a1225);
    height: 150px;
    border-radius: 0px 20px 0px 0px;
    justify-content: center;
    display: flex;
 }
       .sidebar .logoRFF{
        background-image: url(${Logo});
        background-size: 100%;
        background-repeat: no-repeat;
        width: 130px;
        height: 100px;
        margin-top: 26px;
        transition: all 0.5s ease;
  }

  
    .sidebar .spnomelogo{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 11vh;
    
    }

    .sidebar .foto{
     width: 80px;
     height: 80px;
     background-image:url(${LogoCliente});  
     background-position:center;
     background-size:100px;
     background-repeat:no-repeat;
     border-radius: 50px;
     position: absolute;
     top:90px;
     transition: all 0.5s ease;
  }

      .sidebar .borderfoto{
      width: 95px;
      height: 95px;
      background-color: #172a1237;
      position: fixed;
      border-radius: 50px;
      top: 82px;
      transition: all 0.5s ease;
    }

        
    .sidebar .nomecliente{
     font-size:21px;
     font-family:'Poppins', sans-serif;
     font-weight:600;
     transition: 0.2s ease-out;
     transition-delay: 0.200s;
     margin-top: 60px;
     
  }

  .sidebar.close .nomecliente{
    transition-delay: 0s;
    opacity: 0;
    pointer-events: none;

  }


/* Aqui começa a estilização dos itens do menu */
  .sidebar .itensmenu{
  height: 500px;
  padding-top: 30px;
  overflow: auto;
}

.sidebar.close .itensmenu{
  overflow: visible;
}
   .sidebar .itensmenu::-webkit-scrollbar{
   display: none;
  
   }
    .sidebar .itensmenu li{
     align-items: center;
     position: relative;
     list-style: none;
     transition: all 0.4s ease;
     }

    
     .sidebar .itensmenu li i{
      min-width: 60px;
      text-align: center;
      line-height: 50px;
      font-size: 19px;
      cursor: pointer;
      transition: all 0.3s ease;
      
     } 

     /* animação seta sub-menu abaixo */
     .sidebar .itensmenu li.showMenu i.arrow{
      transform: rotate(-180deg) ; 
     }

     /* aqui se desativa a seta do sub-menu no sidebar close */
     .sidebar.close .itensmenu i.arrow{
      display: none;
     }

     .sidebar .itensmenu li a{
      display: flex;
      align-items: center;
      text-decoration:none;
      
     }


     .sidebar .itensmenu .nomeC{
      font-size: 17px;
      font-weight: 600;
      transition: all 0.4s ease;
     }

     /* aqui retiramos o nome do sidebar close */
     .sidebar.close .itensmenu li a .nomeC{
      opacity: 0;
      pointer-events: none;
     }

     .sidebar .itensmenu,a,li{
      text-decoration: none;
      color: #2a1225;
     }
     
     .sidebar li :hover {
     transition: all 0.2s ease;
     color:#a2368c !important;
    }
  
     
     .sidebar .drop{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sidebar.close .itensmenu li .drop{
     display: block
   }
    
    /* Aqui fica o sub-menu */
     .sidebar .sub-menu a{
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        white-space: nowrap;
        padding: 0px 25px;
        transition: all 0.3s ease;
        
      }
      
      .sidebar .itensmenu li.showMenu .sub-menu {
      display: none;
      }

      .sidebar.close .itensmenu li.showMenu .sub-menu {
      display: block;
      }


      .sidebar .sub-menu {
        padding: 0px 50px 0px 34px;
        display: block;
        
      }

      .sidebar.close li .sub-menu {
      justify-content: center;
       margin-top: 0;
       position: absolute;
       background-color: #ffffff;
       box-shadow: 10px 5px 10px 1px #d8d8d8;
       border-radius: 0px 15px 15px 0px;
       padding: 5px 15px 10px 15px;
       left: 100%;
       top: -50px;
       opacity: 0;
       pointer-events: none;
       display: block;
       transition: 0s;
      }

      .sidebar.close li:hover .sub-menu {
        transition: all 0.4s ease;
        top: 0px;
        opacity: 1;
        pointer-events: auto;
        
      }

      .sidebar li .sub-menu .menu-name{
      display: none;
        
      }
      
      .sidebar.close .sub-menu .menu-name{
        font-size: 16px;
        font-weight: 600;
        display: block;
        
      }

       /* Esse sub-menu é o hover dos itens menu sem dropdown */
      .sidebar li .sub-menu.close{
        opacity: 1;
       pointer-events: auto;
       opacity: 0;
       pointer-events: none;
       padding: 2px 10px 2px 15px;
    

      }
      .sidebar li:hover .sub-menu.close{
       top: 85%;
       transform: translateY(-30px);
       opacity: 1;
       pointer-events: auto;
      }

      
      /* Aqui tem o botão do sidebar */
      .button-space{
        cursor: pointer;
        position: relative;
        top: 60px;
        left: 198px;
        width: calc(100% - 1345px);
        border-radius: 60px;
        background-color: #ffffff;
        transition: all 0.5s ease;
      }

      .sidebar.close ~ .button-space{
      left:50px ;
      width: calc(100% - 1345px);
      transform: rotate(180deg);

      }
      
      .button-space .button-side{
      height: 20px;
      align-items: center;
      justify-content: center;
      display: flex;
      }

      .button-space .button-side i{
      color: #2a1225;
      font-size:22px;
      }

      
  

      /* sibebar close estilização */
      .sidebar.close{
        width: 60px;
      }
      .sidebar.close .logoRFF{
       background-image: url(${LogoIcon});
       background-size: 50px;
       background-position: 7px 1px;
       
      }


      .sidebar.close .foto{
     width: 50px;
     height: 50px;
     background-position:center;
     background-size:70px;
     background-repeat:no-repeat;
     border-radius: 50px;
     position: absolute;
     top:100px;
      }

      .sidebar.close .borderfoto{
        width: 58px;
        height: 58px;
        position: fixed;
        top:95px;
      }

      .sidebar.close .spnomelogo{
        height: 10px;
      }

      .sidebar.close .side-header{
        height: 125px;
      }


      @media screen and (max-width: 400px){
  .sidebar{
    width: 240px;
  }
  .sidebar.close{
    width: 78px;
  }

  .button-space{
    left: 240px;
    width: calc(100% - 240px);
  }
  .sidebar.close ~ .button-space{
    left: 50px;
    width: calc(100% - 1345px);
  }
}

      
`;



export default function SidebarMenu(props){
    return(

    <>
   <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <Styled>

      <div className="sidebar close">

        {/* estrutura header menu */}
        <div className="side-header">
            <div className="logoRFF"></div>
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
              <li>
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-bar-chart'></i>
                <span className='nomeC'>Dashboard</span>
                </a>
                <ul className="sub-menu close">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Dashboard</a></li>
                  </ul>
              </li>

              {/* Pedidos */}
              <li>
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-basket'></i>
                <span className='nomeC'>Pedidos</span>
                </a>
                <ul className="sub-menu close">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Pedidos</a></li>
                  </ul>
              </li>

              {/* Cardápio e seus sub-menus */}
              <li>
                <div className="drop">
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-restaurant'></i>
                <span className='nomeC'>Cardápio</span>
                </a>
                <i className='bx bxs-chevron-up arrow'></i>
                </div>

               {/*  Sub-menu cardápio */}
                <ul className="sub-menu">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Cardápio</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Categorias</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Produtos</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Banners</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Cupons</a></li>
                </ul>
              </li>

              {/*  Comércio e seus sub-menus */}
              <li>
                <div className="drop">
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-home'></i>

                <span className='nomeC'>Comércio</span>
                </a>
                <i className='bx bxs-chevron-up arrow' ></i>
                </div>

               {/*  Sub-menu comércio */}
                <ul className="sub-menu">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Comércio</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">QR code</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Funcionamento</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Suporte</a></li>
                </ul>
              </li>

              {/*  Funções e seus sub-menus */}
              <li>
                <div className="drop">
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-customize'></i>
                <span className='nomeC'>Funções</span>
                </a>
                <i className='bx bxs-chevron-up arrow' ></i>
                </div>

               {/*  Sub-menu funções */}
                <ul className="sub-menu">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Funções</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Integrações</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Impressões</a></li>
                
                </ul>
              </li>


              {/*  Bairros e seus sub-menus */}
              <li>
                <div className="drop">
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-map-pin'></i>
                <span className='nomeC'>Bairros</span>
                </a>
                <i className='bx bxs-chevron-up arrow' ></i>
                </div>

               {/*  Sub-menu bairros */}
                <ul className="sub-menu">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Bairros</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Adicionar</a></li>
                  <li><a href="https://plataforma.fastfoodbr.com/">Gerenciar</a></li>
                
                </ul>
              </li>

                   {/* Configurções */}
                   <li>
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-cog'></i>
                <span className='nomeC'>Configurções</span>
                </a>
                <ul className="sub-menu close">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Configurções</a></li>
                  </ul>
              </li>

                    {/* Sair */}
                   <li>
                <a href="https://plataforma.fastfoodbr.com/">
                <i className='bx bx-power-off'></i>
                <span className='nomeC'>Sair</span>
                </a>
                <ul className="sub-menu close">
                  <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">Sair</a></li>
                  </ul>
              </li>

           <li className="spacestatus">
            <span className="status"></span>
            <div className="switchbtn"></div>
           </li>


            </ul>

            </div>
     <section className="button-space">
      <div className="button-side">
      <i className='bx bx-chevron-left open'></i>
      </div>
     </section>
    </Styled>

    
    </>
    );
}
