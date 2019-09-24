import React from "react"
import { Container,Card, CardImg, Row, Col, Collapse, Navbar, Jumbotron, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import TopUserCard from "./TopUserCard"

export const UsersInfo = [
    {
        id: 1,
        name: 'Salty Samuel',
        portrait: 'https://i.pinimg.com/originals/5d/f8/d1/5df8d1fc925238142d22c84b7929123b.jpg',
        bio: 'Sponsored by Morton\'s',
        comment: 'No one is saltier than me.',
    },
    {
        id: 2,
        name: `Lasagna Larry`,
        portrait: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg',
        bio: `Delicious italian dish.`,
        comment: 'Lasagna is NOT salty. Ever.'
    },
    {
        id: 3,
        name: 'Pete Zaroll',
        portrait: 'https://66.media.tumblr.com/30eb1987dd415c3305296f8dcb68d9aa/tumblr_ov59u11B4W1ttsiu4o1_400.gif',
        bio: `Totino's Brand Ambassador`,
        comment: `“Let me explain something to you. Um, I am not Mr. Lebowski. You're Mr. Lebowski. I'm the Dude. So that’s what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if you’re not into the whole brevity thing.”`,
    },
    {
        id: 4,
        name: 'Dorito Dan',
        portrait: 'https://www.dollargeneral.com/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/0/0/00028400420716_0.jpg',
        bio: 'Cool Ranch Doritos >>>>',
        comment: `"The Dude abides. I don't know about you, but I take comfort in that, knowin' he’s out there. The Dude. Takin' 'er easy for all us sinners."`
    }

];


export const  TopUsers = () => {
    return (
        UsersInfo.map( user => {
            return ( 
                <TopUserCard
                key={user.id}
                portrait = {user.portrait}
                name={user.name}
                comment={user.comment} />
            )
        })
    )
}