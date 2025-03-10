import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3 ">
            <h2 className="text-xl font-bold bg-indigo-300 p-2 rounded-lg mt-8">Reading Time: {readingTime}</h2>
            <h3 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h3>
            <div className="bg-slate-200 p-2 rounded-lg">
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;