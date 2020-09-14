import React, { useState } from "react"
import { NavLink as RRNavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap"
import "./Header.css"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
        <div className="header-container">
            <Navbar dark expand="md">
                <NavbarBrand tag={RRNavLink} to = "/">
                        Angela Tarrance
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={RRNavLink} to = "/homessold">Homes Sold</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to = "/testimonials">Testimonials</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to = "/recognition">Recognition</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to = "/angela">Angela</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to = "/contactme">Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
    )
}