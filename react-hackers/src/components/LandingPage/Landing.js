import React from "react"
import { Container, Row, Col, Collapse, Navbar, Jumbotron, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"


const Landing = () => {
    return (
        <Jumbotron style={{background: '#f97e03'}}>
            <h1 className="jumbo-head">Saltines</h1>
            <h2 className="jumbo-subhead">A Hacker News Troll Ranker</h2>
        </Jumbotron>
    )
}


export default Landing 