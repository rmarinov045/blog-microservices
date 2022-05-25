import React from 'react';

export interface Comment {
    id: string,
    content: string,
    status: 'approved' | 'pending' | 'rejected',
};

function CommentList({ comments }: { comments: Comment[] }) {

    const renderedComments = comments.map(comment => {
        let content: string = comment.content;

        if (comment.status === 'pending') content = 'This comment is awaiting moderation';
        if (comment.status === 'rejected') content = 'This comment has been rejected';

        return (
            <li key={comment.id}>{content}</li>
        );
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}

export default CommentList;