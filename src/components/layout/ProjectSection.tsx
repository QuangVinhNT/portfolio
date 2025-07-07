import type { Project } from "@/types";
import ProjectItem from "../ui/ProjectItem";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const projects: Project[] = [
  {
    image: "https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
    name: 'Weather App',
    description: "A responsive web application that provides real-time weather updates.",
    features: ['JavaScript, API', 'Responsive Design', 'Real-time Data'],
    link: '#'
  }
];

const ProjectSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return (
    <div
      className="mt-40 scroll-m-24"
      id="projects"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <span className="font-semibold block text-center dark:text-white">Projects</span>
        <h1 className="font-anton text-4xl text-center mb-10 dark:text-white">Featured Projects Showcase</h1>
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 mb-10">
          {projects.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
        {projects.length > 4 && (
          <button className="mx-auto block bg-highlight text-white border-2 border-highlight px-4 py-2 cursor-pointer transition-all hover:bg-white hover:text-highlight">More</button>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectSection;
