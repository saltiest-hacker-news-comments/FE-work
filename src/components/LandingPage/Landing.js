import React from "react"
import { Jumbotron } from "reactstrap"
import { Divider } from "semantic-ui-react"
import { TopUsers } from "./TopUsers"
// import { TopCommentsCard } from "./TopCommentsCard"
import { CommentList } from "./../CommentList"

const Landing = () => {
    return (
        <div className="landingPage">
            <Jumbotron className="landingHeader" style={{ background: '#f97e03', margin: '0' }}>
                <img className="splash" src="https://trello-attachments.s3.amazonaws.com/5d8d4f4e8545a25e7b3e1dfd/932x511/3192b9f59741391d23d2fc1e1896def3/Full_Saltines_Splash.png" />
                {/* <h1 className="jumbo-head">Saltines</h1>
                <h3 className="subhead">A Hacker News Troll Ranker</h3> */}
            </Jumbotron>
            <Divider section className="section-divider" />
            <TopUsers />
            <Divider section className="section-divider" />
            <CommentList />


        </div>

    )
}


export default Landing 