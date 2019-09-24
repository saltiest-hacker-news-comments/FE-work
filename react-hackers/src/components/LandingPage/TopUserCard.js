import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Col, Row} from "reactstrap"


function TopUserCard( props ) {
    return (
        <Card style={{width: `30%`}}>
            <CardImg top width='100%' src={props.portrait} alt='top-user-img' style={{maxHeight: `200px`, objectFit:`cover`}}/>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>Bio: {props.bio}</CardSubtitle>
                <CardText>Comment: {props.comment}</CardText>
            </CardBody>
        </Card>
      
    )
}

export default TopUserCard