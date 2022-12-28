import { motion, useCycle, Cycle } from "framer-motion";
import Menu from "./sections/menu";
import LogoSVG from "./UI/logosvg";

const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-[15vw] w-[15vw] text-white sm:h-[8vw] sm:w-[8vw] 2xl:h-[6vw] 2xl:w-[6vw]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const open = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-[15vw] w-[15vw] text-black sm:h-[8vw] sm:w-[8vw] 2xl:h-[6vw] 2xl:w-[6vw]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Header: React.FC<{ toggleOpen: Cycle; isOpen: boolean }> = ({
  toggleOpen,
  isOpen,
}) => {
  return (
    <div className="  ">
      <motion.div
      //  initial={{ x: "-100vh" }}
       // animate={{ x: 0 }}
       // transition={{ delay: 1, type: "spring", stiffness: 30 }}
        className="fixed z-10 flex py-1  "
      >
        <h1 className=" flex-grow-1 font-mono fixed mr-auto text-[10vw] font-extrabold text-[#994AA6] hover:cursor-pointer  sm:text-[5vw]   2xl:text-[4vw] ">
          {/* HOSSEM */}

          <LogoSVG/>


        </h1>
      </motion.div>


      <div>
        
      </div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 30 }}
        className={`fixed right-1 z-20 mr-2 mt-2  flex h-[60px] w-[60px] items-center     justify-center rounded-full  `}
      >
        <label
          htmlFor="check"
          className={`bar relative  h-[40px]   w-[50px] cursor-pointer   `}
        >
          <input
            onClick={() => toggleOpen()}
            id="check"
            type="checkbox"
            className="peer hidden"
          />

          <span className=" top absolute left-0 top-0 inline-block h-[7px] w-[50px] rounded-[100px] bg-[#994AA6] transition-all duration-300 ease-linear peer-checked:left-[5px] peer-checked:w-[48px]  peer-checked:origin-top-left peer-checked:rotate-45  ">
            {" "}
          </span>
          <span className=" middle peer-checked:translateX-[-20px] absolute left-0 top-[17px] inline-block h-[7px] w-[50px] rounded-[100px] bg-[#994AA6] transition-all duration-300 ease-linear peer-checked:opacity-0"></span>
          <span className=" bottom absolute left-0 bottom-0 inline-block h-[7px] w-[50px] rounded-[100px] bg-[#994AA6] transition-all duration-300 ease-linear peer-checked:-bottom-[1px] peer-checked:w-[45px] peer-checked:origin-top-left peer-checked:-rotate-45"></span>
        </label>

        {/*    <h1 className=" flex-grow-1  font-mono mr-auto text-[10vw] sm:text-[5vw] font-extrabold  text-[#994AA6] md:ml-10  hover:cursor-pointer ">
        {isOpen ? open : close}
        </h1>  */}
      </motion.div>
    </div>
  );
};

export default Header;

/**
   <div className="flex align-middle justify-between ">
      

      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 30 }}
        className="relative flex py-1 px-5 "
      >
        <h1 className=" flex-grow-1 font-mono mr-auto text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold  text-[#994AA6] md:ml-10  hover:cursor-pointer ">
          Hossem
        </h1>
      </motion.div>
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 30 }}
        className={`${isOpen?'fixed':'absolute'} my-auto z-20 w-10 h-10 sm:w-14 md:h-14   top-[-1px] right-2  rounded-full  p-2 hover:cursor-pointer ${
          isOpen ? "bg-[#D6D6D2]" : ""
        }`}
        onClick={() => toggleOpen()}
      >
        {isOpen ? open : close}
      </motion.button>
      </div>
 
 */
