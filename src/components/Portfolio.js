import React from "react";
import braille_alphabet from "../images/braille-alphabet.jpeg";
import meta_puzzles from "../images/meta-puzzles.png";
import website from "../images/website.png";
import cpen_code from "../images/cpen-code.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Meta Coding Puzzles",
      description: "Solutions to the coding puzzles available on the Meta Careers website.",
      link: "https://github.com/Mark-Mekhail/Meta-Careers-Coding-Puzzle-Solutions",
      image: meta_puzzles
    },
    {
      title: "Braille Translator",
      description: "A script for converting English to Braille and vice-versa",
      link: "https://github.com/Mark-Mekhail/Braille-Translator",
      image: braille_alphabet
    },
    {
      title: "Personal Website",
      description: "The website you are currently viewing.",
      link: "https://github.com/Mark-Mekhail/About-Me",
      image: website
    },
    {
      title: "Course Project Samples",
      description: "A collection of projects completed for a Software Construction course.",
      link: "https://github.com/Mark-Mekhail/CPEN221-Projects",
      image: cpen_code
    }
  ];

  return (
    <section class="portfolio">
      <h2>Portfolio</h2>
      <div class="projects">
        {projects.map((project, index) => (
          <a key={index} href={project.link} class="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <p class="project-description">
              <strong>{project.title}</strong>
              <br />
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;