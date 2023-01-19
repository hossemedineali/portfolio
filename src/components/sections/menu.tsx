import { type Cycle, motion } from "framer-motion";
import { useScrollTo } from "../../store/projects";



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

const list = ["Home", "Works", "Skills", "About", "Contact"];





const Menu: React.FC<{ toggleOpen: Cycle; isOpen: boolean }> = ({
  toggleOpen
}) => {

  
const scrollto=useScrollTo()
  return (
    <div className="absolute z-20 ">
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

                
                </motion.div>
              );
            }
            return (
              <motion.div
                key={index}
                onClick={()=>{scrollto.setScrollTo(index+1);toggleOpen()}}
                
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

