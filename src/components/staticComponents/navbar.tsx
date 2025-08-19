import { Link, NavLink } from "react-router";

const navLinks = ["work", "about", "contact"];

const Navbar = () => {
  return (
    <nav className="text-tlight flex items-center justify-between h-20">
      {/* left side with title/logo */}
      <div>
        <Link
          to="/"
          className="text-2xl font-roboto font-bold hover:outline-tlight hover:outline p-2 rounded-md"
        >
          Eugene
        </Link>
      </div>
      {/* right side with the links */}
      <div className="hidden md:flex gap-4 p-4 ">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={`/${link}`}
            className="text-xl font-roboto hover:outline-tlight hover:outline p-2 rounded-md capitalize"
          >
            {link}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
