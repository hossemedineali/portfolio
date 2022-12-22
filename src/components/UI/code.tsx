import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Code = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,

      transition: { staggerChildren: 0.2, delayChildren: 0.04 * i + 5 },
    }),
  };

  const child = {
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

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgress(1);
    }, 5000);

    setTimeout(() => {
      setProgress(2);
    }, 13500);
  }, []);

  const text = Array.from("while(alive){eat()sleep()code()repeat()}");
  const text2 = Array.from("aerkj zeakrj zjekalrj zeaklrùj zaeklrùj azklerj");

  const t1 = Array.from("while(alive){");
  const t2 = Array.from("eat()");
  const t3 = Array.from("sleep()");
  const t4 = Array.from("code()");
  const t5 = Array.from("repeat()");
  const t6 = Array.from("}");

  return (
    <>
      <div className="container mx-auto flex w-full flex-wrap   items-center justify-center pt-2 font-bold opacity-70">
        <motion.div
          className="w-[350px]  "
          style={{ overflow: "hidden", fontSize: "2rem" }}
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3 }}
        >
          {progress == 0 && (
            <motion.span
              className="mr-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              |
            </motion.span>
          )}
          {t1.map((letter, index) => {
            let color = "Cviolet";
            if ([6, 7, 8, 9, 10].includes(index)) {
              color = "Cblue";
            }

            return (
              <motion.span
                className={`text-${color}`}
                variants={child}
                key={`${letter}+${index}+${Math.random()}`}
              >
                {letter}
              </motion.span>
            );
          })}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {t2.map((letter, index) => {
            let color = "Cyellow";
            if ([3, 4].includes(index)) {
              color = "Cblue";
            }

            return (
              <motion.span
                className={`text-${color} `}
                variants={child}
                key={`${letter}+${index}+${Math.random()}`}
              >
                {letter}
              </motion.span>
            );
          })}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {t3.map((letter, index) => {
            let color = "Cyellow";
            if ([5, 6].includes(index)) {
              color = "Cblue";
            }

            return (
              <motion.span
                className={`text-${color} `}
                variants={child}
                key={`${letter}+${index}+${Math.random()}`}
              >
                {letter}
              </motion.span>
            );
          })}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {t4.map((letter, index) => {
            let color = "Cyellow";
            if ([4, 5].includes(index)) {
              color = "Cblue";
            }

            return (
              <motion.span
                className={`text-${color} `}
                variants={child}
                key={`${letter}+${index}+${Math.random()}`}
              >
                {letter}
              </motion.span>
            );
          })}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {t5.map((letter, index) => {
            let color = "Cyellow";
            if ([6, 7].includes(index)) {
              color = "Cblue";
            }

            return (
              <motion.span
                className={`text-${color} `}
                variants={child}
                key={`${letter}+${index}+${Math.random()}`}
              >
                {letter}
              </motion.span>
            );
          })}
          <br />
          &nbsp;
          {t6.map((letter, index) => {
            let color = "Cviolet";
            if ([5, 6].includes(index)) {
              color = "Cblue";
            }

            return (
              <div key={index}>
                <motion.span
                  className={`text-${color} `}
                  variants={child}
                  key={`${letter}+${index}+${Math.random()}`}
                >
                  {letter}
                </motion.span>
                {progress == 2 && (
                  <motion.span
                    key={`${letter}+${index}+${Math.random()}`}
                    className="mr-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    |
                  </motion.span>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Code;
