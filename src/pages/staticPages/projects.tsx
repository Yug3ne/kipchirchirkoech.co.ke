import { Link } from "react-router";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "254 Brewing",
    description:
      "A modern brewery website showcasing their products and services.",
    link: "https://254brewing.com",
    image: "/254brewing.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of your second project.",
    link: "#",
    image: "/project2.png",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of your third project.",
    link: "#",
    image: "/project3.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of your fourth project.",
    link: "#",
    image: "/project4.png",
    technologies: ["React", "Django", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <main className="flex flex-col gap-8 p-4">
      <motion.section
        className="flex flex-col gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-neutral-500 p-1 rounded-2xl">
          <div className="bg-bDark rounded-2xl p-8">
            <h1 className="text-4xl font-medium text-gray-200 text-center mb-4">
              My Projects
            </h1>
            <p className="text-gray-400 text-center text-sm mb-6">
              Here are some of the projects I've worked on. Each project
              represents a unique challenge and learning experience in my
              journey as a developer.
            </p>
            <div className="mt-2 rounded-md border border-yellow-500/30 bg-yellow-500/10 p-3 text-center">
              <span className="text-yellow-200 text-sm">
                🚧 This page is under construction — more projects are being
                added soon.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-neutral-500 p-1 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-bDark rounded-2xl overflow-hidden">
                <Link to={project.link} className="block">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-tlight mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#0e0c0c52] text-tlight rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Projects;
