import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useSphereHovered } from "../../store/sphereHover";
import { skillsSvg } from "../UI/sphereSVG";

function Word({ text, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => {
    e.stopPropagation(), setHovered(true);
  };
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={(e) => {
        over(e);
      }}
      onPointerOut={out}
      {...props}
      {...fontProps}
      text={text}
    />
  );
}

//function Cloud({ count = 3, radius = 20 }) {

const Cloud = ({ count = 3, radius = 20 }) => {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const skills = [
      "Html",
      "CSS",
      "MaterialUi",
      "Redux",
      "Axios",
      "Tailwind",
      "JS",
      "React",
      "Framer motion",
      "TS",
      "Nextjs",
      "ChartJs",
      "Firebase",
      "Prisma",
      "Planet scale",
      "TRPC",
      "NextAuth",
      "Cloudinary",
      "Bcrypt",
      "Node mailer",
      "React form hook",
      "Zod",
      "Zustand",
      "Leaflet",
    ];

    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let number = 0;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          skills[number],
        ]);
        number++;
      }
    }

    return temp;
  }, [count, radius]);

  const sphereHovered = useSphereHovered();

  return words.map(([pos, word], index) => (
    <Word
      onPointerOver={() => {
        sphereHovered.setIsHovered(true);
        sphereHovered.setHoveredIndex(index);
      }}
      onPointerOut={() => {
        sphereHovered.setIsHovered(false);
        sphereHovered.setHoveredIndex(-1);
      }}
      key={index}
      position={pos}
      text={word}
    />
  ));
};

export default function SphericSkills() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [showCursor, SetShowCursor] = useState(false);

  const [cursorVariant, setCursorVariant] = useState("default");
  const sphereHovered = useSphereHovered();


  useEffect(()=>{
    if(sphereHovered.isHovered){
      setCursorVariant("sphere")
    }else{
      setCursorVariant("default")
    }

  },[sphereHovered.isHovered])


  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
      
    },
    sphere:{
      height: 120,
      width: 120,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "#fff",
//      mixBlendMode: "difference",
      border:0
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const DivEnter = () => SetShowCursor(true);
  const DivLeave = () => {
    SetShowCursor(false);
    setMousePosition({
      x: 0,
      y: 0,
    });
  };



  const paragraph =
    "As a web developer I enjoy the process of taking an idea and turning it into a fully-realized website that not only looks great, but also meets the needs of the user. I am constantly learning and experimenting with new technologies to stay up-to-date and deliver the best results for my clients.";
  return (
    <div
      onMouseEnter={DivEnter}
      onMouseLeave={DivLeave}
      onPointerMove={(e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className="cursor-none relative flex h-screen w-full flex-col bg-[#24324f] font-passion font-black  md:flex-row "
    >
      <div className=" flex h-1/2 w-full  md:h-full  md:w-1/2">
        <p
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" my-auto  h-auto  px-[1vw] text-[5vw]   text-white  sm:text-3xl xl:text-[3vw]  "
        >
          {Array.from(paragraph).map((letter, index) => {
            return (
              <motion.span key={index} className="hover:scale-50">
                {letter}
              </motion.span>
            );
          })}
        </p>
      </div>
      <div className=" h-1/2 w-full md:h-full md:w-1/2 ">
        <Canvas
          className=""
          dpr={[1, 2]}
          camera={{ position: [0, 0, 35], fov: 90 }}
        >
          <fog attach="fog" args={["#202025", 0, 80]} />
          <Cloud count={5} radius={20} />
          <TrackballControls />
        </Canvas>
      </div>

      {showCursor && (
        <motion.div
          variants={variants}
          animate={cursorVariant}
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="overflow-hidden pointer-events-none flex fixed top-0 left-0 z-50 aspect-square w-[32px] rounded-full  border"
        >
        {sphereHovered.isHovered&&
        <>
        {skillsSvg[sphereHovered.hoveredIndex]}

        </>
          
        }
        </motion.div>
      )}

      {/* <div className="absolute top-0 right-0 left-0 bottom-0 bg-primary z-0"></div> */}
    </div>
  );
}
