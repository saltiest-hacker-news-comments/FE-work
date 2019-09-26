import React, { useState, useEffect, useContext } from 'react';
import AccountCard from './AccountCard';
import axiosWithAuth from '../utils/axiosWithAuth';
// import { UsersInfo } from './LandingPage/TopUsers';
import { UserContext } from '../context/UserContext';


const AccountList = (props) => {
  const { user } = useContext(UserContext);

  const [favorite, setFavorite] = useState([]);

  return (
    <div>
        <h1>{user}</h1>
      <div className="divOutsideMap">
          <h3>Your Saved Comments</h3>
          <div className="divInsideMap">
            <AccountCard />
          </div>
          {/* {accounts.map(data => {
                return (
                  <div className="divInsideMap">   
                  </div>
                );
            })} */}
      </div>
    </div>
  )
}

export default AccountList;