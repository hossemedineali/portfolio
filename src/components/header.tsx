import { motion, useCycle, Cycle } from "framer-motion";
import Menu from "./sections/menu";

const close = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-10 w-10 text-white"
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
    className="h-10 w-10 text-black"
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
    <div className="">
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 30 }}
        className={`absolute top-2 right-2 z-20  h-14 w-14 rounded-full  hover:cursor-pointer p-2 ${isOpen?'bg-[#D6D6D2]':''}`}
        onClick={() => toggleOpen()}
      >
        {isOpen ? open : close}
      </motion.button>

      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 30 }}
        className="relative flex py-5 px-5 "
      >
        <h1 className=" flex-grow-1 font-mono mr-auto text-4xl font-extrabold text-[#994AA6] md:ml-10 ">
         <span className="text-5xl ">{'<'}</span>HOSSEM<span className="text-5xl ">{'>'}</span>
        </h1>
      </motion.div>
      <motion.div
        className="h-[1px] bg-[#994AA6]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: 2, duration: 1 }}
      />
    </div>
  );
};

export default Header;
