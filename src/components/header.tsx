import { motion,type Cycle, useScroll, useTransform } from "framer-motion";
import LogoSVG from "./UI/logosvg";


const Header = () => {


  return (
    <div className="  ">
      <motion.div

        className="fixed z-10 flex py-1  "
      >
        <h1 className=" flex-grow-1 font-mono fixed mr-auto text-[10vw] font-extrabold text-[#994AA6] hover:cursor-pointer  sm:text-[5vw]   2xl:text-[4vw] ">
          {/* HOSSEM */}

          <LogoSVG/>


        </h1>
      </motion.div>


      <div>
        
      </div>

   
    </div>
  );
};




export default Header;
