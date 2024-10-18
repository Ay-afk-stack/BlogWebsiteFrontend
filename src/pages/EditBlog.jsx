import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const fetchBlog = async () => {
    const response = await axios.get(`http://localhost:3000/blog/${id}`);
    if (response.status === 200) {
      setData({
        title: response.data.data.title,
        subTitle: response.data.data.subTitle,
        description: response.data.data.description,
      });
      console.log(data);
    } else {
      alert("something went wrong!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
  const editBlog = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      `http://localhost:3000/blog/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      alert("Blog Updated Successfully");
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-10 border-2 border-blue-400 rounded-lg w-96 mx-auto">
        <div className="mt-5 text-center text-4xl font-bold">Edit Blog</div>
        <div className="p-8">
          <form onSubmit={editBlog}>
            <div className="flex gap-4">
              <input
                type="text"
                name="title"
                className="mt-2 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Enter Title *"
                onChange={handleChange}
                value={data.title}
              />
              <input
                type="text"
                name="subTitle"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Enter Subtitle *"
                onChange={handleChange}
                value={data.subTitle}
              />
            </div>
            <div>
              <input
                type="file"
                name="image"
                className="mt-4 mb-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 
                focus:ring-sky-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <textarea
                name="description"
                cols="30"
                rows="10"
                className="mb-10 mt-2 h-40 w-full  rounded-md border border-slate-300 p-5  focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm text-black"
                placeholder="Enter Description *"
                onChange={handleChange}
                value={data.description}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditBlog;
