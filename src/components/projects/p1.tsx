import { AnimatePresence, motion } from "framer-motion";
import { useProjectModal } from "../../store/projects";
import p11 from "../../../public/p1-1.png";
import p12 from "../../../public/p1-2.png";
import p13 from "../../../public/p1-3.png";
import p14 from "../../../public/p1-4.png";
import p15 from "../../../public/p1-5.png";
import p16 from "../../../public/p1-6.png";
import p17 from "../../../public/p1-7.png";
import p21 from "../../../public/p2-1.jpg";
import p22 from "../../../public/p2-2.jpg";
import p23 from "../../../public/p2-3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Project1 = () => {
  
  const project = useProjectModal();
  const hundelNextButton=()=>{
    if(project.prjectNumber==4){
      return
    }

    project.setProjectNumber(project.prjectNumber+1)
   
  }

  const hundelPreviousButton=()=>{
    if(project.prjectNumber==1){
      return
    }
    project.setProjectNumber(project.prjectNumber-1)
  }

  const prevBtnDisabled=project.prjectNumber==1
  const nextBtnDisabled=project.prjectNumber==4
  return (
    <>
    <div className=" absolute  w-full overflow-hidden  lg:h-full  lg:max-h-screen">
      {/* ---------------------Phone navigation bar------------------------ */}

     

      {/* ----------------------------------------------------- */}

      <motion.div
        
       // className="      h-screen  overflow-y-scroll scrollbar-hide lg:overflow-hidden border-Cblue lg:border-[20px] "
      >
        {/*------ close icon--------- */}
        <span className="absolute top-[-8px] right-[-7px] hidden h-10  w-10 bg-Cblue  lg:flex">
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
        {/* ------------------------ */}
     
          
          {project.prjectNumber == 1 && <P1 />}
          {project.prjectNumber == 2 && <P2 />}
        
      </motion.div>
      
    </div>
    </>
  );
};

const P1 = () => {
  const stack = [
    "Nextjs",
    "Type script",
    "Tailwind",
    "TRPC",
    "Next auth",
    "Prisma",
    "Cloudinary",
    "Bcrypt",
    "Node mailer",
    "React form hook",
    "Zod",
    "Zustand",
    "leaflet",
  ];
  return (
    <div className="flex    flex-col overflow-hidden  scrollbar-hide lg:flex-row ">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0" }}
        transition={{ delay: 2.26, duration: 1 }}
        exit={{ x: "-100%", transition: { duration: 1 } }}
        className="flex  flex-col items-center overflow-hidden px-5  font-Allerta font-bold   text-black  lg:w-1/2 lg:items-start  lg:px-14 lg:pt-20"
      >
        <h1 className="text-5xl ">Dari</h1>
        <h2 className="text-3xl ">Real estate web app</h2>
        <p className="opacity-85 mt-6 text-xl font-extralight ">
          In this project i used T3 Stack for the first time to build this full
          stack web application where users in tunisia can buy ,sell or rent
          properties.
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

        <div className=" flex w-full flex-col items-center justify-evenly gap-5 sm:mt-10  sm:flex-row">
          <Link
            href="https://dari2.vercel.app/"
            target="_blank"
            className="group max-w-fit"
          >
            <p className="text-center text-3xl">Live demo</p>
            <p className="h-1 w-0 bg-black transition-all duration-150 group-hover:w-full"></p>
          </Link>
          <Link
            href="https://github.com/hossemedineali/dari2"
            target="_blank"
            className="group max-w-fit"
          >
            <p className="text-center text-3xl">Source code</p>
            <p className="h-1 w-0 bg-black transition-all duration-150 group-hover:w-full"></p>
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
          <Image src={p11} alt="screen-shot-1" />

          <Image src={p12} alt="screen-shot-1" />
          <Image src={p13} alt="screen-shot-1" />
          <Image src={p14} alt="screen-shot-1" />
          <Image src={p15} alt="screen-shot-1" />
          <Image src={p16} alt="screen-shot-1" />
          <Image src={p17} alt="screen-shot-1" className="mb-20" />

          <div className="h-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

const P2 = () => {
  const stack = [
    "Nextjs",
    "Material UI",
    "Redux tool kit",
    "Axios",
    "ReactChartjs",
    "Firebase authentication",
    "Firebase firestore",
  ];
  return (
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
          A full stack web app where users can get real time information about
          any cryptocurrency in the market and can also create and manage
          differents portfolios.
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

        <div className=" flex w-full flex-col items-center justify-evenly gap-5 sm:mt-10  sm:flex-row">
          <Link
            href="https://my-coin-one.vercel.app/"
            target="_blank"
            className="group max-w-fit"
          >
            <p className="text-center text-3xl">Live demo</p>
            <p className="h-1 w-0 bg-black transition-all duration-150 group-hover:w-full"></p>
          </Link>
          <Link
            href="https://github.com/hossemedineali/MyCoin"
            target="_blank"
            className="group max-w-fit"
          >
            <p className="text-center text-3xl">Source code</p>
            <p className="h-1 w-0 bg-black transition-all duration-150 group-hover:w-full"></p>
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
          <Image src={p21} alt="screen-shot-1" />

          <Image src={p22} alt="screen-shot-1" />
          <Image src={p23} alt="screen-shot-1" />

          <div className="h-20"></div>
        </div>
      </motion.div>
    </div>
  );
};
export default Project1;
