import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"

const Header = () => {
    const handleClick = event => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <header>
            
                <Row>
                    <Col>
                        <Navbar color="light" light expand="sm">
                            <NavbarBrand tag={Link} to="/">
                                <img className="logo" src="https://trello-attachments.s3.amazonaws.com/5d89a54e06bb0a3a361741e9/975x347/87efc95a769db28dc466ae69284802fd/Salt_full_logo.png" />
                            </NavbarBrand>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/" activeClassName="active" active={window.location === '/'}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/commentList" activeClassName="active" active={window.loaction === '/'}> List</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/about" activeClassName="active" active={window.location === '/about'}>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signup" activeClassName="active" active={window.location === '/signup'}>Sign Up</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/account" activeClassName="active" active={window.location === '/account'}>Account</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            
        </header>
    )
}

export default Header