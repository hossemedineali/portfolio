import Loader from "../loader";
import { motion } from "framer-motion";
import { setMaxIdleHTTPParsers } from "http";

const Section1 = () => {

 

  return (
    <div className=" mt-10 flex   flex-col items-center  md:flex-row md:justify-evenly   ">
      <div className="md:max-w-1/2  mb-10 md:mb-0">
        <Loader />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="shadow-4xl shadow-white font-bold py-2 w-[320px] rounded-2xl border-2 bg-[#C7BCA1] px-10 pt-5 text-3xl"
      >
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
      </motion.div>
    </div>
  );
};

export default Section1;
