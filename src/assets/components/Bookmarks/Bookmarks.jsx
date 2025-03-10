import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 ">
            <h3 className="text-2xl ">Bookmarked Blogs: {bookmarks.length}</h3>
            <div className="bg-slate-200 p-2 rounded-lg">
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;