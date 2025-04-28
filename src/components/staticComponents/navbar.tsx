import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="text-tlight flex items-center justify-between h-12">
      {/* left side with title/logo */}
      <div>
        <span className="text-2xl font-roboto font-bold hover:outline-tlight hover:outline p-2 rounded-md">
          Eugene
        </span>
      </div>
      {/* right side with the links */}
      <div className="hidden md:flex gap-4 p-4 ">
        <NavLink
          to="#"
          className="text-xl font-roboto hover:outline-tlight hover:outline p-2 rounded-md"
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className="text-xl font-roboto hover:outline-tlight hover:outline p-2 rounded-md"
        >
          Work
        </NavLink>
        <NavLink
          to="#"
          className="text-xl font-roboto hover:outline-tlight hover:outline p-2 rounded-md"
        >
          About
        </NavLink>
        <NavLink
          to="#"
          className="text-xl font-roboto hover:outline-tlight hover:outline p-2 rounded-md"
        >
          Contact
        </NavLink>
      </div>


    </nav>
  );
};

export default Navbar;
