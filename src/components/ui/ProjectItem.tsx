import type { Project } from "@/types";
import { ChevronRight, Link } from "lucide-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  project: Project;
};;

const ProjectItem = (props: Props) => {
  const { project } = props;
  return (
    <div className="">
      <a href={project.link} target="_blank">
        <LazyLoadImage
          className="w-full aspect-video object-cover rounded-2xl hover:opacity-50 transition duration-300"
          src={project.image}
          alt="Image"
        />
      </a>
      <h2 className="font-anton text-xl mt-4 dark:text-white">
        <a href={project.githubLink ?? '#'} target="_blank" className="flex items-center gap-2"><Link size={16} /> <span className="hover:underline">{project.name}</span></a>
      </h2>
      <p className="my-2 dark:text-white">{project.description}</p>
      <div className="hidden lg:flex gap-4 mb-4">
        {project.features.map((item, idx) => (
          <span key={idx} className="bg-card-background px-4 py-2 text-sm font-semibold ">{item}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" className="flex items-center gap-0.5">
        <span className="hover:underline dark:text-white">View demo</span>
        <ChevronRight size={20} className="dark:text-white" />
      </a>
    </div>
  );
};

export default ProjectItem;
