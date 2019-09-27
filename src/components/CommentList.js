// React Stuff
import React, { useState, useEffect } from 'react';

// Component Imports
import CommentCard from './CommentCard';
import { UsersInfo } from './LandingPage/TopUsers';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from "axios";


export const CommentList = () => {
    const [commentList, setCommentList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    // console.log("COMMENT LIST: ", commentList);

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    // List automatically renders and places data into commentList
    useEffect(() => {
        axiosWithAuth()
            .get('/comments/topsalt')
            .then(res => setCommentList(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log("commentList?: ", commentList)



    // Notes for self
    // Comment List is rendered on load
    // Search bar compares searchterm to comment List and returns searchResults
    // The Card making map needs to take in the if/else of the comment list & 

    // filter search results for mapping below
    useEffect(() => {
        const results = commentList.filter(comment => comment.author.toLowerCase().includes(searchTerm));
        setSearchResults(results)
    }, [searchTerm])

    const showMe = () => {
        return searchTerm === "" ? commentList : searchResults;
    }


    return (
        <section className="top-comments">
            <h2 className="subhead">Top Comments</h2>
            <form>
                <label>
                    <input
                        id="name"
                        type="text"
                        name="textfield"
                        placeholder="Search By Author..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <div className="divOutsideMap">
                {
                    showMe().map(data => {
                        return (
                            <div className="divInsideMap"> <CommentCard key={data.id} author={data.author} comment={data.text} score={data.score} data={data} /></div>
                        );
                    })
                }
            </div>
        </section>
    )
}    