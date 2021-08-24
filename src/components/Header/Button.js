import styled from 'styled-components';
import {Link} from 'gatsby'

export const ButtonC=styled(Link)`
background:${({primary})=>(primary?'#F26A2E':'#077BF1')};
white-space:nowrap;
 padding: ${({big})=>(big?"16px 40px":"10px 32px")} ;
 color: #fff;
 font-size:${({big})=>(big?"20px ":"16px ")};
 outline:none;
 cursor:pointer;
 text-decoration: none;
 transition: 0.3s !important;
 border-radius: 50px;
 &:hover{
    background:${({primary})=>(primary?'#077BF1':'#F26A2E')};
    padding: ${({big})=>(big?"10px 32px":"16px 40px")} ;
    font-size: ${({big})=>(big?"16px":"20px")};
 }
 `