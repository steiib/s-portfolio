import { useState } from "react";
import topo_b from "./assets/topo_b.png";
import topo_w from "./assets/topo_w.png";

interface HeroProps {
  toggled: boolean;
}

function Hero({ toggled }: HeroProps) {
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;

    setTransformStyle(
      `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const resetTransform = () => {
    setTransformStyle("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <section
      id="home"
      className={`${
        toggled ? "text-black" : "text-white"
      } scroll-mt-40 w-11/12 max-w-sm mx-auto text-center md:max-w-3xl md:pt-45 pt-25`}
    >
      <div className="hover:scale-105 hover:tracking-widest transition-all duration-300 cursor-default">
        <p className="text-xl md:text-4xl font-bold mt-8 md:mt-16">Hi, I'm</p>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
          className="w-full h-auto mx-auto block md:mt-3 md:mb-3 transition-transform duration-50"
          style={{ transform: transformStyle }}
        >
          <img
            src={toggled ? topo_b : topo_w}
            alt="NameBG"
            className="w-full h-auto mx-auto pointer-events-none"
          />
        </div>

        <div className="text-3xl md:text-6xl font-extrabold tracking-widest">
          <p>S T E V E</p>
          <p>F A J I L A N</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
