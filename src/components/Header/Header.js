import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {FaBars} from 'react-icons/fa'
import { MenuData } from './MenuData'
import { ButtonC } from './Button'
const Header = () => {
    return (
       <Nav>
           <NavLink to="/asas">TRAVELX</NavLink>      
            <Bars/>
            <NavMenu>
            {MenuData.map((item,index)=>(
               
               <NavLink to={item.link} key={index}>{item.title}</NavLink>

            ))}
             <NavButton>
                <ButtonC>Book Flights& hotels</ButtonC>
                </NavButton>
            </NavMenu>
           
       </Nav>
    )
}

export default Header

const Nav=styled.nav`
background:red;
height:90px;
display:flex;
justify-content:space-between;
padding:0.5rem calc((100w - 1300px)/2);
z-index:100;
position:relative`;

/* const NavLink=styled(Link)`
color:#fff;
display:flex;
text-decoration:None;
align-items:center;
padding:0 1rem;
height:100%;    
cursor:pointer`; */

const NavLink= styled(Link)`
color:#fff;
display:flex;
text-decoration: none;
align-items: center;
height: 100%;
cursor: pointer;
padding: 1rem;
font-size: 20px;
`
const Bars=styled(FaBars)`
display:none;
color:#fff;
@media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform:translate(-150%,75%);
    font-size: 2rem;
    cursor: pointer;
}`


const NavMenu=styled.div`
display: flex;
margin-right:20px;
align-items:center;
@media only screen and (max-width: 768px) {
    display: none;

}`


const NavButton=styled.div`
    display: flex;
    align-items:center;
    margin-right:24px;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`