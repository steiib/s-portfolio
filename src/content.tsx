import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Button from "./button";
import topo_b from "./assets/topo_b.png";
import topo_w from "./assets/topo_w.png";

function Content() {
  const [toggled, setToggled] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("bg-toggled", toggled);
    document.body.classList.toggle("bg-default", !toggled);
  }, [toggled]);

  return (
    <>
      <Navbar toggled={toggled} />

      {/* Home Section */}
      <section
        id="home"
        className={`${
          toggled ? "text-black" : "text-white"
        } scroll-mt-40 w-11/12 max-w-sm mx-auto text-center md:max-w-3xl md:pt-45 pt-25`}
      >
        <p className="text-xl md:text-4xl font-bold mt-8 md:mt-10">Hi, I'm</p>
        <img
          src={toggled ? topo_b : topo_w}
          alt="NameBG"
          className="w-full h-auto mx-auto block md:mt-3 md:mb-3"
        />
        <div className="text-3xl md:text-6xl font-extrabold tracking-widest cursor-pointer hover:scale-120 transition-all">
          <p>S T E V E</p>
          <p>F A J I L A N</p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`${
          toggled ? "text-black" : "text-white"
        } scroll-mt-40 w-11/12 max-w-sm mx-auto text-center mt-15 md:mt-55 md:max-w-4xl`}
      >
        <div className="text-2xl md:text-4xl font-bold">
          <p>About Me</p>
        </div>
        <div className="text-sm md:text-2xl font-light mt-4 md:mt-8">
          <p>
            I am a 4th-year Computer Engineering student at FEU Institute of
            Technology. I enjoy working on the creative side of software
            development, especially front-end projects where I can focus on
            design and user experience.
          </p>
        </div>
        <div className="md:text-3xl mt-8 md:mt-16 font-semibold">
          <p>Languages</p>
        </div>
      </section>

      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
