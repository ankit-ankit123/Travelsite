import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
  const blogIds = [
    '3213900', '2399953', '8070105920543249955', '4967929378133675647',
    '3213900', '2399953', '8070105920543249955', '4967929378133675647'   
  ]; // ✅ 8 unique blog IDs

  const [blogsData, setBlogsData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pageLimits = [3, 3, 2]; // ✅ 3 blogs on page 1 & 2, 2 on page 3

  useEffect(() => {
    // const uniqueIds = [...new Set(blogIds)];

    const fetchBlogs = async () => {
      try {
        const responses = await Promise.all(
          blogIds.map(id =>
            fetch(`https://www.googleapis.com/blogger/v3/blogs/${id}?key=AIzaSyCzFp4OS7CZvUooG-EGo49x7RZunD85Ni4`)
              .then(res => {
                if (!res.ok) {
                  throw new Error(`Failed to fetch blog with ID ${id}`);
                }
                return res.json();
              })
          )
        );
        setBlogsData(responses);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBlogs();
  }, []);

  const getCurrentBlogs = () => {
    let start = 0;
    for (let i = 0; i < currentPage - 1; i++) {
      start += pageLimits[i];
    }
    const end = start + pageLimits[currentPage - 1];
    return blogsData.slice(start, end);
  };

  const totalPages = pageLimits.length;

  if (error) {
    return <div className="text-red-500 text-center mt-4">Error: {error}</div>;
  }

  if (blogsData.length === 0) {
    return <div className="text-center text-gray-600 mt-4">Loading...</div>;
  }

  return (
    <div>
      <Header className="shadow-lg bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white backdrop-blur-md" />
      <div className="max-w-3xl mx-auto p-4 space-y-6">
      {getCurrentBlogs().map(blog => (
        <div key={blog.id} className="border rounded-2xl shadow-lg p-4 bg-white">
          <h2 className="text-2xl font-bold mb-2">{blog.name}</h2>
          <p className="text-gray-600 mb-4">{blog.description || 'No description available.'}</p>
          <div className="text-sm text-gray-800 space-y-1">
            <p><strong>ID:</strong> {blog.id}</p>
            <p>
              <strong>URL:</strong>{' '}
              <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {blog.url}
              </a>
            </p>
            <p><strong>Published:</strong> {new Date(blog.published).toLocaleDateString()}</p>
            <p><strong>Updated:</strong> {new Date(blog.updated).toLocaleDateString()}</p>
          </div>
        </div>
      ))}

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
    <Footer className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white shadow-inner backdrop-blur-md" />
    </div>
    
  );
};

export default BlogPost;