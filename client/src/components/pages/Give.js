import React, {useEffect, useState} from "react";



function Request() {

  // Gets the form data to save

  const [formData, setFormData] = useState({ 
    donateted_item: "", 
    donated_description: "",
  })

  const { donated_item, donated_description } = formData

  useEffect(()=>{
    // "check if user is signed in, if not send to sign in page.  If user is signed in get user ID"
  })

  const onSubmit = async(e) => {
    e.preventDefault()

    // this is were formData is saved to the DB.
  }

  return (
     <div className="container col-md-4">

        <h1 className="mt-4">Make a Donation</h1>

        <form onSubmit={onSubmit} className="mt-3 form-group">

          <div class="mb-3">
            <label className="form-label">
              Donated Item
            </label>
            <input
              type="text"
              name="donated_item"
              className ="form-control"
              id=""
              aria-describedby="donated_item"/>
          </div>
          
          <div class="mb-3">
            <label class="form-label">
              Provide a Description
            </label>
            <textarea
              class="form-control"
              name="request_description"
              id=""
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>

        </form>
      </div>

  );
  }

  export default Request;
