export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const addPost = (postData, token) => {
    console.log(postData);
    console.log(token);
    fetch('/api/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
  };
  
  // Get posts
  export const getPosts = (postData) => {
    return fetch('/api/posts/', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData),
    });
  };
  
  export const deletePost = (postId, token) => {
    return fetch(`/api/users/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
//   How to add a reply?
  export const addReply = (postId, token) => {
    return fetch(`/api/users/${postId}/`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
      },
    //   body: JSON.stringify(postData),
    });
  };


  