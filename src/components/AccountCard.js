import React from 'react';
import { Comment } from 'semantic-ui-react';


const Account = (props) => {
  return (
    <div className="accountWrapper">
      <Comment.Group>
        <Comment className="commentComponent">
          <Comment.Avatar className="commentIMG" as='a' src='https://semantic-ui.com/images/avatar2/large/molly.png' alt="salty user" />
          <Comment.Content>
            <Comment.Author className="usernameFontWeight"> Salty Molly </Comment.Author>
            <Comment.Text >
              No one is saltier than me.
                </Comment.Text>
            <Comment.Actions>
              <Comment.Action className="comment-delete">❌</Comment.Action>
              <Comment.Action className="comment-edit">⚙️</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default Account;

