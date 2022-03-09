import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import title from './'
import Navigation from './components/Navigation';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/Signup';
import Profile from './components/pages/Profile';
import Give from './components/pages/Give';
// import Map from './components/pages/Map';
import Charity from './components/pages/Charities'
import Footer from './components/Footer'
import Post from './components/pages/Post';
import PostList from './components/PostList';
import Request from './components/pages/Request';

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/me' element={<Profile/>}/>
            <Route path='/profiles' element={<Profile/>}/>
            <Route path='/give' element={<Give/>}/>
            {/* <Route path='/request' element={<Request/>}/> */}
            <Route path='/posts' element={<Post/>}/>
            <Route path="/login" element={<Login />} />

            <Route path="/charity" element={<Charity />} />

            

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;

