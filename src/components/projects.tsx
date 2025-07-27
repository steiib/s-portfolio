import ProjectCard from "./containers/project_container";
import CardWrapper from "./card_animation";
import { motion } from "motion/react";
import fourtitude_1 from "../images/fourtitude_1.png";
import fourtitude_2 from "../images/fourtitude_2.png";
import palengke_1 from "../images/palengke1.png";
import palengke_2 from "../images/palengke2.png";

interface ProjectProps {
  toggled: boolean;
}

const Projects = ({ toggled }: ProjectProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-16">
          <p>Projects</p>
        </div>
      </motion.div>

      {/* Project 1 */}
      <div className="relative mb-45 lg:mb-85">
        <CardWrapper>
          <ProjectCard
            title="Fourtitude Garage"
            subtitle="Automobile Shop Point-of-Sale (POS) System"
            description="A point-of-sale system for managing car purchases, rentals, and services. Developed as a final project for our Data Structures and Algorithms / Database course."
            images={[fourtitude_1, fourtitude_2]}
            toggled={toggled}
            gradientColor="191,49,44"
          />
        </CardWrapper>
      </div>

      {/* Project 2 */}
      <div className="relative mb-100 lg:mb-160">
        {" "}
        // to be changed later
        <CardWrapper>
          <ProjectCard
            title="PALengke"
            subtitle="Wet & Dry Market Waypoint Navigation System"
            description="A wayfinding system that helps public market customers locate products, compare prices, and navigate to stores. Developed as a final project for our Software Design course."
            images={[palengke_1, palengke_2]}
            toggled={toggled}
            gradientColor="29,103,112"
          />
        </CardWrapper>
      </div>
    </>
  );
};

export default Projects;
