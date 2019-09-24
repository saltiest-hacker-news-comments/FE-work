import React from "react"
import { Container, Row, Col, Collapse, Navbar, Jumbotron, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { TopUsers } from "./TopUsers"

const Landing = () => {
    return (
        <div>
            <Jumbotron style={{background: '#f97e03'}}>
                <h1 className="jumbo-head">Saltines</h1>
                <h2 className="jumbo-subhead">A Hacker News Troll Ranker</h2>
            </Jumbotron>
            <TopUsers />

        </div>
        
    )
}


export default Landing 