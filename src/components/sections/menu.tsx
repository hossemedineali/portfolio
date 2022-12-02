import {
  animate,
  AnimatePresence,
  Cycle,
  motion,
  
} from "framer-motion";


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
    //  bottom:['100%','90%','80%','70%','60%','50%','40%','30%','20%','10%','0%'],
    //  left:['100%','90%','80%','70%','60%','50%','40%','30%','20%','10%','0%'],

    bottom: "0%",
    left: "0%",
    borderBottomLeftRadius: "0%",
    transition: {
      duration: 1,
    },
  },
};

const list = ["Home", "Works", "Skills", "Resume", "Contact"];

const Menu: React.FC<{ toggleOpen: Cycle; isOpen: boolean }> = ({
  toggleOpen,
  isOpen,
}) => {
  return (
    <div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="absolute top-0 bottom-0 left-0 right-0 bg-[#D6D6D2]"
            variants={menu}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {" "}
          </motion.div>
        )}
      </AnimatePresence>
     {isOpen&& <motion.div
        variants={sidebar}
        initial={{}}
        className=" absolute top-0 left-0 bottom-0 right-0"
      >
        {list.map((skil,index)=>{
                return <motion.div initial={{x:'-100vw'}} animate={{x:'0'}} exit={{x:'-100vw'}} transition={{delay:1,duration:1}}  key={index} className="hover:bg-black hover:text-[#994AA6] h-1/5 border-b-[1px] border-b-black flex justify-center items-center text-6xl md:text-8xl ">
                    {skil}
                </motion.div>
            })}
      </motion.div>}
    </div>
  );
};

export default Menu;
