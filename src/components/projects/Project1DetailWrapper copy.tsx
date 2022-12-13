import { AnimatePresence, motion } from "framer-motion";
import { useProjectModal } from "../../store/projects";
import Project1 from "./p1";
import Project2 from "./p2";

const container = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,

    transition: { staggerChildren: 1, delayChildren: 0.04 * i },
  }),
};

const child1 = {
  visible: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    width: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const child2 = {
  visible: {
    top: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    top: "100%",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const child3 = {
  visible: {
    left: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    left: "99%",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
const child4 = {
  visible: {
    height: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    height: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
const Project1DetailsWrapper = () => {
  const project = useProjectModal();
  const hundelNextButton = () => {
    if (project.prjectNumber == 4) {
      return;
    }

    project.setProjectNumber(project.prjectNumber + 1);
  };

  const hundelPreviousButton = () => {
    if (project.prjectNumber == 1) {
      return;
    }
    project.setProjectNumber(project.prjectNumber - 1);
  };

  const prevBtnDisabled = project.prjectNumber == 1;
  const nextBtnDisabled = project.prjectNumber == 4;
  return (
   

      <div className="relative">
        <motion.div className="fixed    bottom-0   left-0 right-0 top-0 z-20 overflow-y-hidden ">
          {/* Lines */}
          <motion.div
            initial={{ right: "100%" }}
            animate={{ right: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
            exit={{ right: "100%", transition: { delay: 3.4, duration: 0.3 } }}
            id="line1B"
            className="absolute bottom-0 h-5 w-full bg-[#D6D6D2]  "
          ></motion.div>

          <motion.div
            initial={{ top: "100%" }}
            animate={{ top: 0 }}
            transition={{ duration: 0.3, delay: 0.25, ease: "linear" }}
            exit={{ top: "100%", transition: { delay: 3.1, duration: 0.3 } }}
            id="line2R"
            className="absolute right-0 top-0 bottom-0  w-5 bg-[#D6D6D2] "
          ></motion.div>

          <motion.div
            initial={{ left: "100%" }}
            animate={{ left: 0 }}
            transition={{ duration: 0.3, delay: 0.55, ease: "linear" }}
            exit={{ left: "100%", transition: { delay: 2.8, duration: 0.3 } }}
            id="line3T"
            className="absolute right-0 top-0 left-0  h-5 bg-[#D6D6D2]  "
          ></motion.div>

          <motion.div
            initial={{ bottom: "100%" }}
            animate={{ bottom: 0 }}
            transition={{ duration: 0.3, delay: 0.85, ease: "linear" }}
            exit={{ bottom: "100%", transition: { delay: 2.5, duration: 0.3 } }}
            id="line4L"
            className="absolute left-0 top-0 bottom-0  w-5 bg-[#D6D6D2]  "
          ></motion.div>

          <motion.div
            initial={{ right: "100%" }}
            animate={{ right: 0 }}
            transition={{ delay: 1.15, duration: 1 }}
            exit={{ right: "100%", transition: { delay: 1.5, duration: 0.5 } }}
            className="absolute top-0 bottom-0 h-screen   w-full bg-[#D6D6D2] "
          ></motion.div>
          {/* -------------------------------------------------------------------------------------------------- */}

            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh", transition: { delay: 0, duration: 1.2 } }}
              transition={{ duration: 2, delay: 2 }}
              className="z-50  flex h-16  gap-[1px] shadow-2xl lg:hidden"
            >
              {/* Previous button */}
              <div
                onClick={hundelPreviousButton}
                className={`flex w-2/5 items-center   justify-center gap-2  font-thin text-black shadow-xl  sm:text-2xl ${
                  prevBtnDisabled
                    ? "hover:cursor-not-allowed"
                    : "hover:cursor-pointer"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                <p>Previous</p>
              </div>
              {/* Next button */}
              <div
                onClick={hundelNextButton}
                className={`flex w-2/5 cursor-pointer  items-center justify-center  gap-2 font-thin text-black shadow-xl sm:text-2xl ${
                  nextBtnDisabled
                    ? "hover:cursor-not-allowed"
                    : "hover:cursor-pointer"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>

                <p>Next</p>
              </div>
              <div className="flex w-1/5 items-center  justify-center gap-2  font-thin text-black shadow-xl sm:text-2xl">
                <motion.svg
                  whileHover={{ rotate: 90 }}
                  onClick={() => {
                    project.setProjectNumber(0);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8  hover:cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 0.95, opacity: 1 }}
              transition={{ delay: 1.3, duration: 1.5 }}
              exit={{
                scale: 0.2,
                opacity: 0,
                transition: { delay: 0, duration: 1 },
              }}
              className="  z-50    h-screen  overflow-y-scroll border-Cblue scrollbar-hide lg:overflow-hidden lg:border-[20px]"
            >
              {/* {project.prjectNumber==1&&<Project1/>}
          {project.prjectNumber==2&&<Project2/>}  */}
             
                <Project1 />
             
            </motion.div>
        </motion.div>
    </div>
      
          
  );
};

export default Project1DetailsWrapper;

/*
<motion.div
        variants={child3}
        transition={{ duration: 1 }}
        id="line3T"
        className="absolute left-0 h-5 w-full bg-primary md:h-5 "
      ></motion.div>





      <motion.div
        variants={child4}
        transition={{ duration: 1 }}
        id="line4L"
        className="absolute top-0 h-screen w-5 bg-black md:w-5 "
      ></motion.div>
*/
