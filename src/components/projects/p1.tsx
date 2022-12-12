import { motion } from "framer-motion";
import { useProjectModal } from "../../store/projects";

const Project1 = () => {
  const project = useProjectModal();
  return (
    <div className=" relative h-full  w-full    ">
      <motion.div initial={{y:'-100vh'}} animate={{y:0}} exit={{y:'-100vh',transition:{delay:0,duration:1.2}}} transition={{duration:2,delay:2}} className="flex  h-16 lg:hidden">
        <div className="flex w-2/5 items-center   justify-center gap-2 bg-[#383231] font-thin text-white sm:text-2xl">
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
        <div className="flex w-2/5 items-center  justify-center gap-2 bg-[#3d3736] font-thin text-white sm:text-2xl">
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
        <div className="flex w-1/5 items-center  justify-center gap-2 bg-[#5f5a5a] font-thin text-white sm:text-2xl">
          <motion.svg
          whileHover={{rotate:90}}
          onClick={()=>{project.setProjectNumber(0)}}
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
        initial={{ scale: 1.5 }}
        animate={{ scale: 0.95 }}
        transition={{ delay: 1.3, duration: 1.5 }}
        exit={{
          scale: 1.5,
          opacity: 0,
          transition: { delay: 1, duration: 1 },
        }}
        className=" relative h-full  w-full  lg:border-[20px] "
      >
        <span className="absolute top-[-10px]  right-[-10px] z-50  hidden h-8 w-8 bg-black md:top-[-20px] md:right-[-20px] md:h-12 md:w-12 lg:flex">
          <motion.svg
            onClick={() => {
              project.setProjectNumber(0);
            }}
            whileHover={{ rotate: 90 }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="m-auto h-10 w-10 text-white hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </motion.svg>
        </span>
        <div className="flex h-full w-full  flex-col lg:flex-row">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{ delay: 2.26, duration: 1 }}
            exit={{ x: "-100%", transition: { duration: 1 } }}
            className="h-full border-2 border-Cviolet lg:w-1/2"
          >
            
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.26, duration: 1 }}
            exit={{ scale: 0, transition: { duration: 1 } }}
            className="h-full border-2 border-primary lg:w-1/2"
          >
            {" "}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project1;
