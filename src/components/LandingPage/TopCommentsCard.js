import React from "react"
import { Card, GridColumn, CardDescription } from "semantic-ui-react";



export function TopCommentsCard( props ) {
    return (
        <Card.Group>
            <Card fluid color='red' header='Option 1' description={`"${props.comment}"`}/>
         </Card.Group>
    )
}