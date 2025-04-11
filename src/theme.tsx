import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function Theme() {
  const [toggled, setToggled] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("bg-toggled", toggled);
    document.body.classList.toggle("bg-default", !toggled);
  }, [toggled]);

  return (
    <>
      <Navbar toggled={toggled} />
      <Button toggled={toggled} setToggled={setToggled} />
    </>
  );
}

export default Theme;
