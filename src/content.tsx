import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Button from "./components/button";
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
      <Hero toggled={toggled} />

      {/* About Section */}
      <section
        id="about"
        className={`${
          textColor
        } scroll-mt-30 lg:scroll-mt-40 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <About toggled={toggled} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${
          textColor
        } mt-20 lg:mt-40 scroll-mt-25 lg:scroll-mt-40 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <Projects toggled={toggled} />
      </section>

      {/* Dark / Light Mode Toggle Button */}
      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
