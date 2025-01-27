import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmark, markAsRead }) => {
  return (
    <div className="md:w-1/3 border-2 border-green-400 p-5">
      <div className="bg-violet-600 mb-3 p-3 rounded-xl">
        <h2 className="text-3xl">Spent time on read: {markAsRead}</h2>
      </div>
      <h1 className="text-3xl">Bookmarked Blogs: {bookmark.length}</h1>
      <div>
        {bookmark.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.arrayOf(PropTypes.object).isRequired,
  markAsRead: PropTypes.number.isRequired,
};

export default Bookmarks;
