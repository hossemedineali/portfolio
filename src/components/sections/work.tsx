import {
  AnimatePresence,
  animations,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import dari from "../../../public/dari.png";
import mycoin from "../../../public/mycoin.png";
import bb from "../../../public/bb.png";
import soon from "../../../public/soon.png";
import { useProjectModal } from "../../store/projects";

const titleContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,

    transition: { staggerChildren: 0.2, delayChildren: 0.04 * i + 0.5 },
  }),
};

const titleChild = {
  visible: {
    opacity: 1,
    //x: 0,
    // y: 0,

    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    //x: -20,
    //y: 10,

    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Work = () => {
  //const project=
  const ref = useRef(null);
  const isInView = useInView(ref);
  const annimation = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [700,1900], ['0%', '-100%']);
  useEffect(() => {
    if (isInView) {
      annimation.start("visible");
    }
  }, [isInView]);
  return (
    <section className="relative min-h-screen bg-[#151a24] py-20">
      <div className="absolute top-0 left-0 w-full overflow-hidden  ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[76px] w-[calc(100%+1.3px)] md:h-[151px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#1d1d1d]"
          ></path>
        </svg>
      </div>

      <motion.h1
        ref={ref}
        variants={titleContainer}
        initial="hidden"
        animate={annimation}
        className="py-10 text-center font-Allerta  text-5xl font-bold text-white md:text-8xl md:font-extrabold"
      >
        {Array.from("My Work").map((l, i) => {
          return (
            <motion.span key={i} variants={titleChild}>
              {l}
            </motion.span>
          );
        })}
      </motion.h1>

      <div className="md:grid flex  flex-col gap-10 sm:px-7 md:grid-cols-2 md:gap-20  ">
        <P1 position="left"/>
          

        <P2 position="right"/>

        <P3 position="left"/>
        
        

        <P4 position="right"/>
          
        
      </div>

      {/* old one with flex */}
      {/*   <div className="mt-28 md:px-62 flex flex-col justify-center gap-[30px] px-10 pb-40  md:flex-row">
        <motion.div className="self-left mx-auto h-[420px] w-full  max-w-[520px] bg-[#D6D6D2] md:w-1/2 ">
          <motion.div className="h-full w-full border-2 hover:translate-x-5 hover:translate-y-5">

          </motion.div>
        </motion.div>

        <motion.div className="self-left mx-auto mt-20 h-[420px] w-full max-w-[520px] bg-[#D6D6D2] md:w-1/2 ">
          <motion.div className="h-full w-full border-2 hover:-translate-x-5 hover:translate-y-5">
            
          </motion.div>
        </motion.div>
        
      </div>

      <div className="md:px-62 flex flex-col justify-center gap-[30px] px-10 pb-40  md:flex-row">
        <motion.div className="self-left mx-auto h-[420px] w-full  max-w-[520px] bg-[#D6D6D2] md:w-1/2 ">
          <motion.div className="h-full w-full border-2 hover:translate-x-5 hover:translate-y-5">

          </motion.div>
        </motion.div>

        <motion.div className="self-left mx-auto mt-20 h-[420px] w-full max-w-[520px] bg-[#D6D6D2] md:w-1/2 ">
          <motion.div className="h-full w-full border-2 hover:-translate-x-5 hover:translate-y-5">
            
          </motion.div>
        </motion.div>
        
      </div> */}
    </section>
  );
};

interface Props {
 
  position: string;
}
const P1: React.FC<Props> = ({  position }) => {
  const project=useProjectModal()
  const ref=useRef(null)
  const { scrollYProgress } = useScroll({target:ref,offset:['end end','end start']});
  const y = useTransform(scrollYProgress, [0,1], ['0%', '-30%']);
  return (
    <AnimatePresence>
      <motion.section
      onClick={()=>{project.setProjectNumber(1)}}
      ref={ref}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: position == "right" ? 0.5 : 0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.div className="mx-auto mb-20  aspect-square  w-10/12   bg-[#D6D6D2] hover:cursor-pointer  ">
            <motion.div className="relative h-full w-full -translate-x-3  translate-y-3 bg-[#c0c01e] transition-all duration-300 md:translate-x-0 md:translate-y-0 md:hover:translate-x-3 md:hover:translate-y-3">
              <Image src={dari.src} fill sizes="100" alt="dari project" />
              <motion.div
                style={{ y }}
                className="absolute -bottom-16 h-28 w-full pl-5 text-primary  md:pl-20  "
              >
                <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                  Dari
                </h1>
                <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                  Real estate app
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};


const P2: React.FC<Props> = ({  position }) => {
  
  const project=useProjectModal()
  const ref=useRef(null)
  const { scrollYProgress } = useScroll({target:ref,offset:['end end','end start']});
  const y = useTransform(scrollYProgress, [0,1], ['0%', '-30%']);
  return (
    <AnimatePresence>
      <motion.section
      onClick={()=>{project.setProjectNumber(2)}}
      ref={ref}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: position == "right" ? 0.5 : 0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
      <motion.div className="mx-auto mb-20  aspect-square w-10/12    bg-[#D6D6D2] md:mt-20  hover:cursor-pointer">
            <motion.div className="relative h-full w-full translate-x-3 translate-y-3 bg-[#c0c01e] duration-300 md:translate-x-0 md:translate-y-0 md:hover:-translate-x-3 md:hover:translate-y-3">
              <Image src={mycoin.src} fill sizes="100" alt="dari project" />
              <motion.div style={{ y }} className="absolute -bottom-28 h-28 w-full pl-5 text-primary  md:pl-20  ">
                <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                  My coin
                </h1>
                <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                  cryptocurrency app
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

const P3: React.FC<Props> = ({  position }) => {
  const project=useProjectModal()
  const ref=useRef(null)
  const { scrollYProgress } = useScroll({target:ref,offset:['end end','end start']});
  const y = useTransform(scrollYProgress, [0,1], ['0%', '-30%']);
  return (
    <AnimatePresence>
      <motion.section
      onClick={()=>{project.setProjectNumber(3)}}
      ref={ref}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: position == "right" ? 0.5 : 0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
       
       <motion.div className="mx-auto mb-20  md:mt-[-80px] aspect-square w-10/12   bg-[#D6D6D2] hover:cursor-pointer ">
            <motion.div className="relative h-full w-full -translate-x-3 translate-y-3 bg-[#c0c01e] duration-300 md:translate-x-0 md:translate-y-0 md:hover:translate-x-3 md:hover:translate-y-3">
              <Image src={bb.src} fill sizes="100" alt="dari project" />
              <motion.div style={{ y }} className="absolute -bottom-16 h-28 w-full pl-5 text-primary  md:pl-20  ">
                <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                  Breaking bad
                </h1>
                <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                  App for the best tv show ever
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>

      </motion.section>
    </AnimatePresence>
  );
};


const P4: React.FC<Props> = ({  position }) => {
  const project=useProjectModal()
  const ref=useRef(null)
  const { scrollYProgress } = useScroll({target:ref,offset:['end end','end start']});
  const y = useTransform(scrollYProgress, [0,1], ['0%', '-30%']);
  return (
    <AnimatePresence>
      <motion.section
      onClick={()=>{project.setProjectNumber(4)}}
      ref={ref}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: position == "right" ? 0.5 : 0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
       <motion.div className="mx-auto mb-20   aspect-square  w-10/12   bg-[#D6D6D2] hover:cursor-pointer ">
            <motion.div className="relative h-full w-full -translate-x-3 translate-y-3 bg-[#c0c01e] duration-300 md:translate-x-0 md:translate-y-0 md:hover:-translate-x-3 md:hover:translate-y-3">
              <Image src={soon.src} fill sizes="100" alt="dari project" />
              <motion.div style={{ y }} className="absolute -bottom-16 h-28 w-full pl-5 text-primary  md:pl-20  ">
                <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                  Shop app
                </h1>
                <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                  With accounting system
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

const item = {
  visible: {
    x: 0,
  },
  hidden: { x: "-100vw" },
};

const WorkItem: React.FC<{ self: string }> = ({ self }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const annimation = useAnimation();
  useEffect(() => {
    console.log("is in view:", isInView);
    if (isInView) {
      console.log("in view item", isInView);
      annimation.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={item}
      initial="hidden"
      animate="visible"
      transition={{ delay: 2, duration: 5 }}
      className={`relative h-[420px] w-full max-w-[450px]  bg-white md:w-1/2   self-${self} `}
    >
      <motion.div
        className={`absolute top-0 left-0  hidden h-full   w-full  bg-[#D6D6D2] hover:-translate-x-5 hover:translate-y-5  md:block`}
      ></motion.div>
    </motion.div>
  );
};

export default Work;
