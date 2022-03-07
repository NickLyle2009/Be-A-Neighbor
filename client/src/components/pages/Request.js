import React, {useEffect, useState} from "react";
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';


function Request() {

  // Gets the form data to save

  const [postText, setPostText] = useState(""); 

  
  // this is were formData is saved to the DB.
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

// update the object's cache
const { me } = cache.readQuery({ query: QUERY_ME });

cache.writeQuery({
  query: QUERY_ME,
  data: { me: { ...me, posts: [...me.posts, addPost] } },
});

},

});

useEffect(()=>{
  // "check if user is signed in, if not send to sign in page.  If user is signed in get user ID"
})

const onSubmit = async(e) => {
  e.preventDefault()

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
};

  return (
     <div className="container col-md-4">

        <h1 className="mt-4">Make a Request</h1>

         <form onSubmit={onSubmit} className="mt-3 form-group"> 

          <div className="mb-3">
            <label className="form-label">
              Description of Requested Item
            </label>
            <textarea
             className="form-control"
              name="postText"
              value={postText}
              id=""
              rows="3"
              ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

         </form> 
      </div>

  );
  }

  export default Request;