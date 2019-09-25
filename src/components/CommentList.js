// React Stuff
import React, { useState, useEffect } from 'react';

// Component Imports
import CommentCard from './CommentCard';
import { UsersInfo } from './LandingPage/TopUsers';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from "axios";


export const CommentList = (props) => {
    const [saltyData, setSaltyData] = useState(UsersInfo);
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/comments/topsalt')
            .then(res => {
                console.log("topSalt: ", res);
                setCommentList(res)
            })
            .catch(err => console.log(err))
    }, [])



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


