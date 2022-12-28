import {
  AnimatePresence,
  animations,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import dari from "../../../public/dari.png";
import mycoin from "../../../public/mycoin.png";
import bb from "../../../public/bb.png";
import soon from "../../../public/soon.png";
import { useProjectModal } from "../../store/projects";

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

const Work = () => {
  //const project=
  const ref = useRef(null);
  const isInView = useInView(ref);
  const annimation = useAnimation();
  useEffect(() => {
    if (isInView) {
      annimation.start("visible");
    }
  }, [isInView]);
  return (
    <section className="relative  min-h-screen bg-[#151a24] py-20">
      {/* SVG Wave devider */}
      <div className="absolute  top-0 left-0 w-full overflow-hidden  ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[76px] w-[calc(100%+1.3px)] md:h-[151px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#1d1d1d]"
          ></path>
        </svg>
      </div>
      {/* --------------------------------------------------------------------------- */}
      {/* Tittle */}
      <motion.h1
        ref={ref}
        variants={titleContainer}
        initial="hidden"
        animate={annimation}
        className="py-10 text-center font-Allerta  text-5xl font-bold text-white md:text-8xl md:font-extrabold"
      >
        {Array.from("My work").map((l, i) => {
          return (
            <motion.span key={i} variants={titleChild}>
              {l}
            </motion.span>
          );
        })}
      </motion.h1>
      {/* -------------------------------------------- */}
      {/* Projects */}
      <div className="flex flex-col  gap-10  md:gap-20  ">
        <P1 position="left" />

        <P1 position="right" />

        <P1 position="left" />

        <P1 position="right" />
      </div>
    </section>
  );
};

interface Props {
  position: string;
}
const P1: React.FC<Props> = ({ position }) => {
  const project = useProjectModal();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <AnimatePresence>
      <div className="mx-auto w-[100vw] md:w-[80vw] ">
        <motion.section
          onClick={() => {
            project.setProjectNumber(1);
          }}
          className="group mx-auto  aspect-square w-[90%] sm:aspect-[2/1] md:mx-0  md:mr-auto   "
        >
          <motion.div className="relative h-full w-full  transition-all duration-300 ">
            <Image src={dari.src} fill sizes="100" alt="dari project" />
            <div
              style={{
                background:
                  "linear-gradient(270deg,rgba(35,90,166,0.8),rgba(16,27,59,0.8))",
              }}
              className="absolute top-0 bottom-0 left-0 right-[100%] transition-all duration-300 ease-in-out group-hover:right-0"
            ></div>

            {isInView && (
              <div className="absolute -right-6 -top-10 h-40    translate-y-5 overflow-hidden leading-none  text-[#2c2a2a] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ">
                <div className="relative">
                  <p className=" text-[161px] font-extrabold transition-all delay-300 duration-300 group-hover:text-[#D6D6D2]">
                    01
                  </p>
                </div>
              </div>
            )}

            <motion.div
              style={{
                backgroundColor: "#212121",
                boxShadow: "15px 15px 30px #191919,15px -15px 30px #292929",
                transition:
                  "border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s",
              }}
              className="absolute bottom-[20%] left-10  rounded-br-[50px] rounded-tl-[50px] p-10  pl-5 text-primary transition-all duration-300 ease-in-out group-hover:scale-110 md:pl-20  "
            >
              <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                Dari
              </h1>
              <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                Real estate app
              </h3>
            </motion.div>
            <div ref={ref} className="absolute top-[70%]  w-full "></div>
            <motion.div
              style={{
                left: isInView ? "100%" : "0",
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                background:
                  "linear-gradient(270deg,rgba(35,90,166,1),rgba(16,27,59,1))",
              }}
              className="opacity-1 absolute top-0 left-0 right-0 bottom-0 bg-Cblue"
            ></motion.div>
          </motion.div>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

const P2: React.FC<Props> = ({ position }) => {
  const project = useProjectModal();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  return (
    <AnimatePresence>
      <div className="mx-auto w-[100vw] border-2 md:w-[80vw]">
        <motion.section
          onClick={() => {
            project.setProjectNumber(2);
          }}
          ref={ref}
          className="mx-auto aspect-square w-[90%] border-2  border-white sm:aspect-[2/1] sm:border-Cviolet md:mx-0   md:ml-auto md:border-white"
        >
          <motion.div className="relative h-full w-full translate-x-3 translate-y-3 bg-[#c0c01e] duration-300 md:translate-x-0 md:translate-y-0 md:hover:-translate-x-3 md:hover:translate-y-3">
            <Image src={mycoin.src} fill sizes="100" alt="dari project" />
            <motion.div
              style={{ y }}
              className="absolute -bottom-28 h-28 w-full pl-5 text-primary  md:pl-20  "
            >
              <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                My coin
              </h1>
              <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                cryptocurrency app
              </h3>
            </motion.div>
            <motion.div
              initial={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileInView={{ width: 0 }}
              className="absolute  top-0 left-0 right-0 bottom-0 bg-Cblue"
            ></motion.div>
          </motion.div>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

const P3: React.FC<Props> = ({ position }) => {
  const project = useProjectModal();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  return (
    <AnimatePresence>
      <motion.section
        onClick={() => {
          project.setProjectNumber(3);
        }}
        ref={ref}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: position == "right" ? 0.5 : 0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.div className="mx-auto mb-20  aspect-square w-10/12 bg-[#D6D6D2]   hover:cursor-pointer md:mt-[-80px] ">
          <motion.div className="relative h-full w-full -translate-x-3 translate-y-3 bg-[#c0c01e] duration-300 md:translate-x-0 md:translate-y-0 md:hover:translate-x-3 md:hover:translate-y-3">
            <Image src={bb.src} fill sizes="100" alt="dari project" />
            <motion.div
              style={{ y }}
              className="absolute -bottom-16 h-28 w-full pl-5 text-primary  md:pl-20  "
            >
              <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                Breaking bad
              </h1>
              <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                App for the best tv show ever
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

const P4: React.FC<Props> = ({ position }) => {
  const project = useProjectModal();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  return (
    <AnimatePresence>
      <motion.section
        onClick={() => {
          project.setProjectNumber(4);
        }}
        ref={ref}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: position == "right" ? 0.5 : 0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <motion.div className="mx-auto mb-20   aspect-square  w-10/12   bg-[#D6D6D2] hover:cursor-pointer ">
          <motion.div className="relative h-full w-full -translate-x-3 translate-y-3 bg-[#c0c01e] duration-300 md:translate-x-0 md:translate-y-0 md:hover:-translate-x-3 md:hover:translate-y-3">
            <Image src={soon.src} fill sizes="100" alt="dari project" />
            <motion.div
              style={{ y }}
              className="absolute -bottom-16 h-28 w-full pl-5 text-primary  md:pl-20  "
            >
              <h1 className="font-Allerta text-2xl font-extrabold md:text-5xl">
                Shop app
              </h1>
              <h3 className="font-Allerta text-xl font-bold md:text-3xl">
                With accounting system
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};




export default Work;
