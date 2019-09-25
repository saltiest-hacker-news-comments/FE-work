import React from "react"
import { Container, Row, Col, Collapse, Navbar, Jumbotron, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { TopUsers } from "./TopUsers"
import { TopCommentsCard } from "./TopCommentsCard"

const Landing = () => {
    return (
        <div>
            <Jumbotron style={{background: '#f97e03', margin: '0'}}>
                <h1 className="jumbo-head">Saltines</h1>
                <h3 className="jumbo-subhead">A Hacker News Troll Ranker</h3>
            </Jumbotron>
            <TopUsers />
            <TopCommentsCard />

        </div>
        
    )
}


export default Landing 