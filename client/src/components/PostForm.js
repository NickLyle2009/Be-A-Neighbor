import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Container } from 'react-bootstrap';

import { getPosts } from '../utils/API';

import Auth from '../utils/auth';

const PostForm = () => {
  const [postText, setPostText] = useState('');

  // add post
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

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  const [addPost, { error }] = useMutation(ADD_POST);


  const handleFormSubmit = async (event) => {
    event.preventDefault();

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

  return (
      <Container>
    <div>
      <h3>Make a post</h3>
        <>
          <p
            className={`m-0 ${
              characterCount === 100 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/100
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="postText"
                placeholder="Here's a new post..."
                value={postText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
        </div>
        </Container>
  );
};

export default PostForm;
