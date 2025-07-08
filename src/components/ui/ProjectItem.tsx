import type { Project } from "@/types";
import { ChevronRight } from "lucide-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  project: Project;
};
const ProjectItem = (props: Props) => {
  const { project } = props;
  return (
    <div className="">
      <LazyLoadImage
        className="w-full aspect-video object-cover rounded-2xl"
        src={project.image}
        alt="Image"
      />
      <h2 className="font-anton text-xl mt-4 dark:text-white">{project.name}</h2>
      <p className="my-2 dark:text-white">{project.description}</p>
      <div className="hidden lg:flex gap-4 mb-4">
        {project.features.map((item, idx) => (
          <span key={idx} className="bg-card-background px-4 py-2 text-sm font-semibold ">{item}</span>
        ))}
      </div>
      <a href={project.link} className="flex items-center gap-0.5">
        <span className="hover:underline dark:text-white">View project</span>
        <ChevronRight size={20} className="dark:text-white" />
      </a>
    </div>
  );
};

export default ProjectItem;
