import React from "react";
import AboutCard from "./AboutCard";
import leader from "../images/icons8-man-leader.png";
import developer from "../images/icons8-software-developer.png";
import student from "../images/icons8-student.png";

const About = () => {
  const sections = [
    {
      title: "Skilled Software Engineer",
      icon: developer,
      content: "I take my craft seriously and am always looking to learn and improve. Beyond learning about data structures and algorithms, various programming languages, and other fundamentals of software development, I have leveraged my education and internship opportunities to develop a range of skills in software engineering such as web application development, devops, software simulation, computer networking/communications, cybersecurity, and machine learning. I also work on personal projects to further develop my skills and knowledge."
    },
    {
      title: "Proactive Leader",
      icon: leader,
      content: "Throughout my studies and work experiences I have consistently taken on leadership roles. For my senior capstone project, I coordinated the members of my team which by delegating tasks, setting deadlines, and ensuring that project milestones were being met on time. With the Coptic Orthodox Student Association at UBC I was a club executive for four years, during which I was responsible for organizing events, leading meetings, and maintining good standing with the Alma Mater Society. At Intel I took on the initiative of formally leading the intern cohort in organizing social events and activities."
    },
    {
      title: "Top 4% Student",
      icon: student,
      content: "I have achieved a GPA comfortably within the top 4% of my cohort. I have also maintained a perfect straight-A record so far in my studies across all subject matter, with only two courses remaining. Throughout my studies I have demonstrated excellence by earning the top score in my section of a number of courses, including: Basic Algorithms and Data Structures, Intermediate Algorithms and Data Structures, Machine Learning and Data Mining, Computer Communications, Computing Systems I, University Writing, Technical Communication, and Principles of Microeconomics."
    }
  ]
  return (
    <section class="about">
      <h1>About Me</h1>
      <div class="about-section">
        {sections.map((section, index) => (AboutCard(index, section.title, section.icon, section.content)))}
      </div>
    </section>
  );
};

export default About;
