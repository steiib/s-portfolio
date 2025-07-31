import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Navbar from "./components/navbar";
import Button from "./components/daynight_button";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";

function Content() {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("bg-toggled", toggled);
    document.body.classList.toggle("bg-default", !toggled);
  }, [toggled]);

  const textColor = toggled ? "text-black" : "text-white";

  return (
    <>
      <Navbar toggled={toggled} />

      {/* Hero Section */}
      <div className="select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Hero toggled={toggled} />
        </motion.div>
      </div>
      {/* About Section */}
      <section
        id="about"
        className={`${
          textColor
        } scroll-mt-25 lg:scroll-mt-35 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <About toggled={toggled} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${
          textColor
        } scroll-mt-25 lg:scroll-mt-35 mt-20 lg:mt-40 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <Projects toggled={toggled} />
      </section>

      {/* Dark/Light Mode Toggle Button */}
      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
