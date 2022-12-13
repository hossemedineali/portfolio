import { AnimatePresence, motion } from "framer-motion";
import { useProjectModal } from "../../store/projects";
import p1 from "../../../public/p2-1.jpg";
import p2 from "../../../public/p2-2.jpg";
import p3 from "../../../public/p2-3.jpg";

import Image from "next/image";
import Link from "next/link";
const Project2 = () => {
  const stack = [
    "Nextjs",
    "Material UI",
    "Redux tool kit",
    "Axios",
    "ReactChartjs",
    "Firebase authentication",
    "Firebase firestore"
  ];
  const project = useProjectModal();
  return (
   

    <div className=" absolute  w-full overflow-hidden  lg:h-full  lg:max-h-screen">
      {/* ---------------------Phone navigation bar------------------------ */}

      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh", transition: { delay: 0, duration: 1.2 } }}
        transition={{ duration: 2, delay: 2 }}
        className="flex  h-16 gap-[1px]  shadow-2xl lg:hidden "
        >
        <div onClick={()=>{project.setProjectNumber(1)}} className="flex w-2/5 items-center   justify-center gap-2  font-thin text-black shadow-xl sm:text-2xl hover:cursor-pointer">
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
        <div onClick={()=>{project.setProjectNumber(3)}} className="flex w-2/5 items-center  justify-center gap-2  font-thin text-black shadow-xl sm:text-2xl hover:cursor-pointer">
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

      {/* ----------------------------------------------------- */}

      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 0.95 }}
        transition={{ delay: 1.3, duration: 1.5 }}
        exit={{
            scale: 1.5,
            opacity: 0,
            transition: { delay: 1, duration: 1 },
        }}
        className="      h-screen  overflow-y-scroll scrollbar-hide lg:overflow-hidden lg:border-[20px] "
        >
        <span className="absolute top-[-8px] right-[-7px] hidden h-10  w-10 bg-black  lg:flex">
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

        <div className="flex    flex-col overflow-hidden  scrollbar-hide lg:flex-row ">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{ delay: 2.26, duration: 1 }}
            exit={{ x: "-100%", transition: { duration: 1 } }}
            className="flex  flex-col items-center overflow-hidden px-5  font-Allerta font-bold   text-black  lg:w-1/2 lg:items-start  lg:px-14 lg:pt-20"
            >
            <h1 className="text-5xl ">MyCoin</h1>
            <h2 className="text-3xl ">Cryptocurrency web app</h2>
            <p className="opacity-85 mt-6 text-xl font-extralight ">
              In this project i used T3 Stack for the first time to build this
              full stack web application where users in tunisia can buy ,sell or
              rent properties{" "}
            </p>
            <div className="mt-5 mb-10 flex flex-wrap gap-2 lg:mb-0">
              {stack.map((item, index) => {
                  return (
                      <span
                      key={index}
                      className=" text-md rounded-sm  px-1 text-Cblue  "
                      >
                    #{item}
                  </span>
                );
            })}{" "}
            </div>

            <div className=" sm:mt-10 w-full flex flex-col sm:flex-row gap-5 justify-evenly  items-center">
              <Link href="https://my-coin-one.vercel.app/" target="_blank" className="max-w-fit group">
                <p className="text-3xl text-center">Live demo</p>
                <p className="bg-black w-0 group-hover:w-full transition-all duration-150 h-1"></p>
              </Link>
              <Link href="https://github.com/hossemedineali/MyCoin" target="_blank" className="max-w-fit group">
                <p className="text-3xl text-center">Source code</p>
                <p className="bg-black w-0 group-hover:w-full transition-all duration-150 h-1"></p>
              </Link>
            </div>
            
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.26, duration: 1 }}
            exit={{ scale: 0, transition: { duration: 1 } }}
            className=" lg:h-screen    lg:w-1/2 lg:overflow-y-scroll lg:scrollbar-hide  "
            >
            <div className="flex h-full flex-col gap-20 pt-14 pb-20 lg:pr-10">
              <Image src={p1} alt="screen-shot-1" />

              <Image src={p2} alt="screen-shot-1" />
              <Image src={p3} alt="screen-shot-1" />
              
             

              <div className="h-20"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
             
  );
};

export default Project2;
