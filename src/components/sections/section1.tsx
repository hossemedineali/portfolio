import Loader from "../loader";
import { motion, useScroll, useTransform } from "framer-motion";
import Code from "../UI/code";
import { useRef } from "react";

const Section1 = () => {
  return (
    <div className="relative  mb-10 xl:h-[calc(screen-100px)]">
   
     
      
      <div className="items-top md:mt-20   flex my-auto    flex-col items-center  md:flex-row md:justify-evenly   ">
        <div className="md:max-w-1/2  mb-10 md:mb-0">
          <Loader />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 2, when: "beforeChildren" }}
          className="shadow-4xl  relative -z-0 max-w-[320px] w-full rounded-2xl bg-[#D6D6D2] px-10 pb-6 pt-5 text-3xl font-bold shadow-white"
        >
          <div className="absolute top-0 left-0 flex h-10 w-20 items-center justify-center gap-2  align-middle">
            <div className="h-3 w-3 rounded-full  bg-[#8a0a0a]"></div>
            <div className="h-3 w-3 rounded-full  bg-[#8a830a]"></div>
            <div className="h-3 w-3 rounded-full  bg-[#238a0a]"></div>
          </div>
          <div>
            <Code />
          </div>
        </motion.div>
      </div>

     {/*  <div className=" mt-8 flex  h-32 justify-center">
        <Arrows />
      </div> */}
    </div>
  );
};

const Arrows = () => {
  return (
    <motion.svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-20 w-20 "
      initial={{ opacity: 0, y: 0, color: "fff" }}
      animate={{
        opacity: [0, 0.5, 1, 0.5, 0],
        y: [0, 20, 30, 50, 60],
        color: ["#fff", "#ff0000", "#ff7a7a", "#ffcfcf", "#fdf4da"],
      }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    >
      <motion.path
        fill="none"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15   5.25l-7.5 7.5-7.5-7.5m15   "
      />
    </motion.svg>
  );
};

export default Section1;

/*

  <p className="text-Cviolet">
          While <span>(</span> <span className="text-Cblue">alive</span>{" "}
          <span>)</span>
        </p>
        <p className="text-Cviolet">{"{"}</p>

        <p className="text-Cyellow">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eat{" "}
          <span className="text-Cblue">()</span>
        </p>
        <p className="text-Cyellow">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sleep{" "}
          <span className="text-Cblue">()</span>
        </p>
        <p className="text-Cyellow">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;code{" "}
          <span className="text-Cblue">()</span>
        </p>
        <p className="text-Cyellow">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;repeat{" "}
          <span className="text-Cblue">()</span>
        </p>
        <p className="text-Cviolet">{"}"}</p>
*/
