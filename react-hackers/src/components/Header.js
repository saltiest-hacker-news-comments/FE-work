import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

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
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">Salty Hackers</NavbarBrand>
                                <Nav className="ml-auto" navbar>
                                    <NavItem><NavLink tag={Link} to="/">Home</NavLink></NavItem>
                                    <NavItem><NavLink tag={Link} to="/about">About</NavLink></NavItem>
                                    <NavItem><NavLink tag={Link} to="/signup">Sign Up</NavLink></NavItem>
                                    <NavItem><NavLink tag={Link} to="/account">Account</NavLink></NavItem>
                                </Nav>
                        </Navbar> 
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header