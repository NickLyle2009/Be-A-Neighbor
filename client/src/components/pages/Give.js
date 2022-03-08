<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap'
import Auth from '../../utils/auth';
import {addPost} from '../../utils/API';
import UploadImg from '../../components/UploadImg';

const Give = () => {
  const [formState, setFormState] = useState({
    image: "",
    postTitle: "",
    postText: "",
    category: "",
    zipcode: '',
  });

  useEffect(() => {
    fetch('/api/posts/')
    .then(res => res.text())
    .then(res => console.log(res));
  }, [])

  const handleChangeTitle = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value)
    setFormState({
      ...formState,
      postTitle: value,
    });
  };

  const handleChangeDesc = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setFormState({
      ...formState,
      postText: value,
    });
  };

  const handleChangeCategory = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setFormState({
      ...formState,
      category: value,
    });
  };

  const handleChangeZip = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setFormState({
      ...formState,
      zipcode: value,
    });
  };

  const postToDb = (e)=>{
    e.preventDefault();
    console.log(formState);
    addPost(formState, Auth.getToken())
  }

  // useEffect(() => {
  //   // e.preventDefault();
  //   try {
  //     const { data } =  addPost(formState);
  //     console.log(data);
  //     Auth.login(data.addPost.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // });

=======
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
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 100) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };
  
>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
  return (
     <div className="container col-md-4">

        <h1 className="mt-4">Make a Donation</h1>
<<<<<<< HEAD
        <UploadImg/>

        <form onSubmit={postToDb} className="mt-3 form-group">
=======

        <form onSubmit={onSubmit} className="mt-3 form-group">

>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
          <div className="mb-3">
          <label className="form-label">
              Title
            </label>
            <input
                  className="form-input"
                  type="title"
                  name="title"
                  onChange={handleChangeTitle}
                  />
            <label className="form-label">
<<<<<<< HEAD
              Description
=======
              Description of Donated Item 
>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
            </label>
            <textarea
              className="form-control"
              name="postText"
              value={postText}
              id=""
              rows="3"
<<<<<<< HEAD
              onChange={handleChangeDesc}
            ></textarea>
            <p>Categories</p>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Clothes" onChange={handleChangeCategory} />
              <Form.Check type="checkbox" label="Furniture" onChange={handleChangeCategory} />
              <Form.Check type="checkbox" label="Toys"  onChange={handleChangeCategory}/>
              </Form.Group>
              <p>Enter Zipcode</p>
                  <input
                  className="form-input"
                  type="zip"
                  name="zip"
                  // value={formState.username}
                  onChange={handleChangeZip}
                  />


=======
              onChange={handleChange}
            ></textarea>
>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>
<<<<<<< HEAD
    </div>     
=======
      </div>
>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
  );
  }

<<<<<<< HEAD
export default Give;
=======
  export default Donate;
>>>>>>> 010ed36dcce36bf51575da668a55aac5f93e0477
