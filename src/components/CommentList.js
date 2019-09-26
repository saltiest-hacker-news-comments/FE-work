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
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    console.log("COMMENT LIST: ", commentList);

    const handleChange = event => {
        // console.log("SEARCH: ", event.target.value)
        setSearchTerm(event.target.value)
        console.log("SEARCH TERM: ", searchTerm)
    }

    useEffect(() => {
        axiosWithAuth()
            .get('/comments/topsalt')
            .then(res => {
                console.log("topSalt: ", res);
                setCommentList(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const results = commentList.filter(comment => {
            commentList.toLowerCase().includes(searchTerm)
        }
        )
        console.log("RESULTS ", results)
        setSearchResults(results);

    }, [])


    return (
        <section className="top-comments">
            <h2 className="subhead">Top Comments</h2>
            <form>
                <label>
                    <input
                        id="name"
                        type="text"
                        name="textfield"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <div className="divOutsideMap">
                {searchResults.map(data => {
                    return (
                        <div className="divInsideMap"> <CommentCard key={data.id} author={data.author} data={data} comment={data.text} score={data.score} /></div>
                    );
                })}
            </div>
        </section>
    )

};


