import React from 'react';
import { Comment } from 'semantic-ui-react';
import AccountList from './AccountList';

const Account = (props) => {
 return(
  <div className="accountWrapper">
    <div className="divOutsideMap">
     <h1 className="welcomeHeader">Welcome Username</h1>
    <Comment.Group>
       <Comment className="commentComponent">
              <Comment.Content className="accountStyles"> 
                   <Comment.Text> Saved Comments</Comment.Text>
                 </Comment.Content>
                 <Comment.Actions className="accountStylesPart2">
                <Comment.Action className="commentDelete"> Delete </Comment.Action>
                <Comment.Action className="commentEdit"> Edit </Comment.Action>
              </Comment.Actions>    
          </Comment>
      </Comment.Group>   
    </div>     
  </div>    
 );  
};

export default Account;
