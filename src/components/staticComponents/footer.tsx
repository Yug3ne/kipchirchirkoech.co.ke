import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <nav className="text-tlight flex items-center justify-between h-12">
      {/* left side with title/logo */}
      <div>
        <span className="text- font-roboto font-bold  p-2 rounded-md">
          Created by Eugene
        </span>
      </div>
      {/* right side with the links */}
      <div className="hidden md:flex gap-4 p-4 ">
      <FaGithub/>
      <FaLinkedin/>
      <FaXTwitter />
      </div>
      <div>&copy;2025</div>
    </nav>
  );
};

export default Footer;
