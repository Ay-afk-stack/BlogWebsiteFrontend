import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get(
      "https://blog-website-orpin-psi.vercel.app/blog/"
    );
    setBlogs(response.data.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center space-x-4">
        {blogs.map((blog) => (
          <Card blog={blog} key={blog._id} />
        ))}
      </div>
    </>
  );
};

export default Home;
