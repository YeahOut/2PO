import styled from "styled-components";

export const Root = styled.div`
width:100%;
height: 2200px;
`;

export const Content = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1280px;
  height: 100%;
  object-fit: cover;
  align-items: center;
justify-content: center;
`;

export const Div1 = styled.div`
position: relative;
background-color: #fff;
width: 100%;
min-height: 2000px; 
max-width: 1280px; 
margin: 0 auto; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;