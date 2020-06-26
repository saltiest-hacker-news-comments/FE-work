import React, { useContext, useEffect, useState } from 'react';
import { Comment } from 'semantic-ui-react';
// import { UsersInfo } from './LandingPage/TopUsers'; 
import { UserContext } from '../context/UserContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import AccountCard from './AccountCard';



const AccountList =  ( props ) => {
  const { user } = useContext(UserContext);
  const [favorite, setFavorite] = useState([]);
  console.log("FAVORITE", favorite)
  // console.log("USER: ", user.token) // returns empty array currently?

  useEffect(() => {
        axiosWithAuth()
          .get(`/comments/allfavsalt`) // {user} should probably be user.id or something
          .then(response => {
            // console.log('RESPONSE: ', response)
            setFavorite(response.data) // set to data from response, currently empty array? maybe user.id when it's not empty
          })
          .catch(error => {
            console.log('ERROR: ', error)
          })
    }, [])


  return (
    <div>
      <h1>{user.message}</h1>
        <div className="divOutsideMap">
            <h3>Your Saved Comments</h3>
            <div className="divInsideMap">
              <Comment.Group>
               {favorite.map(data =>  <AccountCard data={data} /> )}
              </Comment.Group>
            </div>
        </div>
    </div>
  )
}

export default AccountList;