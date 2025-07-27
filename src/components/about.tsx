import Container from "./container";

interface AboutProps {
  toggled: boolean;
}

const About = ({ toggled }: AboutProps) => {
  const iconColor = toggled ? "%23000000" : "%23FFFFFF";

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

  return (
    <>
      <div className="text-3xl lg:text-5xl font-bold">
        <p>About Me</p>
      </div>
      <div className="text-md lg:text-2xl font-light mt-5 lg:mt-10">
        <p>
          I am a 4th-year Computer Engineering student at FEU Institute of
          Technology. I enjoy working on the creative side of software
          development, especially front-end projects where I can focus on design
          and user experience.
        </p>
      </div>

      {/* Languages */}
      <div className="lg:text-4xl mt-11 lg:mt-21 font-bold">
        <p>Languages</p>
      </div>
      <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(255,255,255),_transparent_75%)] bg-no-repeat">
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
      <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(255,255,255),_transparent_75%)] bg-no-repeat">
        <Container toggled={toggled} height="h-20 lg:h-35">
          <div className="flex justify-center items-center gap-5 lg:gap-10">
            {devIcon(
              "https://devicon-website.vercel.app/api/react/original.svg",
              "ReactJS"
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
      <div className="bg-[radial-gradient(circle_at_50%_400%,_rgba(255,255,255),_transparent_75%)] bg-no-repeat">
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
                className="w-9 lg:w-18 transition-all duration-200 group-hover:-translate-y-3"
              />
              <div className="absolute top-full text-xs lg:text-[16px] font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
                Vite
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
