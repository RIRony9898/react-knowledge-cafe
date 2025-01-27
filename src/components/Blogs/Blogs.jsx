import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 border-2 border-red-400 p-5">
        <h1 className="text-3xl">Blogs: {blogs.length}</h1>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;
