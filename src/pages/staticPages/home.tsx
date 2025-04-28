import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="flex flex-col md:flex-row mt-2">
      {/* left side with intro */}
      <div className="p-4 flex flex-1 flex-col md:w-2/3 gap-4 bg-[#171818e9]  shadow-gray-800 shadow-xl">
        {/* name */}
        <h1 className="font-roboto text-3xl font-bold text-tlight">
          * Hi, I'm Eugene
        </h1>
        {/* description */}
        <p className="md:w-[600px]">
          A full-stack developer based in Kenya, traversing this wild space we
          have in Tech and looking to make a difference. Passionate about
          building impactful digital solutions, learning constantly, and
          contributing to meaningful innovation across Africa and beyond.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="">
            <button className="flex items-center p-3 gap-3 text-2xl  bg-[#0f0f0fe9] rounded-md text-tlight">
              Get in Touch
            </button>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub size={32} />
            <FaLinkedin size={32} />
            <FaXTwitter size={32} />
          </div>
        </div>
      </div>
      {/* right side with image */}
      <div className="w-1/3"></div>
    </main>
  );
};

export default Home;
