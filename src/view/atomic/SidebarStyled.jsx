
import styled from "styled-components";
import { Logo, LogoIcon, LogoCliente } from '../../logos.jsx';

const SidebarStyled = styled.nav`
.sidebar{
position: fixed;
background-color: white;
width: 210px;
height: 100%;
display: flex;
flex-direction: column;
border-radius: 0px 20px 20px 0px;
box-shadow: 1px 1px 10px 2px  #4444441a;
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
      line-height: 40px;
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
      font-size: 16px;
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



      /* Botão toggle aberto/fechado */
      .sidebar .itensmenu .status{
        display: flex;
        justify-content: space-around;
        align-items:center ;
        flex-direction: row;
        background-color: #f1f1f1;
        width: 175px;
        height: 50px;
        border-radius: 7px;
        position: relative;
        left: 20px;
        cursor: pointer;
      }

      .sidebar .status .mode-status{
        font-size: 16px;
        font-weight: 600;
        margin-left: 10px;
        transition: all 0.9s ease;
      }

      .sidebar .status .statusbtn{
       display: flex;
       align-items: center;
       width: 80px;
       height: 30px;
      }

      .sidebar .status .switchbtn{
       margin-top: 2px;
       margin-left: 5px;
       background-color: #c20000;
       border-radius: 50px;
       width: 55px;
       height: 22px;
       transition: all 0.4s ease;
      }

      .sidebar .status.aberto .switchbtn{
        background-color: #009e47;
      }

      
      
      .switchbtn::before{
        content: '';
        position: absolute;
        top: 17px;
        left: 99px;
        width: 18px;
        height: 18px;
        background-color: #ffff;
        border-radius: 50px;
        transition: all 0.2s ease;
      }
      
      .sidebar .status.aberto .switchbtn::before{
        left: 127px;
      }

    
      /* Botão toggle aberto/fechado. Sidebar close */

      .sidebar.close .itensmenu .status{
      width: 40px;
      height: 40px;
      left: 10px;
      justify-content: center;
      align-items: center;
      }
  
      .sidebar.close .status .mode-status{
     display: none;
    }

    .sidebar.close .itensmenu .switchbtn{
    width: 35px;
    height: 14px;
    margin-left: 2px;
    }

    .sidebar.close .itensmenu .status .switchbtn::before{
     margin: 0;
     left: 4px;
     top:16px ;
     width: 10px;
     height: 10px;
    }

    .sidebar.close .itensmenu .status.aberto .switchbtn::before{
     left: 25px;
    }  
      /* Aqui tem o botão do sidebar */
      .button-space{

        cursor: pointer;
        position: fixed;
        bottom: 565px;
        left: 198px;
        width: calc(100% - 1330px);;
        border-radius: 60px;
        background-color: #ffffff;
        transition: all 0.5s ease;
      }

      .sidebar.close  .button-space{
      left: 50px;    
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

export default SidebarStyled;