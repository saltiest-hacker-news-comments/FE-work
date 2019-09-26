import React from 'react';
import { Comment } from 'semantic-ui-react';

import axiosWithAuth from '../utils/axiosWithAuthTwo';
import axios from 'axios'


const Account = (props) => {
  console.log("ACCOUNT CARD PROPS: " , props.data)

  const {author, id, data, text, score, key, portrait} = props.data;  
  console.log("THIS IS ID: ", id)
  
  const deleteFavorite = e => {
    e.preventDefault();
    console.log({'"comment"':`${id}`})
    axiosWithAuth()
    // axios
    .delete('https://salty-hackers.herokuapp.com/api/comments/deletefav', {"comment": `${id}`})
    .then(res => console.log("Saved Res: ", res))
    .catch(err => console.log(err))
  }
  const userPortraitSubstitute = 'https://trello-attachments.s3.amazonaws.com/5d8c0d9e9b5de27371d1fc17/111x235/6d67ae9f110b59ad39ea8c38852d3a62/salt_shaker.png'


  return ( 
    <>
      <Comment className="commentComponent">
        <Comment.Avatar className="commentIMG" as='a' src={userPortraitSubstitute} alt="salty user" />
        <Comment.Content>
                                  {/*VV Using author instead of props.author  VV*/}
          <Comment.Author className="usernameFontWeight">{author}</Comment.Author>
          <Comment.Text className="userScore">Score: {score.toFixed(3) * 1000 /* multiply by 1000 because a score of -1.672 isn't quite as cool as -1672 */}</Comment.Text>
          <Comment.Text >“ {text} ”</Comment.Text>
          <Comment.Actions>
            {/* <Comment.Action>Reply</Comment.Action> */}
            <Comment.Action className="commentSave" onClick={deleteFavorite}>Delete</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
  </>
  );
};

export default Account;

