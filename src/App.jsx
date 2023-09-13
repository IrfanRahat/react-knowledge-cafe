import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/header'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time)=>{
    setReadingTime(readingTime + time);
  }

  return (
    <>
      
    <div className='max-w-7xl mx-auto'>
    <Header></Header>
    </div>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark = {handleAddToBookmark}
    handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks}
    readingTime={readingTime}></Bookmarks>
    </div>
   
    </>
  )
}

export default App
