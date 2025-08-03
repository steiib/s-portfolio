import { useState } from "react";
import { motion } from "motion/react";
// import topo_b from "../images/topo_b.png";
// import topo_w from "../images/topo_w.png";
import wave_1 from "../images/wave_1.png";
import wave_2 from "../images/wave_2.png";

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
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        id="home"
        className={`${
          toggled ? "text-black" : "text-white"
        } relative min-h-screen flex flex-col justify-center items-center max-w-lg lg:max-w-4xl mx-auto text-center`}
      >
        <div className="hover:scale-115 hover:tracking-widest transition-all duration-400 cursor-default">
          {/* Top Text */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-lg lg:text-3xl font-medium">Hi, I'm</p>
          </motion.div>

          {/* Background Image */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
            className="relative w-full h-auto mx-auto block mt-2 lg:mt-5 transition-transform duration-50"
            style={{ transform: transformStyle }}
          >
            <img
              src={toggled ? wave_2 : wave_1}
              alt="NameBG"
              className="w-full h-auto mx-auto pointer-events-none rounded-sm"
            />

            {/* Shadow Overlay */}
            <div
              className={`${
                toggled
                  ? "from-white/30 to-transparent"
                  : "from-black/30 to-transparent"
              } absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t pointer-events-none`}
            />
          </div>

          {/* Name Placeholder */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-4xl lg:text-8xl font-light tracking-widest relative -mt-6 lg:-mt-14 pointer-events-none z-10">
              <p>S T E V E</p>
              <p>F A J I L A N</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Button */}
      <div
        className="relative bottom-60 mt-16 w-10 lg:bottom-40 lg:w-9 hover:scale-125 transition-all duration-300 cursor-pointer"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img
          src={`https://icongr.am/feather/arrow-down-circle.svg?size=128&color=${
            toggled ? "000000" : "ffffff"
          }`}
          alt="Arrow Down"
        />
      </div>
    </div>
  );
}

export default Hero;
