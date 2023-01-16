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
import p31 from "../../../public/p3-1.jpg"
import p32 from "../../../public/p3-2.jpg"
import soon from '../../../public/soon.png'
import Image from "next/image";
import Link from "next/link";

const ProjectsDetails:React.FC<{isLoading:boolean,hundelPreviousButton:()=>void,hundelNextButton:()=>void}> = ({isLoading,hundelPreviousButton,hundelNextButton}) => {
  
  const project = useProjectModal();
  const prevBtnDisabled = project.prjectNumber == 1;
  const nextBtnDisabled = project.prjectNumber == 4;
  
  
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

            {/* -------Bottom navigation for pc */}
        <div className="absolute bottom-0 left-0 w-1/4 hidden h-10 z-50 text-black font-Allerta  bg-Cblue  lg:flex">
        <div
                onClick={hundelPreviousButton}
                className={`flex w-2/5 items-center   justify-center gap-2  font-thin  shadow-xl  sm:text-2xl  ${
                  prevBtnDisabled
                    ? "hover:cursor-not-allowed"
                    : "hover:cursor-pointer hover:text-white transition-all duration-200"
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
                className={`flex w-2/5 cursor-pointer ml-auto items-center justify-center  gap-2 font-thin shadow-xl sm:text-2xl ${
                  nextBtnDisabled
                    ? "hover:cursor-not-allowed"
                    : "hover:cursor-pointer hover:text-white transition-all duration-200"
                }`}
              >
                <p>Next</p>
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

              </div>
        </div>
        {/* ------------------------ */}
     
          <AnimatePresence>

          {project.prjectNumber == 1 && <P1 isLoading={isLoading} />}
          </AnimatePresence>
          <AnimatePresence>
          {project.prjectNumber == 2 && <P2 isLoading={isLoading} />}
          </AnimatePresence>

          <AnimatePresence>
          {project.prjectNumber == 3 && <P3 isLoading={isLoading} />}
          </AnimatePresence>

          <AnimatePresence>
          {project.prjectNumber == 4 && <P4 isLoading={isLoading} />}
          </AnimatePresence>
        
      </motion.div>
      
    </div>
    </>
  );
};

const P1:React.FC<{isLoading:boolean}> = ({isLoading}) =>{
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
      {isLoading&&<span className="absolute top-0 left-0 right-0 h-screen flex justify-center lg:items-center ">
      <svg className="m-auto text-Cblue" width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="#000" stroke="#000" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle cx="5" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;5;50;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     values="5;27;49;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     from="5" to="5"
                     values="5;50;50;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     from="27" to="27"
                     values="27;49;5;27"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;50;5;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     from="49" to="49"
                     begin="0s" dur="2.2s"
                     values="49;5;27;49"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
</span>}
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

const P2:React.FC<{isLoading:boolean}> = ({isLoading}) =>{
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
       {isLoading&&<span className="absolute top-0 left-0 right-0 h-screen flex justify-center lg:items-center ">
       <svg className="m-auto text-Cblue" width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="#000" stroke="#000" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle cx="5" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;5;50;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     values="5;27;49;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     from="5" to="5"
                     values="5;50;50;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     from="27" to="27"
                     values="27;49;5;27"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;50;5;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     from="49" to="49"
                     begin="0s" dur="2.2s"
                     values="49;5;27;49"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
        </span>}
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

const P3:React.FC<{isLoading:boolean}> = ({isLoading}) => {
  const stack = [
    "Nextjs",
   
  ];
  return (
    <div className="flex    flex-col overflow-hidden  scrollbar-hide lg:flex-row ">
       {isLoading&&<span className="absolute top-0 left-0 right-0 h-screen flex justify-center lg:items-center ">    <svg className="m-auto text-Cblue" width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="#000" stroke="#000" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle cx="5" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;5;50;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     values="5;27;49;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     from="5" to="5"
                     values="5;50;50;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     from="27" to="27"
                     values="27;49;5;27"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;50;5;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     from="49" to="49"
                     begin="0s" dur="2.2s"
                     values="49;5;27;49"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>..</span>}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0" }}
        transition={{ delay: 2.26, duration: 1 }}
        exit={{ x: "-100%", transition: { duration: 1 } }}
        className="flex  flex-col items-center overflow-hidden px-5  font-Allerta font-bold   text-black  lg:w-1/2 lg:items-start  lg:px-14 lg:pt-20"
      >
        <h1 className="text-5xl ">Breaking Bad</h1>
        <h2 className="text-3xl ">The greatest tv show ever</h2>
        <p className="opacity-85 mt-6 text-xl font-extralight ">
          Trying Next.js for the first time i made this simple website where i used  <Link className="decoration-solid decoration-Cblue text-Cblue" target={'blank'} href={'https://breakingbadapi.com/'}>this API</Link> that seems not working any more .
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
            href="https://breaking-bad-chi.vercel.app/"
            target="_blank"
            className="group max-w-fit"
          >
            <p className="text-center text-3xl">Live demo</p>
            <p className="h-1 w-0 bg-black transition-all duration-150 group-hover:w-full"></p>
          </Link>
          <Link
            href="https://github.com/hossemedineali/breakingBad_app_nextjs"
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
          <Image src={p31} alt="screen-shot-1" />

          <Image src={p32} alt="screen-shot-1" />
          

          <div className="h-20"></div>
        </div>
      </motion.div>
    </div>
  );
};


const P4:React.FC<{isLoading:boolean}> = ({isLoading}) => {
  const stack = [
    ''
  ];
  return (
    <div className="flex    flex-col overflow-hidden  scrollbar-hide lg:flex-row ">
       {isLoading&&<span className="absolute top-0 left-0 right-0 h-screen flex justify-center lg:items-center ">    <svg className="m-auto text-Cblue" width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="#000" stroke="#000" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle cx="5" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;5;50;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     values="5;27;49;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     from="5" to="5"
                     values="5;50;50;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     from="27" to="27"
                     values="27;49;5;27"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;50;5;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     from="49" to="49"
                     begin="0s" dur="2.2s"
                     values="49;5;27;49"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg></span>}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0" }}
        transition={{ delay: 2.26, duration: 1 }}
        exit={{ x: "-100%", transition: { duration: 1 } }}
        className="flex  flex-col items-center overflow-hidden px-5  font-Allerta font-bold   text-black  lg:w-1/2 lg:items-start  lg:px-14 lg:pt-20"
      >
        <h1 className="text-5xl ">Soon...</h1>
        <h2 className="text-3xl ">Shop app  With accounting system</h2>
        <p className="opacity-85 mt-6 text-xl font-extralight ">
         
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

    

      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.26, duration: 1 }}
        exit={{ scale: 0, transition: { duration: 1 } }}
        className=" lg:h-screen    lg:w-1/2 lg:overflow-y-scroll lg:scrollbar-hide  "
      >
        <div className="flex h-full flex-col gap-20 pt-14 pb-20 lg:pr-10">
          <Image src={soon} className='h-full w-full' alt="screen-shot-1" />

          
          <div className="h-20"></div>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectsDetails;
