import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from "./components/Signup";
import React from "react";
import Header from "./components/Header";





function App() {
  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>
      {/* <Charities /> */}
      {/* <Review />  */}
      
    </div>
  );
}

export default App;
