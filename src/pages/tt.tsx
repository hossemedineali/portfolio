import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TT = () => {
  const [show, setshow] = useState(false);
  return (
      <div className=" absolute top-0 bottom-0 left-0 right-0 bg-white">
      <button
        onClick={() => {
            setshow(!show);
        }}
        className="mx-auto"
        >
        toggle
      </button>
      <AnimatePresence>
          {show&&
        
        <motion.div 
        key='t'
          initial={{scale:0}}
          animate={{scale:1}}
          exit={{scale:0}}
          transition={{duration:3}}
            className="m-auto h-40 w-40 bg-Cviolet"></motion.div>
      
          }
          </AnimatePresence>

          <AnimatePresence>
          {!show&&
        
        <motion.div 
        key='t'
          initial={{scale:0}}
          animate={{scale:1}}
          exit={{scale:0}}
          transition={{duration:3}}
            className="m-auto h-40 w-40 bg-Cviolet"></motion.div>
      
          }
          </AnimatePresence>
    </div>
  );
};

const FF=()=>{
    return <AnimatePresence>
        
          <motion.div 
          key='t'
            initial={{scale:0}}
            animate={{scale:1}}
            exit={{scale:0}}
            transition={{duration:3}}
              className="m-auto h-40 w-40 bg-Cviolet"></motion.div>
        
      </AnimatePresence>
}
export default TT;
