import ProjectCard from "./containers/project_container";
import CardWrapper from "./card_animation";
import { motion } from "motion/react";
import fourtitude_1 from "../images/fourtitude_1.png";
import fourtitude_2 from "../images/fourtitude_2.png";
import palengke_1 from "../images/palengke1.png";
import palengke_2 from "../images/palengke2.png";
import keychase_1 from "../images/keychase1.png";
import keychase_2 from "../images/keychase2.png";
import gastrobot_1 from "../images/gastrobot2.png";
import gastrobot_2 from "../images/gastrobot1.png";

interface ProjectProps {
  toggled: boolean;
}

const Projects = ({ toggled }: ProjectProps) => {
  return (
    <>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-12">
          <p>Featured Projects</p>
        </div>
      </motion.div>

      {/* Project 1 */}
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative mb-40 lg:mb-75">
          <CardWrapper>
            <ProjectCard
              title="Fourtitude Garage"
              subtitle="Automobile Shop Point-of-Sale (POS) System"
              description="A point-of-sale system for managing car purchases, rentals, and services. Developed as a final project for our Data Structures and Algorithms / Database course."
              images={[fourtitude_1, fourtitude_2]}
              toggled={toggled}
              gradientColor="191,49,44"
              tags={["HTML", "CSS", "JavaScript", "Python", "Flask"]}
              link="https://github.com/steiib/Fourtitude-Garage"
            />
          </CardWrapper>
        </div>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative mb-40 lg:mb-75">
          {" "}
          <CardWrapper>
            <ProjectCard
              title="PALengke"
              subtitle="Wet & Dry Market Waypoint Navigation System"
              description="A wayfinding system that helps public market customers locate products, compare prices, and navigate to stores. Developed as a final project for our Software Design course."
              images={[palengke_1, palengke_2]}
              toggled={toggled}
              gradientColor="29,103,112"
              tags={["HTML", "CSS", "JavaScript", "Python", "Django", "SQLite"]}
              link="https://github.com/steiib/PALengke"
            />
          </CardWrapper>
        </div>
      </motion.div>

      {/* Project 3 */}
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative mb-40 lg:mb-75">
          {" "}
          <CardWrapper>
            <ProjectCard
              title="GastroBot"
              subtitle="IoT-Based Domestic Insecticide Applicator Bot"
              description="A remote-controlled bot that sprays insecticide, vacuums dust, detects obstacles, and provides real-time system status. It features 180° sprayer and camera movement and detects gas presence in the area."
              images={[gastrobot_1, gastrobot_2]}
              toggled={toggled}
              gradientColor="168,135,50"
              tags={[
                "React Native",
                "JavaScript",
                "NodeMCU",
                "Arduino IoT Cloud",
              ]}
              link="https://drive.google.com/drive/folders/1EB3Ue_tCs3PlpLI2dJo68rhIV2ioyCZ-?usp=sharing"
            />
          </CardWrapper>
        </div>
      </motion.div>

      {/* Project 4 */}
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative mb-50 lg:mb-105">
          {" "}
          <CardWrapper>
            <ProjectCard
              title="KeyChase"
              subtitle="Arduino-Based Anti-theft Keychain"
              description="A portable security device for personal belongings that detects motion, connects via Bluetooth, and sends instant alerts. Its mobile app displays real-time status, device direction, and allows remote alarm activation."
              images={[keychase_1, keychase_2]}
              toggled={toggled}
              gradientColor="221,224,206"
              tags={["Embedded System", "Arduino Nano", "MIT App Inventor"]}
              link="https://drive.google.com/drive/folders/1Bf0EeSz0W-cWva2WZ4AyWyzxUJWwsyHP?usp=sharing"
            />
          </CardWrapper>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
