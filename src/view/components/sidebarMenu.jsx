import React from 'react';
import styled from 'styled-components';
import {LogoBranca} from '../../logos';

const Sidebar = styled.nav`
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
        margin-top: 20px;
  }
  .logoRFF img{
        width: 100%;
        
  }
`;

export default function SidebarMenu(props){
    return(
    <>
    <Sidebar>
        <div className="side-header">
            <div className="logoRFF">
                <img src={LogoBranca} alt="" />
            </div>
            <div className="foto">
                <img className='fotoloja'src={props.image} alt="" />
            </div>
            <div className="nomecliente">{props.nome}</div>
        </div>
    </Sidebar>
    </>
    );
}