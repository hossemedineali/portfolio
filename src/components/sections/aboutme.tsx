import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import controller from "../../../public/controller.png";
import noise from "../../../public/noise.png";
import bug from "../../../public/bug.png";
import code from "../../../public/icons8-code-100.png";
import Console from "../../../public/icons8-console-100.png";
import api from "../../../public/icons8-rest-api-100.png";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Aboutme = () => {
  // Initialize state for the x and y position of the mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [mouseDirection, setMouseDirection] = useState("none");


  const [lastTap, setLastTap] = useState<{ x: number; y: number } | null>(null);

  // Get the current width and height of the window
  const { width, height } = useWindowSize();
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const moveX = useTransform(y, [0, width], [20, -20]);
  const moveY = useTransform(x, [0, height], [20, -20]);

  const handelMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.section
    onClick={(event) => {
      setLastTap({ x: event.clientX, y: event.clientY });
    }}

      onMouseMove={handelMouseMove}
      className="relative h-screen overflow-hidden bg-[#151a24] py-20"
    >
      {/* <canvas
        ref={canvasRef}
        style={canvasStyles}
        className="absolute top-20 left-0 right-0 bottom-20 h-full w-full  text-[250px]"
      /> */}

      <div className="z-20 relative flex h-full items-center  justify-center">
        <p className=" p-10 text-center leading-relaxed text-white text-[6vw] sm:text-Cyellow sm:text-[4vw] md:text-white md:text-[3vw] lg:text-Cviolet ">
          I am a web developer with a passion for creating visually
          appealing and user-friendly websites and applications. I will be happy
          to bring my expertise in creating beautiful user interfaces to your
          projects and help your team create meaningful and impactful solutions.
          I am reliable, self-motivated, and able to work well in a team
          environment.
        </p>
      </div>
      <motion.div
        style={{ y: moveX, x: moveY }}
        className="absolute hidden sm:block top-10 md:left-10 left-0 text-[#3498db]"
      >
        <Image
          //  className="absolute hidden sm:block top-2 left-1 text-[#3498db]"
          src={controller.src}
          width="50"
          height="50"
          alt="htmlTag"
        />
      </motion.div>

      <motion.div
        className="absolute hidden sm:block bottom-10 left-[50%] "
        style={{ x: moveX, y: moveY }}
      >
        <Image
          // className="absolute hidden sm:block bottom-2  left-[50%] text-[#3498db] md:right-[50%]"
          src={noise.src}
          width="50"
          height="50"
          alt="htmlTag"
        />
      </motion.div>

      <motion.div
        className="absolute hidden sm:block top-2/3 left-10"
        style={{ y: moveX, x: moveY }}
      >
        <Image
          //className="absolute hidden sm:block top-2/3 left-0  text-[#3498db]"
          src={bug.src}
          width="50"
          height="50"
          alt="htmlTag"
        />
      </motion.div>

      <motion.div
        className="absolute hidden sm:block top-[15%] right-[20%]"
        style={{ x: moveX, y: moveY }}
      >
        <Image
          //   className="absolute hidden sm:block top-2 right-10 text-[#3498db]  md:right-[50%]"
          src={code.src}
          width="50"
          height="50"
          alt="htmlTag"
        />
      </motion.div>

      <motion.div className="absolute hidden sm:block bottom-10 right-10" style={{ y: moveX, x: moveY }}>
        <Image
        //  className="absolute hidden sm:block bottom-2 right-1 text-[#3498db]"
          src={Console.src}
          width="50"
          height="50"
          alt="htmlTag"
        />
      </motion.div>

      <motion.div className="absolute hidden sm:block top-40 right-10" style={{ y: moveX, x: moveY }}>
        <Image
        //  className="absolute hidden sm:block top-40 right-4 text-[#3498db]"
          src={api.src}
          width="50"
          height="50"
          alt="htmlTag"
        />
      </motion.div>
    </motion.section>
  );
};

export default Aboutme;
