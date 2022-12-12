import { motion } from "framer-motion";
import { useProjectModal } from "../../store/projects";

const Project1 = () => {
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
  const project = useProjectModal();
  return (
    <div className=" absolute  w-full lg:h-full  lg:max-h-screen  overflow-hidden">
      {/* ---------------------Phone navigation bar------------------------ */}

      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh", transition: { delay: 0, duration: 1.2 } }}
        transition={{ duration: 2, delay: 2 }}
        className="flex  h-16 lg:hidden  gap-[1px] shadow-2xl "
       >
        <div className="flex w-2/5 items-center   justify-center gap-2  font-thin text-black sm:text-2xl shadow-xl">
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
        <div className="flex w-2/5 items-center  justify-center gap-2  font-thin text-black sm:text-2xl shadow-xl">
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
        <div className="flex w-1/5 items-center  justify-center gap-2  font-thin text-black sm:text-2xl shadow-xl">
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
        className="      lg:border-[20px]  h-screen scrollbar-hide overflow-y-scroll "
      >
        <span className="absolute hidden bg-black h-10 w-10  top-[-12px] right-[-12px]  lg:flex">
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


        <div className="flex h-full w-full   flex-col overflow-y-scroll scrollbar-hide lg:flex-row lg:overflow-visible">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{ delay: 2.26, duration: 1 }}
            exit={{ x: "-100%", transition: { duration: 1 } }}
            className="flex  flex-col items-center px-5 font-Allerta  font-bold text-black   lg:w-1/2  lg:items-start lg:px-14  lg:pt-20"
          >
            <h1 className="text-5xl ">Dari</h1>
            <h2 className="text-3xl ">Real estate web app</h2>
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
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.26, duration: 1 }}
            exit={{ scale: 0, transition: { duration: 1 } }}
            className="    lg:w-1/2 lg:overflow-y-scroll lg:scrollbar-hide  "
          >
            <div className=" h-full pt-8">
              <div className="mb-3 h-[350px] border-2 text-black">1</div>
              <div className="mb-3 h-[350px] border-2 text-Cviolet">2</div>
              <div className="mb-3 h-[350px] border-2 text-black">3</div>
              <div className="mb-3 h-[350px] border-2 text-Cviolet">4</div>
              <div className="mb-3 h-[350px] border-2 text-black">5</div>
              <div className=" h-[350px] border-2 text-Cviolet mb-20">6</div>
              <div className="mb-3 h-[350px] border-2 text-black">1</div>
              <div className="mb-3 h-[350px] border-2 text-Cviolet">2</div>
              <div className="mb-3 h-[350px] border-2 text-black">3</div>
              <div className="mb-3 h-[350px] border-2 text-Cviolet">4</div>
              <div className="mb-3 h-[350px] border-2 text-black">5</div>
              <div className=" h-[350px] border-2 text-Cviolet mb-20">6</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project1;
