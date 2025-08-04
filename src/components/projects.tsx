import ProjectCard from "./containers/project_container";
import CardWrapper from "./card_animation";
import { motion } from "motion/react";
import fourtitude_1 from "../images/fourtitude_1.png";
import fourtitude_2 from "../images/fourtitude_2.png";
import palengke_1 from "../images/palengke1.png";
import palengke_2 from "../images/palengke2.png";
import gastrobot_1 from "../images/gastrobot2.png";
import gastrobot_2 from "../images/gastrobot1.png";

interface ProjectProps {
  toggled: boolean;
}

const Projects = ({ toggled }: ProjectProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-12">
          <p>Projects</p>
        </div>
      </motion.div>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative mb-100 lg:mb-160">
          {" "}
          {/* to be changed later */}
          <CardWrapper>
            <ProjectCard
              title="GastroBot"
              subtitle="IoT-Based Domestic Insecticide Applicator Bot"
              description="A remote-controlled bot that sprays insecticide, vacuums dust, detects obstacles, and provides real-time system status. It features 180° sprayer and camera movement and detects gas presence in the area."
              images={[gastrobot_1, gastrobot_2]}
              toggled={toggled}
              gradientColor="158,149,63"
              tags={[
                "React Native",
                "JavaScript",
                "NodeMCU",
                "Arduino IOT Cloud",
                "ngrok",
              ]}
              link="https://drive.google.com/file/d/1U8s2t8wRJDZFmg3Aak7xoYHnBSC3N1ae/view?usp=sharing"
            />
          </CardWrapper>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
