import {
  AnimatePresence,
  
  useCycle,
  useScroll,
  useTransform,
} from "framer-motion";
import {  useEffect, useState } from "react";
import { useProjectModal } from "../../store/projects";
import Header from "../header";
import Project1DetailsWrapper from "../projects/ProjectsDetailWrapper";
import Menu from "../sections/menu";
import { motion } from "framer-motion";
import Canvas from "../cursor/cursor";

type props = {
  children: JSX.Element;
};

const Layout: React.FC<props> = (props) => {
  const projects = useProjectModal();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div className={`scroll-smooth scrollbar-hide  relative mx-auto min-h-screen overflow-hidden bg-[#1d1d1d] ${isOpen?'max-h-screen':''} `}>
      {true && (
        <div className="absolute top-0 left-0 right-0 bottom-0 max-w-[200vw]">
          <Canvas />
        </div>
      )}

    
      <Header toggleOpen={toggleOpen} isOpen={isOpen} />
     {/*  {!isLoading && (
        <AnimatePresence>
          {isOpen && <Menu isOpen={isOpen} toggleOpen={toggleOpen} />}
        </AnimatePresence>
      )} */}
      {!isLoading && (
        <AnimatePresence>
          {projects.prjectNumber != 0 && <Project1DetailsWrapper />}
        </AnimatePresence>
      )}
     
      {!isLoading && <main>{props.children}</main>}
    </motion.div>
  );
};



export default Layout;

