import React from "react";

export default function ProjectCard( { link, image, title, description, tags }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="tags">
        {tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </span>
      <div className="overlay">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
      </div>
    </a>
  );
}
