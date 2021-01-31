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
        <div className="header">
          <img src={avatar} alt="avatar do usuário" />
          <div className="header-name-date">
            <span className="header-name">{authorName}</span>
            <span className="date">{date}</span>
          </div>
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
