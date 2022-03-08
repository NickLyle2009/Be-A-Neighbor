import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
//   if (!posts.length) {
//     return <h3>No Posts Yet</h3>;
//   }

  return (
    <div>
      <Container>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://s3-media0.fl.yelpcdn.com/bphoto/18F75E0fcKjdjLLn-338AA/ls.jpg" />
          <Card.Body>
            <Card.Title>Couch</Card.Title>

          <Button >Visit Post</Button>
          </Card.Body>
      </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://s3-media0.fl.yelpcdn.com/bphoto/18F75E0fcKjdjLLn-338AA/ls.jpg" />
          <Card.Body>
            <Card.Title>Couch</Card.Title>

          <Button >Visit Post</Button>
          </Card.Body>
      </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://s3-media0.fl.yelpcdn.com/bphoto/18F75E0fcKjdjLLn-338AA/ls.jpg" />
          <Card.Body>
            <Card.Title>Couch</Card.Title>

          <Button >Visit Post</Button>
          </Card.Body>
      </Card>
      
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
};

export default PostList;
