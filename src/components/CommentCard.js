import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

const CommentCard = (props) => (
  
    <Comment.Group >
      <Comment className="commentComponent">
        <Comment.Avatar className="commentIMG" as='a' src={props.data.portrait} alt="salty user" />
        <Comment.Content>
          <Comment.Author className="usernameFontWeight"> {props.data.name} </Comment.Author>
          <Comment.Text >
          “ {props.data.comment} ”
          </Comment.Text>
          <Comment.Actions>
            {/* <Comment.Action>Reply</Comment.Action> */}
            <Comment.Action className="commentSave">💾</Comment.Action>
            <Comment.Action className="commentUpVote">👍</Comment.Action>
            <Comment.Action className="commentDownVote">👎</Comment.Action>
            {/* <Comment.Action>Hide</Comment.Action> */}
            {/* <Comment.Action>
              <Icon name='expand' />
              Full-screen
            </Comment.Action> */}
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    </Comment.Group>
 
)

export default CommentCard;

