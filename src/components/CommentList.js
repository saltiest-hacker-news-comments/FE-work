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
    // console.log("COMMENT LIST: ", setCommentList);


    useEffect(() => {
        axiosWithAuth()
            .get('/comments/topsalt')
            .then(res => {
                console.log("topSalt: ", res);
                setCommentList(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <section className="top-comments">
            <h2 className="subhead">Top Comments</h2>
            <div className="divOutsideMap">
                {commentList.map(data => {
                    return (
                        <div className="divInsideMap"> <CommentCard key={data.id} author={data.author} data={data} comment={data.text} score={data.score} /></div>
                    );
                })}
            </div>
        </section>
    )

};


