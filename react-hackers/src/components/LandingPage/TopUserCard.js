import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'


function TopUserCard( props ) {
    // console.log("PROPS: ", props);
    return (
        <Card style={{margin: 'auto'}}>
            <Image src={props.portrait} alt='top-user-img' wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.bio}</Card.Meta>
                <Card.Description>Comment: "{props.comment}"</Card.Description>
            </Card.Content>
        </Card>   
    )
}

export default TopUserCard