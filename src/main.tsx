import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Content from "./content.tsx";
import "./index.css";
import Navbar from "./navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Content />
  </StrictMode>
);
