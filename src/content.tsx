import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Button from "./button";
import Hero from "./hero";
import ProjectCard from "./projects";
import Container from "./container";
import fourtitude_1 from "./assets/fourtitude_1.png";
import fourtitude_2 from "./assets/fourtitude_2.png";
import palengke_1 from "./assets/palengke1.png";
import palengke_2 from "./assets/palengke2.png";

function Content() {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("bg-toggled", toggled);
    document.body.classList.toggle("bg-default", !toggled);
  }, [toggled]);

  const iconColor = toggled ? "%23000000" : "%23FFFFFF";
  const textColor = toggled ? "text-black" : "text-white";

  const devIcon = (src: string, label: string) => (
    <div className="relative flex flex-col items-center group">
      <img
        src={`${src}?color=${iconColor}`}
        alt={label}
        className="w-7 lg:w-14 hover:scale-125 transition-transform"
      />

      <div className="absolute top-full mt-1 text-xs lg:mt-2 lg:text-[16px] font-semibold opacity-1 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        {label}
      </div>
    </div>
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
                "HTML5"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/css3/plain.svg",
                "CSS3"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/cplusplus/plain.svg",
                "C++"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/java/plain.svg",
                "Java"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/python/plain.svg",
                "Python"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/javascript/plain.svg",
                "JavaScript"
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
                "React"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
                "Tailwind"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/nodejs/plain.svg",
                "NodeJS"
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
                "Bash"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/git/plain.svg",
                "Git"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/github/original.svg",
                "GitHub"
              )}
              {devIcon(
                "https://devicon-website.vercel.app/api/figma/plain.svg",
                "Figma"
              )}

              {/* Vite Icon */}
              <div className="relative flex flex-col items-center group">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-plain.svg"
                  style={{
                    filter: toggled ? "none" : "brightness(0) invert(1)",
                  }}
                  alt="Vite"
                  className="w-7 lg:w-14 hover:scale-135 transition-transform"
                />
                <div className="absolute top-full mt-1 text-xs lg:mt-2 lg:text-[16px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  Vite
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${
          textColor
        } mt-25 lg:mt-50 scroll-mt-25 lg:scroll-mt-40 w-11/12 max-w-sm mx-auto text-center lg:max-w-4xl`}
      >
        <div className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-16">
          <p>Projects</p>
        </div>

        {/* Project 1 */}
        <div className="relative mb-45 lg:mb-90">
          <ProjectCard
            title="Fourtitude Garage"
            subtitle="Automobile Shop Point-of-Sale (POS) System"
            description="Fourtitude Garage is a point-of-sale system for managing car purchases, rentals, and services. Developed as a final project for our Data Structures and Algorithms / Database course."
            images={[fourtitude_1, fourtitude_2]}
            toggled={toggled}
          />
        </div>
        {/* Project 2 */}
        <div className="relative mb-45 lg:mb-90">
          <ProjectCard
            title="PALengke"
            subtitle="Project Subtitle"
            description="Brief project description....."
            images={[palengke_1, palengke_2]}
            toggled={toggled}
          />
        </div>
      </section>
      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
