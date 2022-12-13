import { AnimatePresence, useCycle } from "framer-motion";
import { useProjectModal } from "../../store/projects";
import Header from "../header";
import Project1DetailsWrapper from "../projects/Project1DetailWrapper copy";
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
      <AnimatePresence >
      {projects.prjectNumber!=0&&<Project1DetailsWrapper/>}
      </AnimatePresence>
     {/*  <AnimatePresence initial={false}>
        {projects.prjectNumber == 1 && <Project1DetailsWrapper />}
        {projects.prjectNumber == 2 && <Project2DetailsWrapper />}
      </AnimatePresence> */}
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
