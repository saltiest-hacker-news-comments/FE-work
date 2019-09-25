// React Stuff
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
// Layout Stuff
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Checkbox } from 'semantic-ui-react';
// component Stuff
import { useDarkMode } from '../hooks/useDarkMode';
import { DarkModeSlider } from './DarkModeSlider/DarkModeSlider.js';


const Header = () => {



    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleDark = e => {
        console.log("CLICKED DARK");
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/';
    }



    // const handleClick = event => {
    //     event.preventDefault();
    //     console.log(event);
    // }

    return (
        <header  >

            <Row>
                <Col>
                    <Navbar color="light" className="header" light expand="sm">
                        <NavbarBrand tag={Link} to="/">
                            <img className="logo" src="https://trello-attachments.s3.amazonaws.com/5d89a54e06bb0a3a361741e9/975x347/87efc95a769db28dc466ae69284802fd/Salt_full_logo.png" />
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/" activeClassName="active" active={window.location === '/'}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/commentList" activeClassName="active" active={window.location === '/commentList'}> List</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about" activeClassName="active" active={window.location === '/about'}>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/account" activeClassName="active" active={window.location === '/account'}>Account</NavLink>
                            </NavItem>
                            {status ?                           
                            <NavItem>
                                <NavLink tag={Link} to="/signup" activeClassName="active" active={window.location === '/signup'}>Sign Up</NavLink>
                            </NavItem> :

                            <button onClick={logOut} > Logout </button>
                            }
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="ui fitted slider checkbox">
                        <input type="checkbox" readOnly="" tabIndex="0" onClick={toggleDark} class="hidden" className={darkMode ? 'toggle toggled' : 'toggle'} />
                        <label />
                    </div>
                </Col>
            </Row>

        </header>
    )
}

export default Header