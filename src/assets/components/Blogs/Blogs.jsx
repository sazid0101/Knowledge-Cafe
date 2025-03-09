import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(Response => Response.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className=" md:w-2/3 ml-4">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;