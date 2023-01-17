import React, { useEffect } from "react";

const TextEffect1 = () => {
  useEffect(() => {
    const style1 = document.createElement("style");
    const style2 = document.createElement("style");
    const after = document.getElementById("after-te1");
    const before = document.getElementById("before-te1");
    const setKeyframesRules = (n: number, start = 0) => {
      let steps = "";
      for (let i = start; i <= n; i++) {
        const percent = (i / n) * 100;
        const random1 = `${Math.random() * 150}px`;
        const random2 = `${Math.random() * 150}px`;
        steps = steps.concat(
          `${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `
        );
      }
      return steps;
    };
    const keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`;
    const keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`;
    style1.innerHTML = keyframes1;
    style2.innerHTML = keyframes2;
    if (!before || !after) return;

    after.appendChild(style1);
    before.appendChild(style2);
    after.style.animation =
      "glitch-anim-1 2.5s infinite linear alternate-reverse";
    before.style.animation =
      "glitch-anim-2 3s infinite linear alternate-reverse";
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-center text-6xl">
      <h1 className="relative inline-block text-4xl font-bold uppercase text-black">
        <span
          id="before-te1"
          className="absolute top-0 left-0.5 h-full w-full bg-transparent"
          style={{
            textShadow: "-2px 0 #49FC00",
            clipPath: "rect(24px, 550px, 90px, 0)",
          }}
          aria-hidden="true"
        >
          My job is to give life to your idea
        </span>
        {/* glitch::before */}
        My job is to give life to your idea
        <span
          id="after-te1"
          className="absolute top-0 -left-0.5 h-full w-full bg-transparent"
          style={{
            textShadow: "-2px 0 spin(#49FC00, 180)",
            clipPath: "rect(85px, 550px, 140px, 0)",
          }}
          aria-hidden="true"
        >
          My job is to give life to your idea
        </span>
        {/* glitch::after */}
      </h1>

      <h1 className="relative inline-block text-4xl font-bold uppercase text-black">
        <span
          id="before-te1"
          className="absolute top-0 left-0.5 h-full w-full bg-transparent"
          style={{
            textShadow: "-2px 0 #49FC00",
            clipPath: "rect(24px, 550px, 90px, 0)",
          }}
          aria-hidden="true"
        >
          My job is to give life to your idea
        </span>
        {/* glitch::before */}
        My job is to give life to your idea
        <span
          id="after-te1"
          className="absolute top-0 -left-0.5 h-full w-full bg-transparent"
          style={{
            textShadow: "-2px 0 spin(#49FC00, 180)",
            clipPath: "rect(85px, 550px, 140px, 0)",
          }}
          aria-hidden="true"
        >
          My job is to give life to your idea
        </span>
        {/* glitch::after */}
      </h1>
    </div>
  );
};

export default TextEffect1;
