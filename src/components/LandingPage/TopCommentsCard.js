import React from "react"
import { Card, GridColumn } from "semantic-ui-react";



export function TopCommentsCard( props ) {
    return (
        <Card.Group>
            <Card fluid color='red' header='Option 1' />
            <Card fluid color='orange' header='Option 2' />
            <Card fluid color='yellow' header='Option 3' />
         </Card.Group>
    )
}




// const Comments = [
//     {
//         id: 1,
//         comment: 'Comment 1',
//     },
//     {
//         id: 2,
//         comment: 'Comment 2',
//     },
//     {
//         id: 3,
//         comment: 'Comment 3',
//     },
//     {
//         id: 4,
//         comment: 'Comment 4',
//     },
// ]