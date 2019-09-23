import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"

const Header = () => {
    return (
        <header>
           <Navbar color="light">
               <NavItem>

                <NavLink to="/signup">Sign Up</NavLink>                <NavLink to="/" >Home</NavLink>    
               </NavItem>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/account">Account</NavLink>
            </Navbar> 
        </header>
    )
}

export default Header