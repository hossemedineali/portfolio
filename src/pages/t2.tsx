import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import { useScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../components/loader";

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


  useEffect(()=>{
    setTimeout(() => {
      setIsloading(false)
    }, 5000)
  },[])


  return (
    <>
      <Head>
        <title>Hossem edine ali |Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen   bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {true&&<div>
          <Loader/>
          </div>}
        {!isLoading&&<div>
       
          
          </div>}

      
      </main>
    </>
  );
};

export default Home;
