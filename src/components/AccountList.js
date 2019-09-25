import React, { useState } from 'react';
import AccountCard from './AccountCard';
// import { UsersInfo } from './LandingPage/TopUsers';


const AccountList = (props) => {
  const [accounts, setAccounts] = useState([]);
  return (
    <div>
      <div>
        <h1>Welcome to your account</h1>
      </div>
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