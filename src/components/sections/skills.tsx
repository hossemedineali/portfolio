import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { root } from "postcss";
import { useEffect, useRef } from "react";
import reactIcon from "../../../public/react.png";
import next from "../../../public/next.png";
import ts from "../../../public/ts.png";
import tailwind from "../../../public/tailwind.png";
import useWindowSize from "../../helper/useWindowSize";


const titleContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,

    transition: { staggerChildren: 0.2, delayChildren: 0.04 * i + 0.5 },
  }),
};

const titleChild = {
  visible: {
    opacity: 1,
    //x: 0,
    // y: 0,

    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    //x: -20,
    //y: 10,

    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Section2 = () => {
  const { width, height } = useWindowSize();
  const x = useMotionValue(200);
  const y1 = useMotionValue(200);

  const moveX = useTransform(y1, [0, height], [20, -20]);
  const moveY = useTransform(x, [0, width], [20, -20]);

  const handelMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y1.set(e.clientY - rect.top);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const annimation = useAnimation();

  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  useEffect(() => {
    if (isInView) {
      annimation.start("visible");
    }
  }, [isInView]);
  return (
    <motion.section
      onMouseMove={handelMouseMove}
      className="relative h-[850px] min-h-screen bg-[#24324f] py-20"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden  ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[76px] w-[calc(100%+1.3px)] md:h-[151px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#151a24]"
          ></path>
        </svg>
      </div>

      <motion.h1
        ref={ref}
        variants={titleContainer}
        initial="hidden"
        animate={annimation}
        className="py-10 text-center font-Allerta  text-5xl font-bold text-white md:text-8xl md:font-extrabold"
      >
        {Array.from("My skills").map((l, i) => {
          return (
            <motion.span key={i} variants={titleChild}>
              {l}
            </motion.span>
          );
        })}
      </motion.h1>

      <motion.div
        style={{ y }}
        className=" font-Allerta font-bold text-[#afadad] opacity-50 sm:text-xl"
      >
        <div className="mt-10 flex flex-wrap ">
          <motion.p
            style={{ y: moveX, x: moveY }}
            className="w-1/3  text-center"
          >
            HTML
          </motion.p>
          <motion.p
            style={{ y: moveY, x: moveY }}
            className="w-1/3  text-center"
          >
            CSS
          </motion.p>
          <motion.p
            style={{ y: moveY, x: moveX }}
            className="w-1/3  text-center"
          >
            JS
          </motion.p>
        </div>

        <div className="mt-10 flex flex-wrap  sm:px-10">
          <motion.p style={{ y: moveX, x: moveX }} className="w-1/2 text-left">
            Material ui
          </motion.p>
          <motion.p style={{ y: moveY, x: moveY }} className="w-1/2 text-right">
            Framer motion
          </motion.p>
        </div>

        <div className="mt-10 flex flex-col flex-wrap gap-10 sm:flex-row sm:gap-0">
          <div className="flex justify-around sm:w-1/2 sm:justify-evenly">
            <motion.p style={{ y: moveY, x: moveX }} className=" text-left">
              Redux
            </motion.p>
            <motion.p style={{ y: moveX, x: moveX }} className=" text-center ">
              Axios
            </motion.p>
          </div>
          <div className="flex justify-between sm:w-1/2 sm:justify-evenly">
            <motion.p style={{ y: moveY, x: moveY }} className=" text-center">
              Chart.js
            </motion.p>
            <motion.p style={{ y: moveY, x: moveY }} className=" text-right">
              Firebase
            </motion.p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-evenly">
          <motion.p style={{ y: moveX, x: moveX }} className="">
            Prisma
          </motion.p>
          <motion.p style={{ y: moveX, x: moveX }} className="">
            Planet scale
          </motion.p>
          <motion.p style={{ y: moveX, x: moveX }} className="">
            TRPC
          </motion.p>
        </div>

        <div className="mt-10 flex flex-col flex-wrap gap-10 sm:flex-row sm:gap-0">
          <div className="flex justify-around sm:w-1/2 sm:justify-evenly">
            <motion.p style={{ y: moveX, x: moveY }} className=" text-left">
              NextAuth.js
            </motion.p>
            <motion.p style={{ y: moveY, x: moveX }} className=" text-center ">
              Cloudinary
            </motion.p>
          </div>
          <div className="flex justify-between sm:w-1/2 sm:justify-evenly">
            <motion.p style={{ y: moveX, x: moveX }} className=" text-center">
              Bcrypt
            </motion.p>
            <motion.p style={{ y: moveX, x: moveY }} className=" text-right">
              Node mailer
            </motion.p>
          </div>
        </div>

        <div className="mt-10 flex justify-between px-1 sm:px-10">
          <motion.p style={{ y: moveY, x: moveY }}>React form hook</motion.p>
          <motion.p style={{ y: moveX, x: moveY }}>Zod</motion.p>
        </div>
        <div className="mt-10 flex justify-evenly px-1 sm:px-10">
          <motion.p style={{ y: moveX, x: moveY }}>Zustand</motion.p>
          <motion.p style={{ y: moveX, x: moveY }}>Leaflet</motion.p>
        </div>
      </motion.div>

      <div
        ref={ref1}
        className="absolute top-[350px] left-1/2 bottom-1/2 right-1/2 flex w-fit -translate-x-1/2 flex-col gap-4 sm:flex-row   "
      >
        <div className="flex gap-4">
          <div className="h-20 w-20 md:h-32 md:w-32  lg:h-40 lg:w-40  ">
            <img src={reactIcon.src} className="h-full w-full" />
          </div>
          <div className="h-20 w-20 md:h-32 md:w-32  lg:h-40 lg:w-40  ">
            <img src={next.src} className="h-full w-full" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-20 w-20 md:h-32 md:w-32  lg:h-40 lg:w-40  ">
            <img src={ts.src} className="h-full w-full" />
          </div>
          <div className="h-20 w-20 md:h-32 md:w-32  lg:h-40 lg:w-40  ">
            <img src={tailwind.src} className="h-full w-full" />
          </div>
        </div>
      </div>

    
    </motion.section>
  );
};

export default Section2;
