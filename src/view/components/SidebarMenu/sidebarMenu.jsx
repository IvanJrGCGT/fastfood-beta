import React from 'react';
import SidebarStyled from '../../atomic/SidebarStyled';
import './scriptSidebar.js';

export default function SidebarMenu(props){
  return(

  <>
 <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
  <SidebarStyled>

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
              <span className='nomeC'>{props.itemname1}</span>
              </a>
              <ul className="sub-menu close">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname1}</a></li>
                </ul>
            </li>

            {/* Pedidos */}
            <li>
              <a href="https://plataforma.fastfoodbr.com/">
              <i className='bx bx-basket'></i>
              <span className='nomeC'>{props.itemname2}</span>
              </a>
              <ul className="sub-menu close">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname2}</a></li>
                </ul>
            </li>

            {/* Cardápio e seus sub-menus */}
            <li>
              <div className="drop">
              <a href="https://plataforma.fastfoodbr.com/">
              <i className='bx bx-restaurant'></i>
              <span className='nomeC'>{props.itemname3}</span>
              </a>
              <i className='bx bxs-chevron-up arrow'></i>
              </div>

             {/*  Sub-menu cardápio */}
              <ul className="sub-menu">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname3}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname1}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname2}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname3}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname4}</a></li>
              </ul>
            </li>

            {/*  Comércio e seus sub-menus */}
            <li>
              <div className="drop">
              <a href="https://plataforma.fastfoodbr.com/">
              <i className='bx bx-home'></i>

              <span className='nomeC'>{props.itemname4}</span>
              </a>
              <i className='bx bxs-chevron-up arrow' ></i>
              </div>

             {/*  Sub-menu comércio */}
              <ul className="sub-menu">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname4}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname5}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname6}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname7}</a></li>
              </ul>
            </li>

            {/*  Funções e seus sub-menus */}
            <li>
              <div className="drop">
              <a href="https://plataforma.fastfoodbr.com/">
              <i className='bx bx-customize'></i>
              <span className='nomeC'>{props.itemname5}</span>
              </a>
              <i className='bx bxs-chevron-up arrow' ></i>
              </div>

             {/*  Sub-menu funções */}
              <ul className="sub-menu">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname5}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname8}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname9}</a></li>
              
              </ul>
            </li>


            {/*  Bairros e seus sub-menus */}
            <li>
              <div className="drop">
              <a href="https://plataforma.fastfoodbr.com/">
              <i className='bx bx-map-pin'></i>
              <span className='nomeC'>{props.itemname6}</span>
              </a>
              <i className='bx bxs-chevron-up arrow' ></i>
              </div>

             {/*  Sub-menu bairros */}
              <ul className="sub-menu">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname6}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname10}</a></li>
                <li><a href="https://plataforma.fastfoodbr.com/">{props.subname11}</a></li>
              
              </ul>
            </li>

                 {/* Configurções */}
                 <li>
              <a href="https://plataforma.fastfoodbr.com/">
              <i className='bx bx-cog'></i>
              <span className='nomeC'>{props.itemname7}</span>
              </a>
              <ul className="sub-menu close">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname7}</a></li>
                </ul>
            </li>

                  {/* Sair */}
                 <li>
              <a href="https://plataforma.fastfoodbr.com/">
              <i className='bx bx-power-off'></i>
              <span className='nomeC'>{props.itemname8}</span>
              </a>
              <ul className="sub-menu close">
                <li><a className='menu-name' href="https://plataforma.fastfoodbr.com/">{props.itemname8}</a></li>
                </ul>
            </li>



          {/* Toggle buton status - aberto/fechado */}
         <div className="status aberto">
          <span className="mode-status text">Fechado</span>

          <span className="statusbtn">
          <div className="switchbtn"></div>
          </span>
         </div>


          </ul>

   <section className="button-space">
    <div className="button-side">
    <i className='bx bx-chevron-left open'></i>
    </div>
   </section>
          </div>
  </SidebarStyled>

  
  </>
  );
}