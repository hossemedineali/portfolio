import { useInView ,motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import { useRef ,useState} from "react";
import useWindowSize from "../../helper/useWindowSize";

const Glitch:React.FC<{rangeTopGlitchFixedStart:number}> = ({rangeTopGlitchFixedStart}) => {
  const {scrollY}=useScroll()
  const {height}=useWindowSize()
  const [word,setWord]=useState("Speciality")
  scrollY.onChange((current)=>{
    if(rangeTopGlitchFixedStart==0) return
    if(current>rangeTopGlitchFixedStart&&current<rangeTopGlitchFixedStart+height*0.25){
      return  setWord('Speciality')
     
    }
    if(current>rangeTopGlitchFixedStart+height*0.25&&current<rangeTopGlitchFixedStart+height*0.5){
      return setWord('Job')
      
    }

    if(current>rangeTopGlitchFixedStart+height*0.5&&current<rangeTopGlitchFixedStart+height*0.75){
      return setWord('Passion')
    }
  })
  
  return (
    <div className="flex h-screen w-full   flex-col items-center text-white ">
      <p  className="  glitch  text-[17vw] sm:text-[13vw] md:text-[9vw] lg:text-[6vw] font-bold transition duration-150 ease-in-out  ">
        <span aria-hidden="true">Bring </span>
        Bring
        <span  aria-hidden="true">Bring </span>
      </p>

      
      <p  className="glitch  text-[17vw] sm:text-[14vw] md:text-[10vw] lg:text-[7vw] font-bold transition duration-150 ease-in-out  ">
        <span aria-hidden="true">your</span>
        your
        <span aria-hidden="true">your</span>
      
      </p>
      
      
      <p  className="glitch  text-[9vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold transition duration-150 ease-in-out  ">
        <span aria-hidden="true">idea to life</span>
        idea to life
        <span aria-hidden="true">idea to life</span>
      </p>
      
      
      <p  className="glitch  text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[7vw] font-bold transition duration-150 ease-in-out  ">
        <span aria-hidden="true">is my</span>
        is my
        <span aria-hidden="true">is my</span>
      </p>
      <AnimatePresence>
      </AnimatePresence>
      {word=='Speciality'&&<AnimatePresence><motion.p initial={{y:20,opacity:0}}  animate={{y:0,opacity:1}} exit={{y:'-20',opacity:0}} transition={{duration:1}} className="glitch  text-[15vw] sm:text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold transition duration-150 ease-in-out  ">
        <span aria-hidden="true">Speciality</span>
        Speciality
        <span aria-hidden="true">Speciality</span>
      </motion.p> </AnimatePresence>}
      {word=='Job'&&<AnimatePresence><motion.p initial={{y:20,opacity:0}}  animate={{y:0,opacity:1}} exit={{y:'-20',opacity:0}} transition={{duration:1}}  className="glitch  text-[15vw] sm:text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold transition duration-150 ease-in-out  ">
        <span aria-hidden="true">Job</span>
        Job
        <span aria-hidden="true">Job</span>
      </motion.p> </AnimatePresence>}
      {word=='Passion'&&<AnimatePresence><motion.p initial={{y:20,opacity:0}}  animate={{y:0,opacity:1}} exit={{y:'-20',opacity:0}} transition={{duration:1}} className="glitch  text-[15vw] sm:text-[14vw] md:text-[10vw] lg:text-[9vw] font-bold transition duration-150 ease-in-out  ">
        <span aria-hidden="true">Passion</span>
        Passion
        <span aria-hidden="true">Passion</span>
      </motion.p> </AnimatePresence>}
      
      
        
    </div>
  );
};

export default Glitch;
