// React Stuff
import React, { useContext } from 'react';
import {  Link } from "react-router-dom";
// Layout Stuf
import { Row, Col, Navbar, NavbarBrand } from "reactstrap";
import {Radio} from "semantic-ui-react";

// component Stuff
import { useDarkMode } from '../hooks/useDarkMode';
// Nav Change 
// import NavCondition from './Navs/NavCondition';
import LoggedIn from './Navs/LoggedOut';
import LoggedOut from './Navs/LoggedIn';
import NavCondition from './Navs/NavCondition';

import { DarkModeSlider } from './DarkModeSlider/DarkModeSlider';


export const RadioExampleToggle = () => <Radio toggle />


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
                    <Navbar className="header" expand="sm">
                        <NavbarBrand tag={Link} to="/">
                            <img className="logo" alt="Saltines logo: A salt shaker tipped on its side." src="https://trello-attachments.s3.amazonaws.com/5d89a54e06bb0a3a361741e9/975x347/87efc95a769db28dc466ae69284802fd/Salt_full_logo.png" />
                        </NavbarBrand>

                        <NavCondition />

                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className="darkRow">
                        <div className="darkWrap">
                            <p id="salt"> Salt </p>

                            <div className="ui fitted toggle checkbox">
                                <input id="radio" type="Radio" readOnly="" tabIndex="0" onClick={toggleDark} class="hidden" className={darkMode ? 'toggle toggled' : 'toggle'} />
                                <label />
                            </div>

                            {/* <DarkModeSlider className={darkMode ? 'toggle toggled' : 'toggle'} /> */}

                            <p> Pepper </p>
                        </div>
                    </Row>
                </Col>
            </Row>

        </header>
    )
}

export default Header