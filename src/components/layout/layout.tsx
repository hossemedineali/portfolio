import {
  AnimatePresence,
  
  useCycle,

} from "framer-motion";
import {  useEffect, useState } from "react";
import { useProjectModal } from "../../store/projects";
import Header from "../header";
import Project1DetailsWrapper from "../projects/ProjectsDetailWrapper";
import { motion } from "framer-motion";
import HomeCanvas from "../cursor/HomeCanvas";

type props = {
  children: JSX.Element;
};

const Layout: React.FC<props> = (props) => {
  const projects = useProjectModal();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  return (
    <motion.div className={`scroll-smooth scrollbar-hide  relative mx-auto min-h-screen overflow-hidden bg-[#1d1d1d] ${isOpen?'max-h-screen':''} `}>
      {true && (
        <div className="absolute top-0 left-0 right-0 bottom-0 max-w-[200vw]">
          <HomeCanvas />
        </div>
      )}

    
      <Header  />
     
      {!isLoading && (
        <AnimatePresence>
          {projects.prjectNumber != 0 && <Project1DetailsWrapper />}
        </AnimatePresence>
      )}
     
      {<main>{props.children}</main>}
    </motion.div>
  );
};



export default Layout;

