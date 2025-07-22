import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import BlogPostPage from './BlogPostPage'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-emerald-100">
        <Header className="shadow-lg bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white backdrop-blur-md" />
        <Banner/>
         <div className="max-w-6xl mx-auto px-1 py-0 mt-2 mb-2">
        <BlogPostPage />
      </div>

        <Footer className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white shadow-inner backdrop-blur-md" />
      
    </div>
  )
}

export default Homepage
