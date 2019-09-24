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
            <Container>
                <Row>
                    <Col>
                        <Navbar color="light" light expand="sm">
                            <NavbarBrand href="/">Salty Hackers</NavbarBrand>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/" activeClassName="active">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/about" activeClassName="active">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signup" activeClassName="active">Sign Up</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/account" activeClassName="active">Account</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header