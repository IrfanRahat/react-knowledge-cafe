import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))

    },[])


    return (
        <div className="md:w-2/3 bg-neutral-300 p-4 rounded-xl mt-4">
            <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
        {
            blogs.map(blog => <Blog key={blog.id}
                blog = {blog}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}>
                </Blog>)
        }

        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blogs