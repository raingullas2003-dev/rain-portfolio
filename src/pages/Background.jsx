import { useState } from "react";
import Fairy from "../components/Fairy/Fairy";

import {
  FaCode,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaMicrochip,
  FaWrench,
  FaMicrosoft,
  FaRobot,
  FaDatabase,
  FaFire
} from "react-icons/fa6";

import "./Background.css";

function Background({ setCurrentPage }) {

  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <section className="page background-page">
      
      <button
        className="back-button"
        onClick={() => setCurrentPage("home")}
        aria-label="Go back to home"
      >
        ←
      </button>

      {/* PAGE TITLE */}

      <h1 className="page-title">
        Background
      </h1>


      {/* MAIN CONTENT */}

      <div className="background-layout">

        <div className="background-content">


          {/* =========================
              ABOUT ME
          ========================= */}

          <section className="info-section">

            <h2>
              About Me
            </h2>

            <div className="section-content">

              <p>
                I graduated with a Bachelor of Science in Computer Engineering, 
                with interests in web development, embedded systems, robotics, 
                automation, and artificial intelligence.
              </p>

              <p>
                I enjoy building practical projects that combine
                software, hardware, and intelligent systems.
              </p>

            </div>

          </section>


          {/* =========================
              EDUCATION
          ========================= */}

          <section className="info-section">

            <h2>
              Education
            </h2>

            <div className="section-content">

              <h3>
                Technological Institute of the Philippines
              </h3>

              <p>
                Bachelor of Science in Computer Engineering
                <br />
                2021 – 2026
              </p>


              <h3>
                Angono Private High School
              </h3>

              <p>
                2019 – 2021
              </p>

            </div>

          </section>


          {/* =========================
              SKILLS
          ========================= */}

          <section
            id="skills-section"
            className="info-section skills-section"
          >

            <h2>
              Skills
            </h2>


            <div className="skills-grid">


              {/* PROGRAMMING LANGUAGES */}

              <div className="skill-category">

                <h3>

                  <span className="category-icon">
                    <FaCode />
                  </span>

                  Programming Languages

                </h3>


                <div className="skill-list">

                  <div className="skill-item">
                    <FaCode />
                    <span>C++</span>
                  </div>

                  <div className="skill-item">
                    <FaPython />
                    <span>Python</span>
                  </div>

                  <div className="skill-item">
                    <FaJs />
                    <span>JavaScript</span>
                  </div>

                </div>

              </div>


              {/* WEB DEVELOPMENT */}

              <div className="skill-category">

                <h3>

                  <span className="category-icon">
                    <FaReact />
                  </span>

                  Web Development

                </h3>


                <div className="skill-list">

                  <div className="skill-item">
                    <FaHtml5 />
                    <span>HTML</span>
                  </div>

                  <div className="skill-item">
                    <FaCss3Alt />
                    <span>CSS</span>
                  </div>

                  <div className="skill-item">
                    <FaReact />
                    <span>React</span>
                  </div>

                </div>

              </div>


              {/* EMBEDDED SYSTEMS / IOT */}

              <div className="skill-category">

                <h3>

                  <span className="category-icon">
                    <FaMicrochip />
                  </span>

                  Embedded Systems / IoT

                </h3>


                <div className="skill-list">

                  <div className="skill-item">
                    <FaMicrochip />
                    <span>Arduino</span>
                  </div>

                  <div className="skill-item">
                    <FaRobot />
                    <span>Sensor Integration</span>
                  </div>

                  <div className="skill-item">
                    <FaMicrochip />
                    <span>Microcontroller Programming</span>
                  </div>

                </div>

              </div>


              {/* TOOLS & SOFTWARE */}

              <div className="skill-category">

                <h3>

                  <span className="category-icon">
                    <FaWrench />
                  </span>

                  Tools & Software

                </h3>


                <div className="skill-list">

                  <div className="skill-item">
                    <FaWrench />
                    <span>AutoCAD</span>
                  </div>

                  <div className="skill-item">
                    <FaMicrosoft />
                    <span>Microsoft Office</span>
                  </div>

                  <div className="skill-item">
                    <FaRobot />
                    <span>ChatGPT</span>
                  </div>

                  <div className="skill-item">
                    <FaRobot />
                    <span>Claude</span>
                  </div>

                </div>

              </div>


              {/* DATABASE */}

              <div className="skill-category">

                <h3>

                  <span className="category-icon">
                    <FaDatabase />
                  </span>

                  Database

                </h3>


                <div className="skill-list">

                  <div className="skill-item">

                    <FaFire />

                    <span>
                      Firebase
                    </span>

                  </div>

                </div>

              </div>


            </div>

          </section>


          {/* =========================
              EXPERIENCE
          ========================= */}

          <section className="info-section">

            <h2>
              Experience
            </h2>

            <div className="section-content">

              <h3>
                Erovoutika Robotics and Automation Solutions
              </h3>

              <p>
                Research and Development Intern
                <br />
                March – April 2025
                <br />
                Makati City
              </p>


              <ul>

                <li>
                  Developed a self-balancing robot using control systems
                  and sensor integration.
                </li>

                <li>
                  Designed and built a closet humidifier mobile
                  application for environmental monitoring and automation.
                </li>

                <li>
                  Conducted a webinar titled
                  "Microcontrollers in Robotics: Enabling Communications and Controls."
                </li>

              </ul>

            </div>

          </section>


          {/* =========================
              AWARDS
          ========================= */}

          <section className="info-section">

            <h2>
              Awards
            </h2>

            <div className="section-content">

              <h3>
                Cyber Fighter: The Ultimate Sumobot Competition
              </h3>

              <p>
                Champion
                <br />
                University of Santo Tomas
                <br />
                February 27, 2024
              </p>

            </div>

          </section>


        </div>

      </div>


      {/* =========================
          FLOATING FAIRY
      ========================= */}

      <div className="background-fairy">

        <button
          className="fairy-button"
          onClick={() => setGuideOpen(!guideOpen)}
          aria-label="Open Fairy navigation"
        >

          <Fairy type="widget" />

        </button>


        {/* FAIRY GUIDE */}

        <div
          className={`fairy-guide ${
            guideOpen ? "active" : ""
          }`}
        >

          <h3>
            Fairy Guide
          </h3>


          <button
            onClick={() => {
              setCurrentPage("home");
              setGuideOpen(false);
            }}
          >
            Home
          </button>


          <button
            onClick={() => {
              document
                .getElementById("skills-section")
                ?.scrollIntoView({
                  behavior: "smooth"
                });

              setGuideOpen(false);
            }}
          >
            Skills
          </button>


          <button
            onClick={() => {
              document
                .querySelector(".info-section:nth-of-type(1)")
                ?.scrollIntoView({
                  behavior: "smooth"
                });

              setGuideOpen(false);
            }}
          >
            About Me
          </button>


          <button
            onClick={() => {
              document
                .querySelector(".info-section:nth-of-type(2)")
                ?.scrollIntoView({
                  behavior: "smooth"
                });

              setGuideOpen(false);
            }}
          >
            Education
          </button>


          <button
            onClick={() => {
              document
                .querySelector(".info-section:nth-of-type(4)")
                ?.scrollIntoView({
                  behavior: "smooth"
                });

              setGuideOpen(false);
            }}
          >
            Experience
          </button>


          <button
            onClick={() => {
              setCurrentPage("projects");
              setGuideOpen(false);
            }}
          >
            Projects
          </button>


        </div>

      </div>


    </section>
  );
}

export default Background;