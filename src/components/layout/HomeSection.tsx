import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';

const HomeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  return (
    <div id="#" className="mt-40 px-4 sm:px-0" ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <h1 className="anton-regular text-center text-6xl text-heading dark:text-white">Welcome to My Portfolio</h1>
        <p className="text-center sm:w-1/2 mx-auto my-6 dark:text-white">I am a passionate front-end intern eager to showcase my skills and projects. Let's connect and explore how I can contribute to your team.</p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="font-semibold bg-highlight text-white px-4 py-2 rounded-full border-2 border-highlight transition-all hover:-translate-y-1">Get in touch</a>
          <a href="/NguyenThoQuangVinh_FrontEnd_CV.pdf" download>
            <button className="font-semibold bg-white text-highlight px-4 py-2 rounded-full border-2 border-highlight transition-all hover:-translate-y-1 cursor-pointer">Download CV</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection;
