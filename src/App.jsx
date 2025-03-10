import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/blogs/blogs'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/header/header'




function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  // const {title,id}=blog

  const handleAddToBookmark =(blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = time =>{
    const newReadingTime = (readingTime + time)
    setReadingTime(newReadingTime)
    // console.log(newReadingTime,time)
  }

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto gap-5 '>
      <Blogs 
      handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}>
      </Blogs>

      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </div>
      
    </>
  )
}

export default App
