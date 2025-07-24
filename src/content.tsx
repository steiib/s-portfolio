import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Button from "./button";
import Container from "./container";
import Hero from "./hero";
import fourtitude_1 from "./assets/fourtitude_1.png";
import fourtitude_2 from "./assets/fourtitude_2.png";

function Content() {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("bg-toggled", toggled);
    document.body.classList.toggle("bg-default", !toggled);
  }, [toggled]);

  const iconColor = toggled ? "%23000000" : "%23FFFFFF";
  const textColor = toggled ? "text-black" : "text-white";

  const devIcon = (src: string, alt: string) => (
    <img
      src={`${src}?color=${iconColor}`}
      alt={alt}
      className={`w-8 lg:w-16 hover:scale-135 transition-all`}
    />
  );

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
        <div className="text-3xl lg:text-5xl font-bold">
          <p>About Me</p>
        </div>
        <div className="text-md lg:text-2xl font-light mt-5 lg:mt-10">
          <p>
            I am a 4th-year Computer Engineering student at FEU Institute of
            Technology. I enjoy working on the creative side of software
            development, especially front-end projects where I can focus on
            design and user experience.
          </p>
        </div>

        {/* Languages */}
        <div className="lg:text-4xl mt-11 lg:mt-21 font-bold">
          <p>Languages</p>
        </div>
        <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(168,135,0),_transparent_75%)] bg-no-repeat">
          <Container toggled={toggled} height="h-20 lg:h-35">
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              {devIcon(
                "https://devicon-website.vercel.app/api/html5/plain.svg",
                "HTML5 Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/css3/plain.svg",
                "CSS3 Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/cplusplus/plain.svg",
                "C++ Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/java/plain.svg",
                "Java Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/python/plain.svg",
                "Python Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/javascript/plain.svg",
                "JavaScript Icon"
              )}
            </div>
          </Container>
        </div>

        {/* Frameworks */}
        <div className="lg:text-4xl mt-8 lg:mt-15 font-bold">
          <p>Frameworks / Libraries</p>
        </div>
        <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(22,103,135),_transparent_75%)] bg-no-repeat">
          <Container toggled={toggled} height="h-20 lg:h-35">
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              {devIcon(
                "https://devicon-website.vercel.app/api/react/original.svg",
                "React Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
                "Tailwind Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/nodejs/plain.svg",
                "NodeJS Icon"
              )}
            </div>
          </Container>
        </div>

        {/* Tools */}
        <div className="lg:text-4xl mt-8 lg:mt-15 font-bold">
          <p>Tools</p>
        </div>
        <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(87,23,18),_transparent_75%)] bg-no-repeat">
          <Container toggled={toggled} height="h-20 lg:h-35">
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              {devIcon(
                "https://devicon-website.vercel.app/api/bash/plain.svg",
                "Bash Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/git/plain.svg",
                "Git Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/github/original.svg",
                "Github Icon"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/figma/plain.svg",
                "Figma Icon"
              )}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-plain.svg"
                style={{
                  filter: toggled ? "none" : "brightness(0) invert(1)",
                }}
                alt="Vite Icon"
                className="w-8 lg:w-16 hover:scale-135 transition-all"
              />
            </div>
          </Container>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${
          textColor
        } mt-20 lg:mt-40 scroll-mt-30 lg:scroll-mt-40 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <div className="text-3xl lg:text-5xl font-bold mb-7 lg:mb-14">
          <p>Projects</p>
        </div>
        <div className="relative rounded-xl bg-[radial-gradient(circle_at_center_250%,_rgba(191,49,44,1),_transparent_80%)] bg-no-repeat">
          <Container toggled={toggled} height="h-40 lg:h-80">
            <div className="absolute top-5 left-5 lg:top-10 lg:left-10 text-left">
              <p className="text-md lg:text-3xl font-semibold">
                Fourtitude Garage
              </p>
              <p className="text-xs lg:text-lg mt-1 lg:mt-2 font-light w-30 lg:w-60">
                Automobile Shop Point-of-Sale (POS) System
              </p>
            </div>
          </Container>

          {/* Project Images */}
          <div className="absolute top-28 lg:top-45 left-5 lg:left-10 flex gap-5 lg:gap-10">
            <img
              src={fourtitude_1}
              alt="Fourtitude 1"
              className="w-80 lg:w-160 rounded-sm"
            />
            <img
              src={fourtitude_2}
              alt="Fourtitude 2"
              className="w-80 lg:w-160 rounded-sm"
            />
          </div>
        </div>
      </section>
      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
