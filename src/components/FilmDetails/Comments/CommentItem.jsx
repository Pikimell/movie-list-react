import React from 'react';

const CommentItem = ({comment}) => {
    return (
        <div>
            <h1>{comment.author}</h1>
            <p>{comment.content}</p>
            <p>{comment.created_at}</p>
        </div>
    );
};

export default CommentItem;