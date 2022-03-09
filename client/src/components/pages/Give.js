import React, {useEffect, useState} from "react";
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';


function Donate() {



  const [postText, setPostText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  
  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {

      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      
      const { me } = cache.readQuery({ query: QUERY_ME });

      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
    });
  },
});

  const onSubmit = async(e) => {
    e.preventDefault()
    console.log('submit works')
    // this is were formData is saved to the DB.
    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText('');
    } catch (err) {
      console.error(err);
    }


  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 100) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };
  
  return (
     <div className="container col-md-4">

        <h1 className="mt-4">Make a Donation</h1>

        <form onSubmit={onSubmit} className="mt-3 form-group">

          <div className="mb-3">
            <label className="form-label">
              Description of Donated Item 
            </label>
            <textarea
              className="form-control"
              name="postText"
              value={postText}
              id=""
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>
      </div>

  );
  }

export default Donate();
