// React Stuff
import React, { useState } from 'react';

// Component Imports
import CommentCard from './CommentCard';
import { UsersInfo } from './LandingPage/TopUsers';


export const CommentList = (props) => {
    const [saltyData, setSaltyData] = useState(UsersInfo);

    // INFO COMING IN FROM AXIOS CALL
    return (
        <section className="top-comments">
            <h2 className="subhead">Top Comments</h2>
                <div className="divOutsideMap">
                    {saltyData.map(data => {
                        return (
                        <div className="divInsideMap"> <CommentCard data={data} /></div>
                        );
                    })}
                </div>
        </section>
    )

};


