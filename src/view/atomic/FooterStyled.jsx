import styled from "styled-components";
import {LogoIconRoxo } from "../../logos";

const FooterStyled = styled.footer`
.footerspc{
position: absolute;
width: 100%;
height: 100px;
align-items: center;
display: flex;
flex-direction: row;
border-radius: 10px 10px 0px 0px;
box-shadow: 1px 1px 10px 5px  #e9e9e9;
background-image: radial-gradient( #a2368c, #2a1225);
transition: all 0.8s ease;

.logospc{
align-items: center;
justify-content: center;
margin-left: 80px;
display: flex;
flex-direction: row;
width: 200px;
height: 90px;


}

.logo{
width:100px;
height: 100px;
background-image: url(${LogoIconRoxo});
background-size: 62px;
background-repeat: no-repeat;
background-position:center;
}

.frase{
    margin-left: 5px;
    font-size: 12px;
    color: #ffffff;

}

.caminhospc{
    margin-left: 50px;
    width: 500px;
    height: 50px;
    display: flex;
    flex-direction: row;
}

.caminhospc li,a{
    list-style: none;
    text-decoration: none;
    margin: 0px 0px 8px 12px;
    color: white;
    font-weight: 300;
    font-size: 13px;
    transition: all 0.4s ease;
}

.caminhospc li,a:hover{
    color: #2a1225;
    font-weight: 600;
}


.divisoria{
    height: 50px;
    width: 1px;
    background-color: #ffffff;
}

.redesspc{
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    width: 400px;
    height: 80px;
    justify-content: center;
    align-items: center;
    
  
}

.redes i{
    margin: 5px;
    cursor: pointer;
    justify-content: space-between;
    padding: 20px;
    font-size: 40px;
    color: white;
    transition: all 0.4s ease;
}

.redes i:hover{
color: #2a1225;
font-weight: 500;
}

}
`;

export default FooterStyled;