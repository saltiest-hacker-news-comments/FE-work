import React from 'react';
import { Comment } from 'semantic-ui-react';


const Account = (props) => {

  // *DELETE:
  //deletes a users fav comment from the fav comments table in the BE DB
  //requires an json object with a key comment and a comment id. ex: { "comment": "1258014"}
  // https://salty-hackers.herokuapp.com/api/comments/deletefav

  
  // const deleteColor = color => {
  //   console.log("delete color: ",color)
  //   axiosWithAuth()
  //   .delete(`/colors/${color.id}`)
  //   .then(window.location.reload(false))
  //   .catch(err => console.log(err))
  //   // make a delete request to delete this color
  // };



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
              <Comment.Action className="comment-delete">Delete</Comment.Action>
              <Comment.Action className="comment-edit">Edit</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default Account;

