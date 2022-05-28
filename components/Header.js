import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Collapse,

  Navbar,

  NavbarToggler,

  NavbarBrand,

  Nav,

  NavItem,

  NavLink,
  
  Button

} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <div>
      <Navbar 
      style={{paddingTop:"1.6rem", backgroundColor:"#01202b",fontColor:"black" }}
        color="dark"
        dark
        expand="md"
        fixed="top"
      >
        <NavbarBrand className='sm md lg xl xxl mx-auto' href="#" 
        style={{ paddingLeft: "4rem", paddingBottom: ".5rem", paddingTop: ".5rem", fontFamily: "serif", fontWeight: "600", fontSize: "27px" }}
        >
          Cloudxcel
          &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" fill="skyblue" className="bi bi-cloud-fog2-fill" style={{marginBottom:".2rem"}} viewBox="0 0 16 16">
        <path d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"/>
        </svg>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav 
          style={{ fontFamily: "serif",paddingBottom:".5rem" , paddingLeft: "9rem", fontSize: "22px",fontWeight:"500" }}
            className=" me-auto"
            navbar
          >
            <NavItem >
              <NavLink href="#landing">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#services">
               Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#testimonials">
                Testimonials
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#team">
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">
                Contact
              </NavLink>
            </NavItem>
            <Button className='border border-3' 
            style={{marginLeft:".2rem",marginRight: "8rem",paddingInline: "1.3rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",marginBottom:".4rem",marginTop:".4rem"}}
            active
            color="danger"
            size="sm"
          >
            Log in &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" 
            style={{marginBottom:".1rem"}} 
            className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
          </Button>  
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;