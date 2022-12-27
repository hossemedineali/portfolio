import Loader from "../loader";
import { motion, useCycle } from "framer-motion";
import Header from "../header";


const Section1 = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div className="relative  z-0 h-screen ">
      
      <div className="   flex   justify-center items-center   h-full ">
        <div className="md:max-w-1/2  mb-10 md:mb-0">
          <Loader />
        </div>
    
      </div>

      <div className=" absolute  bottom-0 mt-8 flex  h-32 justify-center  w-full">
        <Arrows />
      </div>
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
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5    "
      />

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>

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
