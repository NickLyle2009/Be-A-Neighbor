import React, {useEffect, useState} from "react";
import { Form } from 'react-bootstrap'
import Auth from '../../utils/auth';
import UploadImg from '../../components/UploadImg'

function Give() {
  // const [postText, setPostText] = useState("");
  // const [characterCount, setCharacterCount] = useState(0);

  // const onSubmit = async(e) => {
  //   e.preventDefault()

  

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'postText' && value.length <= 100) {
  //     setPostText(value);
  //     setCharacterCount(value.length);
  //   }
  // };
  
  return (
     <div className="container col-md-4">

        <h1 className="mt-4">Make a Donation</h1>

        <UploadImg/>

        {/* <form onSubmit={onSubmit} className="mt-3 form-group"> */}

         
          
          <div className="mb-3">
            <label className="form-label">
              Description the Gived Item 
            </label>
            <textarea
              className="form-control"
              name="postText"
              // value={postText}
              id=""
              rows="3"
              // onChange={handleChange}
            ></textarea>
            <p>Categories</p>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Clothes" />
              <Form.Check type="checkbox" label="Furniture" />
              <Form.Check type="checkbox" label="Toys" />
              </Form.Group>
              <p>Enter Zipcode</p>
                  <input
                  className="form-input"
                  name="zip"
                  type="text"
                  // value={formState.username}
                  // onChange={handleChange}
                  />


          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

        {/* </form> */}
    </div>     
  );
  
}

  export default Give;
