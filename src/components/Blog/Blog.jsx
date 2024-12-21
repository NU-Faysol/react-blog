import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmarks }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt={title} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt={author} />
          <div className="ml-6">
            <h3 className="text-2xl"> {author} </h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button onClick={handleAddToBookmarks} className="ml-3">
            <FaBookmark size={22} />
          </button>
        </div>
      </div>
      <h2 className="text-4xl"> {title} </h2>
      <p>
        {hashtags.map((hashtag, index) => (
          <span key={index}>
            <a href="">{hashtag}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
