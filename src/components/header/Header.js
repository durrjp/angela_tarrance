import React, { useEffect, useRef, useState } from "react"
import { NavLink as RRNavLink } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap"
import "./Header.css"
import Ashton from "../../images/AshtonRealEstate.jpg"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [navBackground, setNavBackground] = useState("header-container-clear")
    const [navStyle, setNavStyle] = useState("light")
    const [scroll, setScroll] = useState(1)
    const navRef = useRef()
    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 0
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
                setNavBackground("header-container-clear")
                setNavStyle("dark")
            }
            else {
              setNavBackground("header-container-black")
            }
        }
      
        document.addEventListener("scroll", onScroll)
      
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    }, [scroll, setScroll])
    
      

    return (
        <>
        <div ref={navRef} className={navBackground}
        style={{ transition: '.5s ease' }}>
            <Navbar expand="md">
                <NavbarBrand className="navbar-style" tag={RRNavLink} to = "/">
                        ANGELA TARRANCE&nbsp;&nbsp;&nbsp;
                        <img width="50px" src={Ashton} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="navbar-style middle" tag={RRNavLink} to = "/homessold">HOMES SOLD</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbar-style middle" tag={RRNavLink} to = "/testimonials">TESTIMONIALS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbar-style middle" tag={RRNavLink} to = "/recognition">RECOGNITION</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbar-style middle" tag={RRNavLink} to = "/angela">ANGELA</NavLink>
                        </NavItem>
                        <UncontrolledDropdown className="middle" nav inNavbar>
                            <DropdownToggle className="navbar-style" nav caret>
                                CONTACT ME
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                (615) 627-8779
                                </DropdownItem>
                                <DropdownItem>
                                    angelahdurr@aol.com
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
    )
}