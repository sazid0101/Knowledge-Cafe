import './Blog.css'
import { BsBookmarksFill } from "react-icons/bs";
const Blog = ({blog,handleAddToBookmark}) => {
    const {cover,title,author,author_image,posted_date,reading_time,hashtags} = blog
    return (
        <div>
            <img src={cover} alt="" srcset="" />
            <div className='flex justify-between mt-2'>
                <div className='flex'>
                    <img className="w-16" src={author_image} alt="" srcset="" />
                    <div className='ml-5'>
                      <h3 className='font-bold'>{author}</h3>
                      <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='text-xl ml-2 text-green-800'
                    onClick={()=>handleAddToBookmark(blog)}>
                        <BsBookmarksFill></BsBookmarksFill></button>
                </div>
            </div>
            <h1 className='text-2xl mt-2 font-bold'>Title: {title}</h1>
            <p>
                {
                    hashtags.map(hash => <a>#{hash}</a>)
                }
            </p>
            
            <br />
        </div>
    );
};

export default Blog;