/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  console.log(blog);
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="flex flex-col justify-center mt-5 w-25">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-[350px]">
          <img
            src={`${blog.image}`}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-700 leading-tight mb-4">{blog.subTitle}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <button className="bg-cyan-500 text-white p-2 rounded-md px-3 hover:bg-cyan-600 active:bg-red-400 font-semibold">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
