import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Button from "./button";
import Container from "./container";
import Hero from "./hero";

function Content() {
  const [toggled, setToggled] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("bg-toggled", toggled);
    document.body.classList.toggle("bg-default", !toggled);
  }, [toggled]);

  return (
    <>
      <Navbar toggled={toggled} />

      {/* Hero Section */}
      <Hero toggled={toggled} />

      {/* About Section */}
      <section
        id="about"
        className={`${
          toggled ? "text-black" : "text-white"
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
        <div className="lg:text-4xl mt-12 lg:mt-24 font-bold">
          <p>Languages</p>
        </div>
        <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(168,135,0),_transparent_75%)] bg-no-repeat">
          <Container toggled={toggled}>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/html5/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/html5/plain.svg?color=%23FFFFFF"
                }
                alt="HTML5 Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/css3/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/css3/plain.svg?color=%23FFFFFF"
                }
                alt="CSS3 Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/cplusplus/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/cplusplus/plain.svg?color=%23FFFFFF"
                }
                alt="C++ Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/java/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/java/plain.svg?color=%23FFFFFF"
                }
                alt="Java Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/python/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/python/plain.svg?color=%23FFFFFF"
                }
                alt="Python Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/javascript/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/javascript/plain.svg?color=%23FFFFFF"
                }
                alt="JavaScript Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
            </div>
          </Container>
        </div>

        {/* Frameworks */}
        <div className="lg:text-4xl mt-8 lg:mt-15 font-bold">
          <p>Frameworks / Libraries</p>
        </div>
        <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(22,103,135),_transparent_75%)] bg-no-repeat">
          <Container toggled={toggled}>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/react/original.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/react/original.svg?color=%23FFFFFF"
                }
                alt="React Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/tailwindcss/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/tailwindcss/plain.svg?color=%23FFFFFF"
                }
                alt="Tailwind Icon"
                className="w-8 lg:w-16 hover:scale-130 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/nodejs/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/nodejs/plain.svg?color=%23FFFFFF"
                }
                alt="NodeJS Icon"
                className="w-8 lg:w-16 hover:scale-125 transition-all"
              />
            </div>
          </Container>
        </div>

        {/* Tools */}
        <div className="lg:text-4xl mt-8 lg:mt-15 font-bold">
          <p>Tools</p>
        </div>
        <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(87,23,18),_transparent_75%)] bg-no-repeat">
          <Container toggled={toggled}>
            <div className="flex justify-center items-center gap-5 lg:gap-10">
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/bash/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/bash/plain.svg?color=%23FFFFFF"
                }
                alt="Bash Icon"
                className="w-8 lg:w-16 hover:scale-125 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/git/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/git/plain.svg?color=%23FFFFFF"
                }
                alt="Git Icon"
                className="w-8 lg:w-16 hover:scale-120 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/github/original.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF"
                }
                alt="Github Icon"
                className="w-8 lg:w-16 hover:scale-125 transition-all"
              />
              <img
                src={
                  toggled
                    ? "https://devicon-website.vercel.app/api/figma/plain.svg?color=%23000000"
                    : "https://devicon-website.vercel.app/api/figma/plain.svg?color=%23FFFFFF"
                }
                alt="Figma Icon"
                className="w-8 lg:w-16 hover:scale-125 transition-all"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-plain.svg"
                style={{
                  filter: toggled ? "none" : "brightness(0) invert(1)",
                }}
                alt="Vite Icon"
                className="w-8 lg:w-16 hover:scale-125 transition-all"
              />
            </div>
          </Container>
        </div>
      </section>

      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
