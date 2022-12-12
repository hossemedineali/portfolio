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

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className=" ">
      {isOpen && (
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
          {isOpen && (
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ delay: 1, duration: 1, type: "keyframes" }}
              exit={{ opacity: 0, x: "-100vw", transition: { duration: 1 } }}
              className=" absolute top-0 left-0 bottom-0  right-0"
            >
              {list.map((skil, index) => {
                return (
                  <motion.div
                    // initial={{ x: "-100vw", opacity: 0 }}
                    //animate={{ x: "0", opacity: 1 }}
                    //exit={{ x: "-100vw", opacity: 0 }}
                    //transition={{ delay: 1, duration: 1 }}
                    key={index}
                    className="flex h-1/5 items-center justify-center border-b-[1px] border-b-black text-6xl transition-colors duration-300 ease-linear hover:bg-black hover:text-[#994AA6] md:text-8xl "
                  >
                    {skil}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      )}
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
