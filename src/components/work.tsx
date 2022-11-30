import Image from "next/image";
import img2 from "../../public/img2.jpg";
import { motion } from "framer-motion";

const WorkWrapper: React.FC<{ position: number }> = ({ position }) => {
  const showImage = position < 300 || position > 360;
  const showContent = position > 300 && position < 360;

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
        
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      //y:0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        repeat: Infinity,
        duration:1
      },
    },
    hidden: {
      opacity: 0,
      //y:20,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <div
      className={` z-30 ${
        showImage ? "h-full" : "h-fit"
      }  w-full overflow-auto transition-all`}
    >
      {showContent && (
        <div className=" bg-white text-black">
          <h1 className=" mx-auto  w-full text-center text-2xl ">My work</h1>

          <div className=" flex flex-col  gap-5">
            <div className="h-96 w-full border-2 md:w-[550px]"></div>
            <div className="h-96 w-full border-2 md:w-[550px]"></div>
            <div className="h-96 w-full border-2 md:w-[550px]"></div>
            <div className="h-96 w-full border-2 md:w-[550px]"></div>
          </div>
        </div>
      )}

      {showImage && (
        <div className="item- relative flex h-full w-full justify-center ">
          <Image src={img2.src} fill objectFit="cover" sizes="100" alt="Hero" />
          <p className="absolute  top-2 max-w-max bg-white  p-2 text-center text-6xl font-bold text-[#2e026d]">
            My work
          </p>
          <motion.div variants={container} initial='hidden' animate='visible' className=" absolute top-20   ">
            
              <motion.svg
                variants={child}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-20 w-20  text-red-800  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </motion.svg>

              <motion.svg
                variants={child}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" top-10 h-20 w-20 text-red-800 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </motion.svg>

              <motion.svg
                variants={child}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute top-10 h-20 w-20 text-red-800  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </motion.svg>
           
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default WorkWrapper;

/*
style={{
            backgroundImage: `url(${img2.src})`,
      
            backgroundSize:'cover' ,
            backgroundPosition: 'center', 
            backgroundRepeat:'no-repeat',
            
            
            }} 
*/
