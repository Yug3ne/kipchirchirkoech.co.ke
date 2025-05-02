import Marquee from "react-fast-marquee";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import TypewriterComponent from "typewriter-effect";

type logos = { icon: IconType; url: string };
const logos: logos[] = [
  { icon: FaGithub, url: "https://github.com/Yug3ne" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/eugenekoech9/" },
  { icon: FaXTwitter, url: "https://x.com/_Yu_gene__" },
];

type Project = {
  id: number;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    link: "https://254brewing.com",
    image: "/254brewing.png",
  },
  {
    id: 2,
    link: "https://254brewing.com",
    image: "/254brewing.png",
  },
  {
    id: 3,
    link: "https://254brewing.com",
    image: "/254brewing.png",
  },
];

const langs = [
  "/tools/git.svg",
  "/tools/html5.svg",
  "/tools/css_old.svg",
  "/tools/javascript.svg",
  "/tools/typescript.svg",
  "/tools/python.svg",
  "/tools/mongodb.svg",
  "/tools/postgresql.svg",
];

const frameworks = [
  "tools/react_dark.svg",
  "tools/reactrouter.svg",
  "tools/next.svg",
  "tools/express.svg",
  "tools/shadcn-ui_dark.svg",
  "tools/tailwindcss.svg",
  "tools/django.svg",
];
const tools = [
  "tools/vscode.svg",
  "tools/webstorm.svg",
  "tools/github_dark.svg",
  "tools/prisma_dark.svg",
  "tools/vercel_dark.svg",
  "tools/figma.svg",
  "tools/expo.svg",
 
];

type whatIdo = { title: string; desc: string };

const whatIdo: whatIdo[] = [
  {
    title: "Web Development",
    desc: "I build responsive, high-performance websites using modern technologies like HTML, CSS, JavaScript, and frameworks such as React, Next.js and Phoenix.",
  },
  {
    title: "API Development",
    desc: "I develop robust and scalable RESTful APIs using Python and Django, ensuring secure and efficient communication between frontend and backend systems.",
  },
  {
    title: "Website Design",
    desc: "I design clean, user-friendly interfaces that blend aesthetics with usability, creating intuitive layouts and engaging user experiences.",
  },
];

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <section className="flex flex-col-reverse md:flex-row mt-4 gap-8">
        {/* left side with intro */}
        <div className="flex-1 p-1 bg-gray-00 rounded-2xl md:w-2/3 h-[400px]  bg-neutral-500">
          <div className="p-8 flex space-y-8 flex-col  bg-bDark h-full w-full rounded-2xl">
            {/* name */}
            <h1 className="font-roboto flex gap-4 text-3xl font-bold text-tlight">
              Hi I am
              <TypewriterComponent
                options={{
                  strings: ["Koech", "Eugene", "Kipchirchir"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  delay:200,
                  deleteSpeed:100
                }}
              />
            </h1>
            {/* description */}
            <p className="md:w-[500px] text-tlight">
              A full-stack developer based in Kenya, traversing this wild space
              we have in Tech and looking to make a difference. Passionate about
              building impactful digital solutions, learning constantly, and
              contributing to meaningful innovation across Africa and beyond.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-2 mt-10">
              <div className=" bg-[#0e0c0c52] border border-bDark rounded-md flex items-center">
                <Link to='/contact' className="flex items-center p-3 gap-3 text-2xl  font-roboto rounded-md text-tlight transition-transform duration-200 hover:scale-95 hover:bg-[#25212152]">
                  Get in Touch
                </Link>
              </div>
              <div className="flex items-center gap-4 hover:bg-[#25212152]">
                {logos.map(({ icon: Icon, url }, index) => (
                  <Link
                    className="bg-[#0b030352] flex justify-center items-center p-4 rounded-2xl"
                    key={index}
                    to={url}
                  >
                    <Icon
                      key={index}
                      size={32}
                      color="white"
                      className="transition-transform duration-200 hover:scale-95"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* right side with image */}
        <div className="w-full md:w-1/3 h-[400px] ">
          <div className="bg-[#5A5E61] rounded-2xl h-full">
            <img
              src="/Koech.png"
              alt="Eugene"
              className="h-full w-full object-cover rounded-2xl "
            />
          </div>
        </div>
      </section>
      {/* sample work */}
      <section className="flex flex-col md:flex-row gap-8">
        {projects.map((project) => (
          <div
            className="w-full md:w-1/3 h-[400px] overflow-hidden"
            key={project.id}
          >
            <Link
              to={project.link}
              className="bg-[#5A5E61] rounded-2xl h-full "
            >
              <img
                src={project.image}
                alt="Eugene"
                className="h-auto w-full object-top object-cover rounded-2xl hover:scale-105 transition-transform duration-[3000ms] ease-in-out hover:-translate-y-[calc(100%-350px)] "
              />
            </Link>
          </div>
        ))}
      </section>
      {/* stack and work */}
      <section className="flex flex-col-reverse md:flex-row mt-4 gap-8">
        {/* right side with my stack */}
        <div className="w-full md:w-1/4 h-[400px] bg-neutral-500 rounded-2xl p-1">
          <div className="bg-bDark rounded-2xl h-full w-full p-4">
            <h1 className="text-center text-2xl text-tlight font-roboto font-bold">
              Tools and Framworks
            </h1>
            <div className="flex w-full mt-4">
              <Marquee speed={50} direction="right">
                {langs.map((lang, i) => (
                  <div className="mt-0 mr-[40px]" key={i}>
                    <img src={lang} alt="" className="w-15 h-15" />
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="flex w-full mt-8">
              <Marquee speed={50} direction="left">
                {frameworks.map((framework, i) => (
                  <div className="mt-0 mr-[40px]" key={i}>
                    <img src={framework} alt="" className="w-15 h-15" />
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="flex w-full mt-8">
              <Marquee speed={50} direction="right">
                {tools.map((tool, i) => (
                  <div className="mt-0 mr-[40px]" key={i}>
                    <img src={tool} alt="" className="w-15 h-15" />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
        {/* left side with my service */}
        <div className="flex-1 p-1 bg-gray-00 rounded-2xl md:w-3/4 h-[400px]  bg-neutral-500">
          <div className="p-8 flex space-y-3 flex-col  bg-bDark h-full w-full rounded-2xl">
            {/* name */}
            <h1 className="font-roboto text-3xl font-bold text-tlight text-center">
              Services I offer
            </h1>
            <div className="flex gap-3 mt-2 flex-col md:flex-row">
              {whatIdo.map((whatIdo, i) => (
                <div className="flex flex-col gap-4 w-full" key={i}>
                  <img
                    src="/bulb.svg"
                    alt=""
                    className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center"
                    color="white"
                  />
                  <h1 className="text-tlight text-3xl">{whatIdo.title}</h1>
                  <p className="text-3xs">{whatIdo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
