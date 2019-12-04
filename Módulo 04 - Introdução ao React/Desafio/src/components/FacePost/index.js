import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/index';

import { Post } from './style';

export default function FacePost({
  avatar,
  date,
  content,
  authorName,
  comments
}) {
  return (
    <Post>
      <div>
        <img src={avatar} alt="avatar do usuário" />

        <div className="header">
          <div className="teste">
            <span className="header-name">{authorName}</span>
            <span className="date">{date}</span>
          </div>
          <p>{content}</p>
          <hr />
          {comments.map(comment => (
            <Comment
              key={comment.id}
              name={comment.author.name}
              content={comment.content}
              avatar={comment.author.avatar}
            />
          ))}
        </div>
      </div>
    </Post>
  );
}

FacePost.propTypes = {
  authorName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf.isRequired
};
