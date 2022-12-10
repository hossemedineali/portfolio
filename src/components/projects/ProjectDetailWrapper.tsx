import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,

    transition: { staggerChildren: 1, delayChildren: 0.04 * i },
  }),
};

const child1 = {
  visible: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    width: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const child2 = {
  visible: {
    top: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    top:'100%',
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};



const child3 = {
  visible: {
    left: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    left: '99%',
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
const child4 = {
  visible: {
    height: "100%",
    transition: {
      duration: 1,
    },
  },
  hidden: {
    height: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
const ProjectDetailsWrapper = () => {
  return (
    <motion.div
     
      className="fixed top-0 left-0 right-0 bottom-0 z-50 "
    >
      <motion.div
     initial={{right:'100%'}}
     animate={{right:0}}
        transition={{ duration: 0.3 ,ease:'linear'}}
        id="line1B"
        className="absolute bottom-0 h-5 w-full bg-[#63635f]  "
      ></motion.div>


       <motion.div
       initial={{top:'100%'}}
       animate={{top:0}}
       transition={{duration:0.3,delay:0.25,ease:'linear'}}
        id="line2R"
        className="absolute right-0 top-0 bottom-0  w-5 bg-[#63635f] "
      ></motion.div>

      
       <motion.div
       initial={{left:'100%'}}
       animate={{left:0}}
       transition={{duration:0.3,delay:0.55,ease:'linear'}}
        id="line3T"
        className="absolute right-0 top-0 left-0  h-5 bg-[#63635f]  "
      ></motion.div> 

<motion.div
       initial={{bottom:'100%'}}
       animate={{bottom:0}}
       transition={{duration:0.3,delay:0.85,ease:'linear'}}
        id="line4L"
        className="absolute left-0 top-0 bottom-0  w-5 bg-[#63635f]  "
      ></motion.div> 


<motion.div 
initial={{right:'100%'}}
animate={{right:0}}
transition={{delay:1.15,duration:1}}
className="w-full h-screen absolute top-0   bottom-0 bg-[#63635f] "
>

</motion.div>







       
      
    </motion.div>
  );
};

export default ProjectDetailsWrapper;


/*
<motion.div
        variants={child3}
        transition={{ duration: 1 }}
        id="line3T"
        className="absolute left-0 h-5 w-full bg-primary md:h-5 "
      ></motion.div>





      <motion.div
        variants={child4}
        transition={{ duration: 1 }}
        id="line4L"
        className="absolute top-0 h-screen w-5 bg-black md:w-5 "
      ></motion.div>
*/