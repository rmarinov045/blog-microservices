import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'

function PostCreate() {

  const [title, setTitle] = useState('');

  const handleSubmit = async (e :SyntheticEvent) => {
    e.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title
    });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="post">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className='form-control' type="text" name="post" id="post" />
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate