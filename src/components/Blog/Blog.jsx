import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    const {id, title, cover,author_img,author,posted_date,reading_time, hashtags} = blog;
    return (
        <div className='border-2 border-gray-400 p-4 rounded-md my-4 space-y-3'>
            <img src={cover} alt={`The image of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center my-3'>
                    <img src={author_img} alt={author} className='w-14 rounded-full'/>
                    <div>
                    <p>{author}</p>
                    <span>{posted_date}</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {hashtags.map((hashtag, idx) => <span key={idx} className='bg-blue-500 text-white p-1 rounded-md mr-2'>{hashtag}</span>)}
            </p>
            <button onClick={()=>handleMarkAsRead(id, reading_time)} className='text-[#6047EC] underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;