import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import WorkWrapper from "../components/work";

const Home: NextPage = () => {
  const container = {
    hidden: { opacity: 0 },
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
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      //y:20,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const text1 = "Hi!".split(" ");
  const text2 = "My name is Hossem edine ali ".split(" ");
  const text3 = "I am a web developper".split(" ");

  const { scrollY } = useScroll();

  const [top, setTop] = useState<number>(0);
  const [progress, setProgress] = useState(0.4);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    console.log("scrollYY", scrollY.get());

    scrollY.onChange(() => {
      if (scrollY.get() > 500) {
        setPosition(1);
      } else {
        setPosition(0);
      }
      if (scrollY.get() < 320) {
        if (scrollY.get() / 320 > 0.4 && scrollY.get() / 320 < 1) {
          setTop(scrollY.get());
          setProgress(scrollY.get() / 320);
        }
      }

      if (scrollY.get() > 360 && scrollY.get() < 640) {
        if (scrollY.get() < 640) {
          if (-1 * (1 - 640 / scrollY.get()) > 0.4) {
            setProgress(-1 * (0.12 + 1 - 640 / scrollY.get()));
          }
        }
      }
    });
  }, [scrollY.get()]);

  return (
    <>
      <Head>
        <title>Hossem edine ali |Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-[800px]   bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        

        <div className="relative h-screen     ">
          <div className="h-[200px] w-full pl-5  md:w-1/2 md:py-10 md:pl-10 ">
            <motion.p
              className="flex flex-wrap overflow-hidden break-words"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {text1.map((t, i) => {
                return (
                  <motion.span
                    variants={child}
                    key={i}
                    className="mr-[5px] font-mono text-xl text-white hover:text-[#120a03] md:text-2xl md:font-bold"
                  >
                    {t}
                  </motion.span>
                );
              })}
            </motion.p>

            <motion.p
              className="flex flex-wrap overflow-hidden break-words"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {text2.map((t, i) => {
                return (
                  <motion.span
                    variants={child}
                    key={i}
                    className="mr-[5px] font-mono text-xl text-white hover:text-[#120a03] md:text-2xl md:font-bold"
                  >
                    {t}
                  </motion.span>
                );
              })}
            </motion.p>

            <motion.p
              className="flex flex-wrap overflow-hidden break-words"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {text3.map((t, i) => {
                return (
                  <motion.span
                    variants={child}
                    key={i}
                    className="mr-[6px] font-mono text-xl text-white transition-all duration-150 hover:text-red-900 md:text-2xl md:font-bold"
                  >
                    {t}
                  </motion.span>
                );
              })}
            </motion.p>
          </div>


          {/*  ---------------------------------------------------------------- */}
          {false && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{
                scaleX: `${+progress.toString()}`,
                scaleY: `${+progress.toString()}`,
              }}
              className={` ${position == 0 ? "fixed" : "absolute  "}   ${
                position == 0
                  ? "top-0 right-0 left-0 bottom-0"
                  : "top-[480px] right-0 left-0 bottom-[-380px]"
              }    z-10 border-2 ${
                progress > 0.9 ? "overflow-auto" : "overflow-hidden"
              } mt-10 rounded-2xl scrollbar-hide  `}
            >
              <WorkWrapper position={scrollY.get()} />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              scaleX: `${+progress.toString()}`,
              scaleY: `${+progress.toString()}`,
            }}
            className={`fixed top-0 right-0 left-0 bottom-0  border-2 ${
              progress > 0.9 ? "overflow-auto" : "overflow-hidden"
            } mt-10 rounded-2xl scrollbar-hide  `}
          >
            <WorkWrapper position={scrollY.get()} />
          </motion.div>

          {/*   <motion.div 
            
            className={`flex   md:hidden  border-2  max-w-full max-h-screen mx-auto ${top<269?'overflow-hidden':'overflow-scroll'}  scrollbar-hide ` }
            style={{top:top+350,width:(top+50)*2,height:(top+90)*2}}
            >
            {<Work/>}
            </motion.div> */}

          {/* <div          
              className={` md:flex   hidden  border-2  max-w-full max-h-screen mx-auto ${top<269?'overflow-hidden':'overflow-scroll'} scrollbar-hide` }
              style={{top:top+50,width:(top+300)*2,height:(top+90)*2}}
              >
                {<Work/>}
            </div> */}
        </div>
        <div className="mt-[350px] z-30 bg-red-900 flex h-[1500px] border-2 "></div>
      </main>
    </>
  );
};

export default Home;
