import { useState } from "react";
import "./Projects.css";

import Fairy from "../components/Fairy/Fairy";

import gestureBot from "../assets/projects/gesture-bot.png";
import foodBox from "../assets/projects/food-box.png";
import woodSorting from "../assets/projects/wood-sorting.png";
import fairyAI from "../assets/projects/fairy-ai.png";

function Projects({ setCurrentPage }) {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
      title: "Hand Gesture Controlled Bot",
      description:
        "A gesture-controlled robotic vehicle using Arduino, sensors, an accelerometer, and Bluetooth communication. Hand movements are detected and translated into commands that control the robot's movement.",
      image: gestureBot
    },

    {
      title: "Heating and Cooling Food Box",
      description:
        "A temperature-controlled food storage system using a Peltier module, sensors, and a microcontroller to provide both heating and cooling functionality.",
      image: foodBox
    },

    {
      title: "Wood Sorting Device with Vision-Based Quality Grading",
      description:
        "A wood sorting system that uses image processing and deep learning to analyze wood materials and perform quality grading based on visual characteristics.",
      image: woodSorting
    },

    {
      title: "Fairy Personal AI Assistant",
      description:
        "A personal AI assistant developed using Python, Ollama, speech recognition, and Retrieval-Augmented Generation (RAG). The system is designed to interact with users and provide information using locally processed AI.",
      image: fairyAI
    }

  ];


  return (

    <section className="page projects-page">
      
      <button
        className="back-button"
        onClick={() => setCurrentPage("home")}
        aria-label="Go back to home"
      >
        ←
      </button>
      {/* PAGE TITLE */}

      <h1 className="page-title">
        Projects
      </h1>


      {/* PROJECT GRID */}

      <div className="projects-grid">

        {projects.map((project, index) => (

          <button
            key={index}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <h2>
              {project.title}
            </h2>

          </button>

        ))}

      </div>


      {/* PROJECT MODAL */}

      {selectedProject && (

        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="project-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>


            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />


            <h2>
              {selectedProject.title}
            </h2>


            <p>
              {selectedProject.description}
            </p>

          </div>

        </div>

      )}


      {/* ========================================
          FAIRY COMPANION
      ======================================== */}

      <div className="projects-fairy-companion">

        <Fairy type="widget" />

      </div>


    </section>

  );

}

export default Projects;