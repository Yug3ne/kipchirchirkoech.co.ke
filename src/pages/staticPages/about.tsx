import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

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

const stats = [
  { number: "3+", label: "Years of Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "5+", label: "Happy Clients" },
];

const process = [
  {
    number: "01",
    title: "Planning",
    description:
      "Understanding requirements and creating a detailed project roadmap.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Building the solution with clean, maintainable code and best practices.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Thorough testing and smooth deployment to production.",
  },
];

const About = () => {
  return (
    <main className="flex flex-col gap-8 p-4">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col-reverse md:flex-row mt-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex-1 p-1 bg-gray-00 rounded-2xl md:w-2/3 h-[400px] bg-neutral-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 flex space-y-8 flex-col bg-bDark h-full w-full rounded-2xl">
            <h1 className="font-roboto text-4xl font-bold text-tlight">
              About me
            </h1>
            <p className="text-tlight text-lg">
              I'm a passionate full-stack developer based in Kenya, with a
              strong focus on creating impactful digital solutions. My journey
              in tech has been driven by a desire to solve real-world problems
              and contribute to Africa's growing tech ecosystem.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/3 h-[400px]"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#5A5E61] rounded-2xl h-full">
            <img
              src="/Koech.png"
              alt="Eugene"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-neutral-500 p-1 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-bDark rounded-2xl p-8 text-center">
              <h2 className="text-4xl font-bold text-tlight mb-2">
                {stat.number}
              </h2>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Stack and Process Section */}
      <section className="flex flex-col md:flex-row gap-8">
        {/* Stack Section */}
        <motion.div
          className="w-full md:w-1/3 bg-neutral-500 p-1 rounded-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-bDark rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-tlight text-center mb-6">
              Stack I use
            </h2>
            <div className="space-y-4">
              <div className="flex w-full">
                <Marquee speed={50} direction="right">
                  {langs.map((lang, i) => (
                    <div className="mt-0 mr-[20px]" key={i}>
                      <img src={lang} alt="" className="w-10 h-10" />
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="flex w-full">
                <Marquee speed={50} direction="left">
                  {frameworks.map((framework, i) => (
                    <div className="mt-0 mr-[20px]" key={i}>
                      <img src={framework} alt="" className="w-10 h-10" />
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="flex w-full">
                <Marquee speed={50} direction="right">
                  {tools.map((tool, i) => (
                    <div className="mt-0 mr-[20px]" key={i}>
                      <img src={tool} alt="" className="w-10 h-10" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              className="bg-neutral-500 p-1 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-bDark rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-tlight mb-2">
                  {step.number}
                </h3>
                <h4 className="text-xl font-bold text-tlight mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
