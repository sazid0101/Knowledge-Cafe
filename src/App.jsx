import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/blogs/blogs'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/header/header'




function App() {
  const [bookmarks, setBookmarks] = useState([])
  // const {title,id}=blog

  const handleAddToBookmark =(blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    console.log(blog)
  }

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto gap-5 '>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>

      </div>
      
    </>
  )
}

export default App
