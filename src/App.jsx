import './App.css'
import Blogs from './assets/components/blogs/blogs'
import Bookmarks from './assets/components/Bookmarks/Bookmarks'
import Header from './assets/components/header/header'




function App() {
 

  return (
    <>
      <Header></Header>

      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      
      </div>
      
    </>
  )
}

export default App
