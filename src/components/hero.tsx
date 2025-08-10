import { useState } from "react";
import { motion } from "motion/react";
import wave_1 from "../images/wave_1.png";
import wave_2 from "../images/wave_2.png";
import mwave_1 from "../images/mwave_1.png";
import mwave_2 from "../images/mwave_2.png";

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
        } relative min-h-screen flex flex-col justify-center items-center mx-auto text-center`}
      >
        <div className="hover:scale-115 transition-all duration-350 cursor-default">
          {/* Background Image */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
            className="relative transition-transform duration-40"
            style={{ transform: transformStyle }}
          >
            {/* Desktop Image */}
            <img
              src={toggled ? wave_2 : wave_1}
              alt="NameBG"
              className="max-w-5xl h-auto mx-auto pointer-events-none rounded-xs hidden lg:block"
            />

            {/* Mobile Image */}
            <img
              src={toggled ? mwave_2 : mwave_1}
              alt="NameBG"
              className="w-8/12 max-w-md h-auto mx-auto pointer-events-none rounded-xs block lg:hidden"
            />
          </div>

          {/* Name Placeholder */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative text-4xl lg:text-8xl font-light tracking-widest -mt-6 lg:-mt-14 pointer-events-none z-10">
              <p>S T E V E</p>
              <p>F A J I L A N</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Button */}
      <div
        className="relative bottom-40 w-8 lg:w-10 lg:relative lg:bottom-25 hover:scale-125 transition-all duration-300 cursor-pointer"
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
