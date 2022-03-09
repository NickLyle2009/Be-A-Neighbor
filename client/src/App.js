import React from "react";
import { Routes, Route } from 'react-router-dom';

// import title from './'
import Navigation from './components/Navigation';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Profile from './components/pages/Profile';
import Give from './components/pages/Give';
// import Map from './components/pages/Map';

import Footer from './components/Footer'
import Post from './components/pages/Post';
import PostList from './components/PostList';
import Request from './components/pages/Request';
import RequestList from './components/pages/Request';

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/me' element={<Profile/>}/>
            <Route path='/profiles' element={<Profile/>}/>
            <Route path='/give' element={<Give/>}/>
            {/* <Route path='/request' element={<Request/>}/> */}
            <Route path='/posts' element={<PostList/>}/>
            <Route path='/post' element={<PostList/>}/>
            <Route path='/requests' element={<RequestList/>}/>
            <Route path='/request' element={<Request/>}/>
            <Route path="/login" element={<Login />} />
<<<<<<< HEAD
<<<<<<< HEAD
            </Routes>
=======
<<<<<<< HEAD
=======
>>>>>>> parent of 7ac03e6 (Add styling to post cards)
            {/* <Route path="/login" element={<Charity />} /> */}
=======

            <Route path="/charity" element={<Charity />} />

            

>>>>>>> 073b69a8d7109f56f29c84f78b443afaa9a9bcd7
        </Routes>
      </BrowserRouter>
  
>>>>>>> parent of 7ac03e6 (Add styling to post cards)
    </div>
  );
}

export default App;
