import axios from 'axios';
import React, { useEffect, useState } from 'react';

export interface Comment {
        id: string,
        content: string
};

function CommentList({ postId }: { [postId: string]: string }) {

    const [comments, setComments] = useState<Comment[] | []>([]);

    const fetchComments = async () :Promise<void> => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(response.data);
    }

    useEffect(() => {
        fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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