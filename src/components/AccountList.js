import React, { useState, useEffect, useContext } from 'react';
import AccountCard from './AccountCard';
import axiosWithAuth from '../utils/axiosWithAuth';
// import { UsersInfo } from './LandingPage/TopUsers';
import { UserContext } from '../context/UserContext';


const AccountList =  ( props ) => {
  const { user } = useContext(UserContext);
  const [favorite, setFavorite] = useState([]);
  // console.log("FAVORITE: ", favorite)
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
               {favorite.map(data =>  <AccountCard data={data} /> )}
            </div>
        </div>
    </div>
  )
}

export default AccountList;