// React Stuff
import React, { useContext } from 'react';
import { Route, Switch, Link } from "react-router-dom";
// Layout Stuf
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


const LoggedOut = () => {

    return (
        <>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/" activeClassName="active" active={window.location === '/'}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/about" activeClassName="active" active={window.location === '/about'}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/login" activeClassName="active" active={window.location === '/login'}>Sign in</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/signup" activeClassName="active" className="loginNav" active={window.location === '/signup'}  >Sign Up</NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default LoggedOut;