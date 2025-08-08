import Container from "./containers/container";
import { motion } from "motion/react";

interface AboutProps {
  toggled: boolean;
}

const About = ({ toggled }: AboutProps) => {
  const iconColor = toggled ? "%23000000" : "%23FFFFFF";

  const ContainerProps = {
    toggled,
    height: "h-20 lg:h-35",
    rounded: "rounded-3xl",
  };

  const devIcon = (src: string, label: string) => (
    <div className="flex flex-col items-center justify-center group relative">
      <img
        src={`${src}?color=${iconColor}`}
        alt={label}
        className="w-9 lg:w-18 transition-all duration-200 group-hover:-translate-y-3"
      />
      <div className="absolute top-full text-xs lg:text-[16px] font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
        {label}
      </div>
    </div>
  );

  const Motion = (children: React.ReactNode) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      {Motion(
        <>
          <div className="text-3xl lg:text-5xl font-bold mt-10 lg:mt-25">
            <p>About Me</p>
          </div>
          <div className="text-md lg:text-2xl font-light mt-5 lg:mt-10">
            <p>
              I am Steve Andrei Fajilan, a Computer Engineering student with
              hands-on experience in software and hardware development. I enjoy
              working on the creative side of software development, especially
              front-end projects where I can focus on design and user
              experience. In my free time, I also create 3D models in Blender,
              which I incorporate into design and prototyping projects,
              delivering creative and practical solutions to technical
              challenges.
            </p>
          </div>
        </>
      )}

      {/* Languages */}
      <div className="text-xl lg:text-4xl mt-10 lg:mt-20 font-bold">
        <p>Languages</p>
      </div>
      <Container {...ContainerProps}>
        {Motion(
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
              "https://devicon-website.vercel.app/api/typescript/plain.svg",
              "TypeScript"
            )}
          </div>
        )}
      </Container>

      {/* Frameworks */}
      <div className="text-xl lg:text-4xl mt-6 lg:mt-15 font-bold">
        <p>Frameworks / Libraries</p>
      </div>
      <Container {...ContainerProps}>
        {Motion(
          <div className="flex justify-center items-center gap-5 lg:gap-10">
            {devIcon(
              "https://devicon-website.vercel.app/api/react/original.svg",
              "React.JS"
            )}

            {devIcon(
              "https://devicon-website.vercel.app/api/nodejs/plain.svg",
              "Node.JS"
            )}

            {devIcon(
              "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
              "Tailwind"
            )}

            {/* Framer Motion Icon */}
            <div className="relative flex flex-col items-center group">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
                style={{
                  filter: toggled ? "none" : "brightness(0) invert(1)",
                }}
                alt="Framer Motion"
                className="w-9 lg:w-18 transition-all duration-200 group-hover:-translate-y-3"
              />
              <div className="absolute top-full text-xs lg:text-[16px] font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
                Motion
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Tools */}
      <div className="text-xl lg:text-4xl mt-6 lg:mt-15 font-bold">
        <p>Tools</p>
      </div>
      <Container {...ContainerProps}>
        {Motion(
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
              "https://devicon-website.vercel.app/api/blender/original.svg",
              "Blender"
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
                className="w-9 lg:w-18 transition-all duration-200 group-hover:-translate-y-3"
              />
              <div className="absolute top-full text-xs lg:text-[16px] font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
                Vite
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default About;
