import React, {useEffect} from "react"
import TopUserCard from "./TopUserCard"
import { Card, GridColumn } from "semantic-ui-react";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const UsersInfo = [
    {
        id: 1,
        name: 'Salty Sammy',
        portrait: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        bio: 'Sponsored by Morton\'s',
        comment: 'No one is saltier than me.',
    },
    {
        id: 2,
        name: `Lasagna Larry`,
        portrait: 'https://semantic-ui.com/images/avatar2/large/molly.png',
        bio: `Delicious italian dish.`,
        comment: 'Lasagna is NOT salty. Ever.'
    },
    {
        id: 3,
        name: 'Pete Zaroll',
        portrait: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        bio: `Totino's Brand Ambassador`,
        comment: `I'm the Dude. So that’s what you call me.`,
    },
    {
        id: 4,
        name: 'Dorito Dan',
        portrait: 'https://semantic-ui.com/images/avatar/large/elliot.jpg',
        bio: 'Cool Ranch Doritos >>>>',
        comment: `The Dude abides. I don't know about you, but I take comfort in that...`
    },

];


export const TopUsers = () => {

    useEffect(() => {
        axiosWithAuth()
        .get('/comments/salt')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    });
    
    // useState here
    // axios here

    return (
        <section className="top-users">
            <h2 className="top-users-head">Saltiest Users</h2>
                <Card.Group style={{margin: '0 auto'}}>
                    {UsersInfo.map( user => {
                        return (
                            <TopUserCard
                                key={user.id}
                                portrait = {user.portrait}
                                name={user.name}
                                bio={user.bio}
                                comment={user.comment} />
                        )
                    })}
                </Card.Group>
        </section>
    )
}