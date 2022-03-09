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

  return (
     <div className="container col-md-4">

        <h1 className="mt-4">Make a Donation</h1>
        <UploadImg/>

        <form onSubmit={postToDb} className="mt-3 form-group">
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
              Description
            </label>
            <textarea
              className="form-control"
              name="postText"
              // value={postText}
              id=""
              rows="3"
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


          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        </form>
    </div>     
  );
  }

export default Give;