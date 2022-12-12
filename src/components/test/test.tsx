import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TT = () => {
  const [show, setshow] = useState(false);
  return (
      <div className="  bg-white">
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
        
        <FF/>
      
          }
          </AnimatePresence>

          <AnimatePresence>
          {!show&&
        
       <FF/>
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
