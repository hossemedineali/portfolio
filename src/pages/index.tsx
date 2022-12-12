import { type NextPage } from "next";
import Head from "next/head";
import { useScroll, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import Section1 from "../components/sections/section1";
import Work from "../components/sections/work";
import TT from "../components/test/test";

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
  
  
  const Home: NextPage = () => {
  
  const { scrollY } = useScroll();

  const [isLoading,setIsloading]=useState(true)
  const [isOpen, toggleOpen] = useCycle(false, true);


  useEffect(()=>{
    setTimeout(() => {
      setIsloading(false)
    }, 5000)
  },[])


  return (
    <>
      <Head>
        <title>Hossem edine ali |Portfolio</title>#1d1d1d
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`min-h-screen relative  flex-row  bg-[#1d1d1d] ${isOpen?'scrollbar-hide':''}`}>
        
       {/*  {isOpen&&<Menu toggleOpen={toggleOpen} isOpen={isOpen}/>} */}
       <Section1/>


    

       <Work/>


<TT/>
        

        
          

    

      
      </main>
    </>
  );
};

export default Home;
