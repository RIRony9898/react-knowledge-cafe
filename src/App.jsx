import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mx-auto my-5">
      <Header />
      <main className="flex my-10 gap-5">
        <Blogs />
        <Bookmarks/>
      </main>
    </div>
  );
}

export default App;
