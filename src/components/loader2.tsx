import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05 * i,
    },
  }),
};

const child = {
  visible: {
    opacity: 1,
    //y:0,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    //y:20,
    x: -20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 500,
    },
  },
};

const text1 = "Hi there!".split(" ");
const text2 = "I am Hossem ".split(" ");
const text3 = "A web developper".split(" ");

const Loader = () => {
  return (
    <div className="justify-left items-top relative   h-screen w-full ">
      <motion.div
        className="absolute"
        initial={{ top: "25%", left: "25%" }}
        animate={{ top: "20%", left: "7%" }}
        transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
      >
        <motion.p
          className="flex flex-wrap overflow-hidden break-words py-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text1.map((t, i) => {
            return (
              <motion.span
                variants={child}
                key={i}
                className="mr-[5px] font-mono text-2xl text-white hover:text-[#120a03] md:mr-[9px] md:text-5xl  md:font-bold"
              >
                {t}
              </motion.span>
            );
          })}
        </motion.p>

        <motion.p
          className="flex flex-wrap overflow-hidden relative break-words py-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={child}
            className="mr-[5px] font-mono text-2xl text-white hover:text-[#120a03] md:mr-[9px] md:text-5xl  md:font-bold"
          >
            I
          </motion.span>

          <motion.span
            variants={child}
            className="mr-[5px] font-mono text-2xl text-white hover:text-[#120a03] md:mr-[9px] md:text-5xl  md:font-bold"
          >
            am
          </motion.span>
          <motion.span
           
            transition={{ delay: 5, duration: 2 }}
            variants={child}
            className="absolute left-[25%] mr-[5px] font-mono text-2xl text-white hover:text-[#120a03] md:mr-[9px] md:text-5xl  md:font-bold"
          >
            Hossem
          </motion.span>
        </motion.p>

        <motion.p
          className="flex flex-wrap overflow-hidden break-words py-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text3.map((t, i) => {
            return (
              <motion.span
                variants={child}
                key={i}
                className="mr-[5px] font-mono text-2xl text-white transition-all duration-150 hover:text-red-900 md:mr-[9px] md:text-5xl  md:font-bold"
              >
                {t}
              </motion.span>
            );
          })}
        </motion.p>
      </motion.div>
      
    </div>
  );
};

export default Loader;
