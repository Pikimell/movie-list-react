import React from 'react';
import CommentItem from "./CommentItem";

const ListComments = ({comments}) => {
    return (
        <div>
            {comments.map(comment => {
                return <CommentItem comment={comment}/>
            })}
        </div>
    );
};

export default ListComments;