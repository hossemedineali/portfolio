import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
//import randomWord from 'random-words'

function Word({ children, ...props }) {
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
  const over = (e) => (e.stopPropagation(), setHovered(true));
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
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 3, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const skills = [
      "Html",
      "CSS",
      "JS",
      "TS",
      "Nextjs",
      "Tailwind",
      "MaterialUi",
      "React",
      "Framer motion",
      "Redux",
      "Axios",
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

    console.log(skills.length);
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let number=0
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
            ),
            skills[number],
          ]);
          number++
        }
    }

    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function App() {
  return (
    <div className="  flex flex-col md:flex-row h-screen w-full  bg-[#24324f] ">
    <div className=" h-1/2 w-full md:h-full md:w-1/2 ">
      <p className="text-white text-xl h-fit my-auto leading-relaxed pt-8 px-4 sm:text-3xl  sm:px-8  lg:bg-primary"> As a web developer I enjoy the process of taking an idea and turning it into a fully-realized website that not only looks great, but also meets the needs of the user. I am constantly learning and experimenting with new technologies to stay up-to-date and deliver the best results for my clients.</p>
    </div>
      <div className=" h-1/2 w-full md:h-full md:w-1/2">
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
      {/*   <Canvas className="" dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#202025", 0, 80]} />
        <Cloud count={8} radius={20} />
        <TrackballControls />
      </Canvas> */}
    </div>
  );
}
