import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-neutral-300 mt-4 ml-4 rounded-xl">
            <div className='border-b-black p-4 bg-slate-200'>
                <h3 className="text-2xl text-center font-semibold">Reading Time: {readingTime} min</h3>
            </div>
            <h2 className='text-3xl text-center font-bold pt-2'>Bookmarked: {bookmarks.length}</h2>
            {
               bookmarks.map(bookmark => <Bookmark 
                key={bookmark.id} 
                bookmark = {bookmark}></Bookmark>) 
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;