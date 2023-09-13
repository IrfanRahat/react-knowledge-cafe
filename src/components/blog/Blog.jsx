import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
const {title, cover, author, author_img,posted_date, reading_time, hashtags}=blog;
    return (
        <div className='mb-20 bg-slate-400 p-4 mt-2 rounded-xl space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between mb-4'>
            <div className='flex gap-2'>
                <img className='w-14' src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
        <div>
                <span>{reading_time} min read</span>
                <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
        </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-indigo-600 font-bold underline' onClick={()=> handleMarkAsRead(reading_time)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;