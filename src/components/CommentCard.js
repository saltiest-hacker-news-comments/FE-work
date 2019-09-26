import React, {useEffect} from 'react';
import { Comment } from 'semantic-ui-react';
import axiosWithAuth from '../utils/axiosWithAuth';




const CommentCard = (props) => {

  // De-structured Array
  const {id} = props.data;
  // You can use these de-structured arrays to call props 
  // example: you can use author instead of props.author
  const {author, data, comment, score, key, portrait} = props;
  console.log(key); // currently undefined 

  // salt shaker profile picture for user comments vvvv
  const userPortraitSubstitute = 'https://trello-attachments.s3.amazonaws.com/5d8c0d9e9b5de27371d1fc17/111x235/6d67ae9f110b59ad39ea8c38852d3a62/salt_shaker.png'
  
  const saveFavorite = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/comments/newfav', {"comment":  id})
    .then(res => console.log("Saved Res: ", res))
    .catch(err => console.log(err))
  }


  return ( 
    <>
    <Comment.Group >
      <Comment className="commentComponent">
        <Comment.Avatar className="commentIMG" as='a' src={userPortraitSubstitute} alt="salty user" />
        <Comment.Text>
                                  {/*VV Using author instead of props.author  VV*/}
          <Comment.Author className="usernameFontWeight"> {author}</Comment.Author>
          <Comment.Text className="userScore">Score: {score.toFixed(3) * 1000 /* multiply by 1000 because a score of -1.672 isn't quite as cool as -1672 */}</Comment.Text>
          <Comment.Text >
            “ {comment} ”
            </Comment.Text>
          <Comment.Actions>
            {/* <Comment.Action>Reply</Comment.Action> */}
            <Comment.Action className="commentSave" onClick={saveFavorite}>💾</Comment.Action>
            <Comment.Action className="commentUpVote">👍</Comment.Action>
            <Comment.Action className="commentDownVote">👎</Comment.Action>
            {/* <Comment.Action>Hide</Comment.Action> */}
            {/* <Comment.Action>
                <Icon name='expand' />
                Full-screen
              </Comment.Action> */}
          </Comment.Actions>
        </Comment.Text>
      </Comment>
    </Comment.Group>
  </>
  );
};

export default CommentCard;

