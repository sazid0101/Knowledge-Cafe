import './Blog.css'
const Blog = ({blog}) => {
    const {cover,title,author,author_image} = blog
    return (
        <div>
            <img src={cover} alt="" srcset="" />
            <h1 className='text-2xl'>{title}</h1>
            <p>{author}</p>
            <img className="author-img" src={author_image} alt="" srcset="" />
            <br />
        </div>
    );
};

export default Blog;