// React Stuff
import React from 'react';
import { Link } from "react-router-dom";
// Layout Stuf
import { Nav, NavLink, NavItem } from "reactstrap";

const LoggedIn = () => {

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/" activeClassName="active" active={window.location === '/'}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/commentList" active={window.location === '/commentList'}> List</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/about" active={window.location === '/about'}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/account" active={window.location === '/account'}>Account</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={logOut} className="lg-out"> Logout </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default LoggedIn;