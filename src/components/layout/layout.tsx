import { AnimatePresence, useCycle } from "framer-motion";
import { useProjectModal } from "../../store/projects";
import Header from "../header";
import ProjectDetailsWrapper from "../projects/ProjectDetailWrapper";
import Menu from "../sections/menu";

type props = {
  children: JSX.Element;
};

const Layout: React.FC<props> = (props) => {
  const projects = useProjectModal();
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div className={`relative mx-auto min-h-screen bg-[#1d1d1d] ${isOpen?'scrollbar-hide':''} `}>
      <Header toggleOpen={toggleOpen} isOpen={isOpen} />
      <AnimatePresence>{isOpen && <Menu isOpen={isOpen} />}</AnimatePresence>

      
      <AnimatePresence>
        {projects.prjectNumber != 0 && <ProjectDetailsWrapper />}
      </AnimatePresence>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
