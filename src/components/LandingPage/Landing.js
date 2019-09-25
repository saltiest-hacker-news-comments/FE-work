import React from "react"
import { Jumbotron } from "reactstrap"
import { Divider } from "semantic-ui-react"
import { TopUsers } from "./TopUsers"
// import { TopCommentsCard } from "./TopCommentsCard"
import { CommentList } from "./../CommentList"

const Landing = () => {
    return (
        <div>
            <Jumbotron style={{background: '#f97e03', margin: '0'}}>
                <h1 className="jumbo-head">Saltines</h1>
                <h3 className="subhead">A Hacker News Troll Ranker</h3>
            </Jumbotron>
            <Divider section className="section-divider"/>
            <TopUsers />
            <Divider section className="section-divider"/>
            <CommentList />
            

        </div>
        
    )
}


export default Landing 