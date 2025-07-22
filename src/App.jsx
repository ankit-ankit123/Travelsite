import { useState } from 'react'
import Detailpage from './pages/Detailpage'
import BlogPost from './pages/BlogPost'
import Hotellist from './pages/Hotellist'
import Homepage from './pages/Homepage'
import About from './pages/About'
import BlogPostPage from './pages/BlogPostPage'
import { Routes,Route } from 'react-router-dom'
import Wishlist from './pages/Wishlist'

import './styles/App.css'


function App() {

  return (
        // <Header/> 
        // <Hotellist/>
    //<Detailpage/>
    //  <BlogPost/>
  //  <Homepage/>

    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotel" element={< Hotellist/>} />
        <Route path="/blogpost" element={<BlogPost />}/>
        <Route path="/blog" element={<BlogPostPage />}/>
        <Route path="/detail" element={< Detailpage/>}/>
         <Route path="/about" element={< About/>}/>
         <Route path="/wishlist" element={< Wishlist/>}/>
      </Routes>
    
    
    
  )
}

export default App
