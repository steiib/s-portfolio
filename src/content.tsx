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
        } scroll-mt-40 w-11/12 max-w-sm mx-auto text-center md:max-w-3xl`}
      >
        <p className="text-xl md:text-4xl font-semibold mt-10">Hi, I'm</p>
        <img
          src={toggled ? topo_b : topo_w}
          alt="NameBG"
          className="w-full h-auto mx-auto block md:mt-3 md:mb-3"
        />
        <div className="text-3xl md:text-6xl font-semibold tracking-widest">
          <p>S T E V E</p>
          <p>F A J I L A N</p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`${
          toggled ? "text-black" : "text-white"
        } scroll-mt-40 w-11/12 max-w-sm mx-auto text-center mt-20 md:mt-40 md:max-w-3xl`}
      >
        <div className="text-xl md:text-3xl font-semibold">
          <p>About Me</p>
        </div>
      </section>

      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
