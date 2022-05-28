import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import { Comment } from './CommentList';

export interface PostsList {
    [id: string]: {
        id: string,
        title: string,
        comments: Comment[] | [],
    }
}

function PostList() {

    const [posts, setPosts] = useState<PostsList | {}>({});

    const fetchPosts = async (): Promise<void> => {
        const response = await axios.get('http://posts.com/posts');
        setPosts(response.data)
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" key={post.id} style={{ width: '30%', marginBottom: '20px' }}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    })

    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    );
};

export default PostList