/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const createBlog = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/blog", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      alert("Blog Created succesfully!");
      navigate("/");
    } else {
      alert("Something went Wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 border-2 border-blue-400 rounded-lg w-96 mx-auto">
        <div className="mt-5 text-center text-4xl font-bold">
          Wanna Create Blog?
        </div>
        <div className="p-8">
          <form onSubmit={createBlog}>
            <div className="flex gap-4">
              <input
                type="text"
                name="title"
                className="mt-2 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Enter Title *"
                onChange={handleChange}
              />
              <input
                type="text"
                name="subTitle"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Enter Subtitle *"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="file"
                name="image"
                className="mt-4 mb-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 
            }focus:ring-sky-500 sm:text-sm"
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
              ></textarea>
            </div>
            <div className="text-center">
              <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
                Create Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
