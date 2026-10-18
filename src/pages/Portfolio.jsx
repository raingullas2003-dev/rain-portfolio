
import { useEffect, useState } from "react";
import Fairy from "../components/Fairy/Fairy";
import "./Portfolio.css";
import "./OtherExperiences.css";
import fairyDesktop from "../assets/projects/fairy-desktop.jpg";
import gestureBot from "../assets/projects/gesture-bot.png";
import foodBox from "../assets/projects/food-box.png";
import woodSorting from "../assets/projects/wood-sorting.png";
import eventPhoto1 from "../assets/experiences/1.jpg";
import eventPhoto2 from "../assets/experiences/2.jpg";
import eventPhoto3 from "../assets/experiences/3.jpg";
import eventPhoto4 from "../assets/experiences/4.jpg";
import eventPhoto5 from "../assets/experiences/5.jpg";

const sections = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "other-experiences", label: "Other Experiences" },
];

const eventPhotos = [
  { id: 1, image: eventPhoto1, label: "Event Photo 1" },
  { id: 2, image: eventPhoto2, label: "Event Photo 2" },
  { id: 3, image: eventPhoto3, label: "Event Photo 3" },
  { id: 4, image: eventPhoto4, label: "Event Photo 4" },
  { id: 5, image: eventPhoto5, label: "Event Photo 5" },
];

const projects = [
  {
    id: 1,
    image: fairyDesktop,
    category: "AI DESKTOP COMPANION",
    title: "Fairy — AI Desktop Companion",
    description:
      "A personal AI assistant combining local language models, text conversations, and voice output. Fairy uses Ollama for local AI responses and Kokoro text-to-speech to speak its replies.",
    tags: ["Python", "Ollama", "Kokoro TTS", "Voice AI"],
  },
  {
    id: 2,
    image: gestureBot,
    category: "ROBOTICS & EMBEDDED SYSTEMS",
    title: "Hand Gesture Controlled Bot",
    description:
      "A gesture-controlled robotic vehicle using Arduino, sensors, an accelerometer, and Bluetooth communication. Hand movements are translated into commands that control the robot's movement.",
    tags: ["Arduino", "Accelerometer", "Bluetooth", "Robotics"],
  },
  {
    id: 3,
    image: foodBox,
    category: "TEMPERATURE CONTROL",
    title: "Heating and Cooling Food Box",
    description:
      "A temperature-controlled food storage system using a Peltier module, sensors, and a microcontroller to provide both heating and cooling functionality.",
    tags: ["Peltier Module", "Sensors", "Microcontroller"],
  },
  {
    id: 4,
    image: woodSorting,
    category: "AI & COMPUTER VISION",
    title: "Wood Sorting Device with Vision-Based Quality Grading",
    description:
      "A wood sorting system that uses image processing and deep learning to analyze wood materials and perform quality grading based on visual characteristics.",
    tags: ["Image Processing", "Deep Learning", "Computer Vision"],
  },
];

