import React, { Component } from "react";

class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
            <img src={this.state.image} />
            <p>Select Image</p>
            <input type="file" name="myImage" onChange={this.onImageChange} />
      </div>
    );
  }
}
export default UploadImg;