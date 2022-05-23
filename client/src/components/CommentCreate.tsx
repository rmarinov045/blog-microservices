import React, { SyntheticEvent, useState } from 'react';
import axios from 'axios';

function CommentCreate({ postId }: { [postId: string]: string }) {

    const [content, setContent] = useState('');

    const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        });

        setContent('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">New comment:</label>
                    <input onChange={e => setContent(e.target.value)} value={content} type="text" name="comment" id="comment" className='form-control' />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default CommentCreate