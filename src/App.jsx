import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleBookmark = (blog) => {
    setBookmark([...bookmark, blog]);
  };

  const handleMarkAsRead = (id, time) => {
    setMarkAsRead(markAsRead + time);

    //remove bookmarked which completed reading
    const updateBookmarks = bookmark.filter(bookmark => bookmark.id !== id);
    setBookmark(updateBookmarks);
  }
  return (
    <div className="container mx-auto my-5">
      <Header />
      <main className="md:flex my-10 gap-5">
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} />
        <Bookmarks bookmark={bookmark} markAsRead={markAsRead} />
      </main>
    </div>
  );
}

export default App;
