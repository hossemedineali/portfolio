import { motion } from "framer-motion";


const container = {
  hidden: { width: '0%' },
  visible: (i = 1) => ({
    width: '100%',
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    //opacity: 1,
    scale:1,
    rotateY:0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      bounce:100
    },
  },
  hidden: {
   // opacity: 0,
    scale:0,
    rotateY:180,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
const text = [['Hi!'],['I am Hossem'],['a web developper']]
const text1 = Array.from("Hi there!"); // "Hi there!".split(" ");
const text2 = Array.from("I am Hossem "); // "I am Hossem edine ali".split(" ");
const text3 = Array.from("A web developper"); // "A web developper".split(" ");

const Loader = () => {
  return (
    <div className="font-black font-Allerta text-center  text-2xl  sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl  text-white ">
      <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-2"
    >
      {text1.map((letter, index) => (
        <motion.span  variants={child} key={index}>

          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>

    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-2"
    >
      {text2.map((letter, index) => (
        <motion.span  variants={child} key={index} className={`${index>4?'text-[#994AA6]':''}`}>

          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>

    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="py-2"
    >
      {text3.map((letter, index) => (
        <motion.span  variants={child} key={index}>

          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>

   
    </div>
  );
};

export default Loader;
