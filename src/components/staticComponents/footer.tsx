const Footer = () => {
  return (
    <nav className="text-tlight flex items-center justify-between h-20 text-2lg">
      {/* left side with title/logo */}
      <div>
        <span className="text- font-roboto font-bold  p-2 rounded-md">
          Created with ❤️ by Eugene
        </span>
      </div>
      {/* right side with the links */}

      <div className="text-2lg">&copy;2025</div>
    </nav>
  );
};

export default Footer;
  