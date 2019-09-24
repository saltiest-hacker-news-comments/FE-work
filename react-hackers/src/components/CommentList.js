// React Stuff
import React, { useState } from 'react';

// Component Imports
import CommentCard from './CommentCard';
import { UsersInfo } from './LandingPage/TopUsers';


export const CommentList = (props) => {
    const [saltyData, setSaltyData] = useState(UsersInfo);

    // INFO COMING IN FROM AXIOS CALL
    return (
        <div>
            {saltyData.map(data => {
                return (
                    <CommentCard data={data} />
                );
            })}
        </div>
    )

};