function Portfolio({ onReturn }) {
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  function navigateToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setWidgetOpen(false);
  }

  return (
    <main className="portfolio-page">
      <nav className="portfolio-topbar">
        <button
          type="button"
          className="portfolio-brand"
          onClick={() => navigateToSection("home")}
        >
          <span className="brand-dot" />
          Rain<span className="brand-accent">'s</span> Portfolio
        </button>

        <button type="button" className="return-button" onClick={onReturn}>
          ← Back to Fairy
        </button>
      </nav>

      <section id="home" className="portfolio-hero portfolio-section">
        <p className="section-eyebrow">WELCOME TO MY WORLD</p>
        <h1>
          Building ideas into
          <span className="gradient-text"> digital experiences.</span>
        </h1>
        <p className="hero-description">
          I'm Rainer Gullas, a Computer Engineering graduate interested in
          frontend development, interactive applications, and technology.
        </p>

        <button
          type="button"
          className="primary-button"
          onClick={() => navigateToSection("projects")}
        >
          Explore my projects <span aria-hidden="true">↘</span>
        </button>

        <div className="hero-decoration" aria-hidden="true">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-orbit hero-orbit-three" />
          <div className="hero-orbit-center">RG</div>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span /> Scroll to explore
        </div>
      </section>

      <section id="about" className="portfolio-section content-section">
        <p className="section-eyebrow">01 / ABOUT</p>
        <h2>A little about me.</h2>
        <div className="section-card about-card">
          <p>
            I'm a Bachelor of Science in Computer Engineering graduate from
            the Technological Institute of the Philippines – Quezon City.
            I enjoy creating interfaces, building interactive projects, and
            exploring how software and hardware can work together.
          </p>
          <p>
            This portfolio is a space to showcase my projects, the skills
            I've developed, and what I'm continuing to learn.
          </p>
        </div>
      </section>

      <section id="skills" className="portfolio-section content-section">
        <p className="section-eyebrow">02 / SKILLS</p>
        <h2>Tools I work with.</h2>
        <p className="section-description">
          Technologies I've used in projects and continue to develop.
        </p>

        <div className="skills-grid">
          <article className="section-card skill-card">
            <span className="skill-number">01</span>
            <h3>Frontend Development</h3>
            <p>HTML, CSS, JavaScript, React, React Native</p>
          </article>

          <article className="section-card skill-card">
            <span className="skill-number">02</span>
            <h3>UI Development</h3>
            <p>
              Responsive layouts, reusable components, navigation, and
              interactions
            </p>
          </article>

          <article className="section-card skill-card">
            <span className="skill-number">03</span>
            <h3>Hardware & Embedded</h3>
            <p>Arduino, sensors, LEDs, LCDs, buttons, and servo projects</p>
          </article>

          <article className="section-card skill-card">
            <span className="skill-number">04</span>
            <h3>AI & Computer Vision</h3>
            <p>
              Exploring AI-assisted applications and computer-vision projects
            </p>
          </article>
        </div>
      </section>

      <section id="experience" className="portfolio-section content-section">
        <p className="section-eyebrow">03 / EXPERIENCE</p>
        <h2>Where I've gained experience.</h2>
        <p className="section-description">
          My professional experience in robotics, automation, and
          technology development.
        </p>

        <article className="section-card experience-card">
          <div className="experience-marker" />

          <div>
            <p className="experience-label">INTERNSHIP</p>

            <h3>Erovoutika Robotics and Automation Solutions</h3>

            <p>
              <strong>Research and Development Intern</strong>
              <br />
              March 2025 – April 2025
              <br />
              Makati City
            </p>

            <div className="tag-list">
              <span>Research & Development</span>
              <span>Robotics</span>
              <span>Automation</span>
            </div>
          </div>
        </article>
      </section>

      <section id="projects" className="portfolio-section content-section">
        <p className="section-eyebrow">04 / PROJECTS</p>
        <h2>Things I've built.</h2>
        <p className="section-description">
          A selection of projects exploring AI, software, computer vision,
          and hardware interaction.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <button
              type="button"
              className="section-card project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <span className="project-image-number">
                  {String(project.id).padStart(2, "0")}
                </span>
                <span className="project-view-hint">View project ↗</span>
              </div>

              <div className="project-copy">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section
        id="other-experiences"
        className="portfolio-section content-section other-experiences-section"
      >
        <p className="section-eyebrow">05 / OTHER EXPERIENCES</p>
        <h2>Beyond the projects.</h2>
        <p className="section-description">
          Events, competitions, and experiences that bring technology and
          people together.
        </p>

        <article className="section-card event-feature-card">
          <div className="event-feature-top">
            <span className="event-type-label">ROBOTICS COMPETITION</span>
            <span className="event-date">
              <span aria-hidden="true">▦</span>
              February 27, 2024
            </span>
          </div>

          <h3>Cyber Fighter: The Ultimate Sumobot Battle</h3>
          <p>
            An event centered on sumobot competition, robotics, and
            engineering. This section will showcase event highlights,
            memorable moments, and photos from the experience.
          </p>

          <div className="event-photo-grid">
            {eventPhotos.map((photo) => (
              <div
                className={`event-photo-placeholder event-photo-${photo.id}`}
                key={photo.id}
              >
                <img
                  className="event-photo-image"
                  src={photo.image}
                  alt={photo.label}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <p className="event-gallery-caption">
            Cyber Fighter event gallery
          </p>
        </article>
      </section>

      <footer className="portfolio-footer">
        <p>Designed and built by Rainer Gullas.</p>
        <button type="button" onClick={() => navigateToSection("home")}>
          Back to top ↑
        </button>
      </footer>

      <div className="fairy-widget-container">
        {widgetOpen && (
          <div
            className="fairy-navigation-panel"
            id="fairy-navigation"
            aria-label="Fairy portfolio navigation"
          >
            <div className="fairy-panel-heading">
              <div>
                <p className="section-eyebrow">YOUR GUIDE</p>
                <h2>Where to?</h2>
              </div>
              <button
                type="button"
                className="fairy-panel-close"
                onClick={() => setWidgetOpen(false)}
                aria-label="Close Fairy navigation"
              >
                ×
              </button>
            </div>

            <p className="fairy-panel-description">
              Choose a destination and I'll take you there.
            </p>

            <div className="fairy-navigation-links">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => navigateToSection(section.id)}
                >
                  <span className="fairy-link-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.label}</span>
                  <span className="fairy-link-arrow">↗</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          className={`fairy-widget-button ${widgetOpen ? "is-open" : ""}`}
          onClick={() => setWidgetOpen((open) => !open)}
          aria-label={
            widgetOpen ? "Close Fairy navigation" : "Open Fairy navigation"
          }
          aria-expanded={widgetOpen}
          aria-controls="fairy-navigation"
        >
          <Fairy type="widget" />
          <span className="fairy-widget-status" />
        </button>
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <div className="project-modal-image-container">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="project-modal-image"
              />
            </div>

            <div className="project-modal-content">
              <p className="project-category">{selectedProject.category}</p>

              <h2 id="project-modal-title">{selectedProject.title}</h2>

              <p className="project-modal-description">
                {selectedProject.description}
              </p>

              <div className="tag-list">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Portfolio;
