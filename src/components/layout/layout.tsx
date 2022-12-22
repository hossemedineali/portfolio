import { AnimatePresence, useCycle } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";
import { useProjectModal } from "../../store/projects";
import Header from "../header";
import Project1DetailsWrapper from "../projects/Project1DetailWrapper copy";
import Menu from "../sections/menu";
import { motion } from "framer-motion";
import CustomCursor from "../cursor/cursor";
import Canvas from "../cursor/cursor2";


type props = {
  children: JSX.Element;
};



const Layout: React.FC<props> = (props) => {
  
  const projects = useProjectModal();
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.div
      
 
      className={`relative mx-auto min-h-screen bg-[#1d1d1d] ${
        isOpen ? "scrollbar-hide" : ""
      } `}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 max-w-[200vw]">
       <Canvas/>

      </div>



      <Header toggleOpen={toggleOpen} isOpen={isOpen} />
      <AnimatePresence>{isOpen && <Menu isOpen={isOpen} />}</AnimatePresence>
      <AnimatePresence>
        {projects.prjectNumber != 0 && <Project1DetailsWrapper />}
      </AnimatePresence>
      {/*  <AnimatePresence initial={false}>
        {projects.prjectNumber == 1 && <Project1DetailsWrapper />}
        {projects.prjectNumber == 2 && <Project2DetailsWrapper />}
      </AnimatePresence> */}
      <main>{props.children}</main>
    </motion.div>
  );
};

export default Layout;
