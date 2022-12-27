import { Cycle, motion } from "framer-motion";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const menu = {
  hidden: {
    bottom: "100%",
    left: "100%",
    borderBottomLeftRadius: "50%",
    transition: {
      duration: 1,
    },
  },
  visible: {
    bottom: "0%",
    left: "0%",
    borderBottomLeftRadius: "0%",
    transition: {
      duration: 1,
    },
  },
};

const list = ["Home", "Works", "Skills", "Resume", "Contact"];

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

const Menu: React.FC<{ toggleOpen: Cycle; isOpen: boolean }> = ({
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="absolute z-10 ">
      <motion.div
        variants={menu}
        initial="hidden"
        animate="visible"
        exit={{
          bottom: "100%",
          left: "100%",
          borderBottomLeftRadius: "50%",
          transition: {
            when: "afterChildren",
            delay: 1,
            duration: 1,
          },
        }}
        className="fixed  top-0 left-0 right-0  bottom-0 z-10 bg-[#D6D6D2] "
      >
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "keyframes" }}
          exit={{ opacity: 0, x: "-100vw", transition: { duration: 1 } }}
          className=" absolute top-0 left-0 bottom-0  right-0"
        >
          {list.map((skil, index) => {
            if (index == 0) {
              return (
                <motion.div
                  key={index}
                  className="  flex h-1/5 items-center justify-center border-b-[1px] group hover:bg-black border-b-black text-6xl transition-colors duration-300 ease-linear  md:text-8xl "
                >
                  <p className="  group-hover:text-[#994AA6] ">

                  {skil}
                  </p>

                 {/*  <motion.div
                 
                    className="absolute group  group-hover:bg-[#D6D6D2]  right-0 flex py-1 rounded-full  "
                    onClick={() => toggleOpen()}
                  >
                    <h1 className="  group-hover:text-white font-mono mr-auto  font-extrabold text-[#994AA6] rounded-full    ">
                      {isOpen ? open : close}
                    </h1>
                  </motion.div> */}
                </motion.div>
              );
            }
            return (
              <motion.div
                key={index}
                className="flex h-1/5 items-center justify-center border-b-[1px] border-b-black text-6xl transition-colors duration-300 ease-linear hover:bg-black hover:text-[#994AA6] md:text-8xl "
              >
                {skil}
              </motion.div>
            );
          })}

          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;

/*
 menu List

 ------------------------------------------------

 <AnimatePresence>
              <motion.div
                variants={sidebar}
                initial={{}}
                className=" absolute top-0 left-0 bottom-0  right-0"
                >
                {list.map((skil, index) => {
                  return (
                    <motion.div
                    initial={{ x: "-100vw", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    exit={{ x: "-100vw", opacity: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    key={index}
                    className="flex h-1/5 items-center justify-center border-b-[1px] border-b-black text-6xl transition-colors duration-300 ease-linear hover:bg-black hover:text-[#994AA6] md:text-8xl "
                    >
                      {skil}
                    </motion.div>
                  );
                })}
              </motion.div>
                </AnimatePresence>
*/
