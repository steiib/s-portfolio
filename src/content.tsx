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

  /* Name Placeholder */
  return (
    <>
      <Navbar toggled={toggled} />
      <div
        className={`${
          toggled ? "text-black" : "text-white"
        } w-11/12 max-w-sm mx-auto text-center md:max-w-3xl`}
      >
        <p className="text-xl md:text-4xl font-semibold mt-10">Hi, I'm</p>
        <img
          src={toggled ? topo_b : topo_w}
          alt="NameBG"
          className="w-full h-auto mx-auto block md:mt-3 md:mb-3"
        />
        <div className="text-2xl md:text-5xl font-semibold tracking-widest">
          <p>S T E V E</p>
          <p>F A J I L A N</p>
        </div>
      </div>

      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Content;
