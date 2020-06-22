import React from 'react';
import PropTypes from 'prop-types';

import { Comments } from './style';

export default function Comment({ name, content, avatar }) {
  return (
    <Comments>
      <div>
        <div className="img-avatar">
          <img src={avatar} alt="Avatar do usuário do comentário" />
        </div>

        <div className="comment">
          <p>
            <span>{name}</span>
            {content}
          </p>
        </div>
      </div>
    </Comments>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};
