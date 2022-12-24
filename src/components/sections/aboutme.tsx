import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import tag from '../../../public/tag.png'

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
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
  // Create a reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { width, height } = useWindowSize();

  useEffect(() => {
    // Get the canvas context
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;
    // Array of shapes to draw
    const shapes = ["triangle", "circle", "box", "star", "arc"];

    // for (const shape of shapes) {
    // Choose a random position on the canvas
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);

    // Set the fill style
    ctx.fillStyle = "blue";

    // Begin the path
    ctx.beginPath();

    // Draw the circle
    ctx.arc(x + 25, y + 25, 25, 0, 2 * Math.PI);

    // Fill the circle
    ctx.fill();

    //}
  }, []);

  // Array of stars

  // Set up the canvas and start the update loop

  return (
    <section className="relative h-screen bg-[#151a24] py-20">
      <div className="absolute top-0 left-0 w-full overflow-hidden  ">
{/*         <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
            fill="#FFFFFF"
            fill-opacity="1"
          ></path>
        </svg> */}
      </div>

      <Image className="text-[#3498db] absolute bottom-2 right-1" src={tag.src} width='70' height='70' alt='htmlTag'/>
      <Image className="text-[#3498db] absolute bottom-1/2 right-3" src={tag.src} width='70' height='70' alt='htmlTag'/>
      <Image className="text-[#3498db] absolute top-2 right-1" src={tag.src} width='70' height='70' alt='htmlTag'/>

      <Image className="text-[#3498db] absolute bottom-2 right-[50%] left-[50%]" src={tag.src} width='70' height='70' alt='htmlTag'/>
      <Image className="text-[#3498db] absolute bottom-1/2 right-[20%]" src={tag.src} width='70' height='70' alt='htmlTag'/>
      <Image className="text-[#3498db] absolute top-2 right-1" src={tag.src} width='70' height='70' alt='htmlTag'/>

      <Image className="text-[#3498db] absolute bottom-2 right-1" src={tag.src} width='70' height='70' alt='htmlTag'/>
      <Image className="text-[#3498db] absolute bottom-2 right-1" src={tag.src} width='70' height='70' alt='htmlTag'/>
      <Image className="text-[#3498db] absolute bottom-2 right-1" src={tag.src} width='70' height='70' alt='htmlTag'/>
      <Image className="text-[#3498db] absolute bottom-2 right-1" src={tag.src} width='70' height='70' alt='htmlTag'/>
    </section>
  );
};

export default Aboutme;
