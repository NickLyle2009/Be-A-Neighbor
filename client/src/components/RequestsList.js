import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

import { getPost } from '../utils/auth'

// const PostList = ({
//   thoughts,
//   title,
//   showTitle = true,
//   showUsername = true,
// }) => {
//   if (!thoughts.length) {
//     return <h3>No Thoughts Yet</h3>;
//   }
const PostList = () => {
  return (
    <div>
      <Container>
        <div className='card-wrapper'>
          <Card style={{ width: '36rem' }} className="post-card">
          <Card.Img variant="top" src="https://s3-media0.fl.yelpcdn.com/bphoto/18F75E0fcKjdjLLn-338AA/ls.jpg" />
          <Card.Body>
            <Card.Title>Couch</Card.Title>
            <Card.Text>Posted by:{}</Card.Text>
            <Card.Text>
              {/* {post.createdAt} */}
              </Card.Text>
            <a className="btn btn-primary btn-block btn-squared"to={`/posts/`}>Visit Post</a>
              {/* ${post._id} */}
          </Card.Body>
      </Card>
      </div>
      
        {/* <>Posts go here</>
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this post on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              Join the discussion on this post.
            </Link>
          </div>
        ))}
    </div> */}
        </Container>
    </div>
  );
  }

export default PostList;
