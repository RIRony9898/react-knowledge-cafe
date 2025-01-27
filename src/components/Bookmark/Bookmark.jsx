import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-gray-600 my-3 p-3 rounded-xl">
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;