import React from 'react';

export interface Comment {
        id: string,
        content: string
};

function CommentList({ comments }: { comments: Comment[] }) {

    const renderedComments = comments.map(comment => {
        return (
            <li key={comment.id}>{comment.content}</li>
        );
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList;