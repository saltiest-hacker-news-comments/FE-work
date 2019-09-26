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
                    <NavLink tag={Link} to="/commentList" activeClassName="active" active={window.location === '/commentList'}> List</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/about" activeClassName="active" active={window.location === '/about'}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/account" activeClassName="active" active={window.location === '/account'}>Account</NavLink>
                </NavItem>
                <button onClick={logOut} > Logout </button>
            </Nav>
        </>
    )
}

export default LoggedIn;