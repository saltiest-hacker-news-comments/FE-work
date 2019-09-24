import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

const CommentCard = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://i.ibb.co/2tPzygj/salty-Hacker-News.png' alt="salty user" />
      <Comment.Content>
        <Comment.Author> Username </Comment.Author>
        <Comment.Text>
          SaLtY cOmMeNtS #sAlTinE 
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
          <Comment.Action>Save</Comment.Action>
          <Comment.Action>Hide</Comment.Action>
          <Comment.Action>
            <Icon name='expand' />
            Full-screen
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentCard;

