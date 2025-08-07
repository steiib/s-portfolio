import { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar";
import Button from "./components/daynight_button";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";

function Content() {
  const [toggled, setToggled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Dark/Light Theme
  useEffect(() => {
    document.body.classList.toggle("bg-toggled", toggled);
    document.body.classList.toggle("bg-default", !toggled);
  }, [toggled]);

  // NavBar Visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const currentRef = heroRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const textColor = toggled ? "text-black" : "text-white";

  return (
    <>
      {/* NavBar */}
      {showNavbar && <Navbar toggled={toggled} />}

      {/* Hero Section */}
      <div className="select-none" ref={heroRef}>
        <Hero toggled={toggled} />
      </div>

      {/* About Section */}
      <section
        id="about"
        className={`${
          textColor
        } scroll-mt-20 lg:scroll-mt-35 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <About toggled={toggled} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${
          textColor
        } scroll-mt-20 lg:scroll-mt-35 mt-20 lg:mt-40 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <Projects toggled={toggled} />
      </section>

      {/* Footer */}
      <section id="contact">
        <Footer toggled={toggled} />
      </section>

      {/* Dark/Light Mode Toggle Button */}
      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
