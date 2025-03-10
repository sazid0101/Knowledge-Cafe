import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(Response => Response.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className=" md:w-2/3 ml-4">
            <h1 className="text-2xl font-bold">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog blog ={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;