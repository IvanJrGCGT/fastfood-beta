import React from "react";
import SidebarMenu from "../components/sidebarMenu";
import styled from "styled-components";

const Body = styled.body`
width: 100vw;
height: 100vh;
`;


            export default function HomePage(){
                return (
                    <Body>
                    <SidebarMenu nome="Burguer King"/>

                    </Body>
                );
            }