import React, { useContext, useEffect, useRef, useState } from "react"
import { NavLink as RRNavLink } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Dropdown } from "reactstrap"
import "./Header.css"
import { UserContext } from "../../providers/UserProvider";
import Mail from "../../images/icons/FlyBirdsBox_RoseGold_Icons-mail.png"
import Phone from "../../images/icons/FlyBirdsBox_RoseGold_Icons-phone.png"
import Logo from "../../images/logos/SiteLogoFull.png"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [navBackground, setNavBackground] = useState("header-container-clear")
    const [scroll, setScroll] = useState(1)
    const navRef = useRef()
    const {isLoggedIn, logout} = useContext(UserContext)
    const [contactDropdown, setContactDropdown] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 0
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
                setNavBackground("header-container-clear")
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

    const toggleDropdown = () => {
        setContactDropdown(prevState =>!prevState)
    }
    const onMouseEnter = () => {
        setContactDropdown(true)
      }
    
    const onMouseLeave = () => {
        setContactDropdown(false)
    }
    
      

    return (
        <>
        <div ref={navRef} className={navBackground}
        style={{ transition: '.5s ease' }}>
            <Navbar light expand="md">
                <NavbarBrand className="navbar-style" tag={RRNavLink} to = "/">
                    <img src={Logo} width="auto" height="120vh" />
                </NavbarBrand>
                <NavbarToggler className="app-nav-toggler" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="navbar-style middle" tag={RRNavLink} to = "/homessold">FEATURED HOMES</NavLink>
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
                        <Dropdown nav inNavbar onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} isOpen={contactDropdown} toggle={toggleDropdown}>
                            <DropdownToggle className="navbar-style middle" nav caret>
                                CONTACT ME
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                <img width="40px" height="40px" src={Phone} />(615) 627-6927
                                </DropdownItem>
                                <DropdownItem>
                                <img width="40px" height="40px" src={Mail} />angelatarrancehomes@gmail.com
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        {isLoggedIn 
                        ?
                            <NavItem>
                                <NavLink onClick={logout} className="navbar-style middle" tag={RRNavLink} to = "/">Logout</NavLink>
                            </NavItem>
                        :
                            <NavItem>
                                <NavLink className="navbar-style middle" tag={RRNavLink} to = "/login">Login</NavLink>
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
    )
}