import React, { useState } from 'react';
import AccountCard from './AccountCard';
import { UsersInfo } from './LandingPage/TopUsers';


const AccountList = (props) => {
  const [accounts, setAccounts] = useState([UsersInfo]);
    
//   return (
//   <div className="divOutsideMap">Test1
//    <div className="divInsideMap">Test2</div>   
//     </div>
// );

  return (
    <div className="divOutsideMap">
        {accounts.map(data => {
            return (
               <div className="divInsideMap"></div>
            );
        })}
    </div>
)
}

export default AccountList;