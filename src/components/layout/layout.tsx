import { AnimatePresence, useCycle } from "framer-motion";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useProjectModal } from "../../store/projects";
import Header from "../header";
import Project1DetailsWrapper from "../projects/Project1DetailWrapper copy";
import Menu from "../sections/menu";
import { motion } from "framer-motion";
import Canvas from "../cursor/cursor";


type props = {
  children: JSX.Element;
};



const Layout: React.FC<props> = (props) => {
  
  const projects = useProjectModal();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3800);
    return () => clearTimeout(timer);
  
  },[])
  return (
    <motion.div
      
 
    className="relative mx-auto min-h-screen bg-[#1d1d1d] overflow-hidden"
    >
    {!isLoading&&   <div className="absolute top-0 left-0 right-0 bottom-0 max-w-[200vw]">
       <Canvas/>

      </div> }


      <div  className="fixed bottom-5 right-5 z-20">
      <Arrows2/>
      </div>
      <Header toggleOpen={toggleOpen} isOpen={isOpen} />
     {!isLoading&& <AnimatePresence>{isOpen && <Menu isOpen={isOpen} toggleOpen={toggleOpen}/>}</AnimatePresence>}
     {!isLoading&& <AnimatePresence>
        {projects.prjectNumber != 0 && <Project1DetailsWrapper />}
      </AnimatePresence>}
      {/*  <AnimatePresence initial={false}>
        {projects.prjectNumber == 1 && <Project1DetailsWrapper />}
        {projects.prjectNumber == 2 && <Project2DetailsWrapper />}
      </AnimatePresence> */}
    {!isLoading&&  <main>{props.children}</main>}
    </motion.div>
  );
};


const Arrows2 = () => {
  return (
   





<svg className="w-20 h-20 md:w-32 md:h-32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2, delay:5}} fill-rule="evenodd" clip-rule="evenodd" d="M198 100C198 154.124 154.124 198 100 198C45.8761 198 2 154.124 2 100C2 45.8761 45.8761 2 100 2C154.124 2 198 45.8761 198 100ZM200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z" stroke="white"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2, delay:5}} fill-rule="evenodd" clip-rule="evenodd" d="M198 100C198 154.124 154.124 198 100 198C45.8761 198 2 154.124 2 100C2 45.8761 45.8761 2 100 2C154.124 2 198 45.8761 198 100ZM200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z" stroke="white"/>
<g filter="url(#filter0_d_0_1)">
<motion.path initial={{pathLength:0}} animate={{pathLength:0}} transition={{duration:2, delay:5}} fill-rule="evenodd" clip-rule="evenodd" d="M100 185.26C147.088 185.26 185.26 147.088 185.26 100C185.26 52.9122 147.088 14.74 100 14.74C52.9122 14.74 14.74 52.9122 14.74 100C14.74 147.088 52.9122 185.26 100 185.26ZM100 187C148.049 187 187 148.049 187 100C187 51.9512 148.049 13 100 13C51.9512 13 13 51.9512 13 100C13 148.049 51.9512 187 100 187Z" stroke="#270FBC"/>
</g>
<motion.g animate={{y:[-10,0,10]}} transition={{delay:7,repeat:5,repeatDelay:2}}>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2, delay:5}} d="M100 144C100 73.6184 100 55.341 100 55" stroke="#FFFAFA" stroke-width="5"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2, delay:5}} d="M100 147C114.4 128.878 130.667 128.768 137 130.978" stroke="#FFFAFA" stroke-width="5"/>
<motion.path initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2, delay:5}} d="M101 147C86.6 128.878 70.3333 128.768 64 130.978" stroke="#FFFAFA" stroke-width="5"/>
</motion.g>
<defs>
<filter id="filter0_d_0_1" x="10" y="13" width="182" height="182" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.153461 0 0 0 0 0.0583854 0 0 0 0 0.7375 0 0 0 1 0"/>
<feBlend mode="hard-light" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>








  );
};


export default Layout;
