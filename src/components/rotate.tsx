import { motion } from "framer-motion";


const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i ,},
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      //y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration:10
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      //y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };


const Rotate = () => {
  return (
    <motion.div
      
      initial={{width:0}}
      animate={{width:'100%'}}
      transition={{duration:1}}
      className="text-6xl text-white overflow-hidden flex border-2"
    >
      {" "}
      {Array.from('TEXT text text').map((l,i)=>(
        <motion.span key={i} initial={{rotateY:180}} animate={{rotateY:0}} transition={{ delay:1,duration:1}} >{l}</motion.span>
      ))}
    </motion.div>
  );
};

export default Rotate;
