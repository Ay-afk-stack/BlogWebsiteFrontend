import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-around p-4 px-4 bg-cyan-700 z-20 text-white  ">
        <div>
          <Link to={"/"}>
            <p className="font-bold italic text-lg">VBlogs</p>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4 list-none font-semibold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/create"}>Create</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
