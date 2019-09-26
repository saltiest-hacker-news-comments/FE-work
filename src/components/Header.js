// React Stuff
import React, { useContext } from 'react';
import { Route, Switch, Link } from "react-router-dom";
// Layout Stuf
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Checkbox, Menu } from 'semantic-ui-react';
// component Stuff
import { useDarkMode } from '../hooks/useDarkMode';
import { UserContext } from '../context/UserContext';
// Nav Change 
// import NavCondition from './Navs/NavCondition';
import LoggedIn from './Navs/LoggedOut';
import LoggedOut from './Navs/LoggedIn';
import NavCondition from './Navs/NavCondition';

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (

        <header className='test' >
            <Row>
                <Col>
                    <Navbar color="light" className="header" light expand="sm">
                        <NavbarBrand tag={Link} to="/">
                            <img className="logo" src="https://trello-attachments.s3.amazonaws.com/5d89a54e06bb0a3a361741e9/975x347/87efc95a769db28dc466ae69284802fd/Salt_full_logo.png" />
                        </NavbarBrand>

                        <NavCondition />

                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className="darkRow">
                        <div className="darkWrap">
                            <p> Salt </p>

                            <div className="ui fitted slider checkbox">
                                <input type="checkbox" readOnly="" tabIndex="0" onClick={toggleDark} class="hidden" className={darkMode ? 'toggle toggled' : 'toggle'} />
                                <label />
                            </div>

                            <p> Pepper </p>
                        </div>
                    </Row>
                </Col>
            </Row>

        </header>
    )
}

export default Header