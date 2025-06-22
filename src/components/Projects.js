import React from "react";
import "../css/Projects.css";

export default function Projects() {
  const arr = {
    "Unit Converter": {
      description: "A simple and static unit converter built with HTML, CSS, and JavaScript. Converts length, weight, and temperature units.",
      github: "https://github.com/DhruvPatel0711/JavaScript_Practice_Projects/tree/main/Unitconverter"
    },
    "Scientific Calculator": {
      description: "A calculator supporting scientific operations with light/dark mode toggle. Built with HTML, CSS, and JavaScript.",
      github: "https://github.com/DhruvPatel0711/JavaScript_Practice_Projects/tree/main/ScientificCalculator"
    },
    "Expense Tracker": {
      description: "A full-stack expense tracker with filtering, charts, and database storage. Built using React, MongoDB, and Java.",
      github: "https://github.com/DhruvPatel0711/JavaScript_Practice_Projects/tree/main/ToDos"
    },
    "ToDos": {
      description: "A basic to-do list app using HTML, CSS, and JavaScript. Features simple add and remove functionality. Design based on figma",
      github: "https://github.com/yourusername/todo-app"
    },
    "Pomodoro Timer Clone": {
      description: "A React-based Pomodoro timer. Includes start/pause/reset and task addtion.",
      github: "https://github.com/DhruvPatel0711/PomoFocus"
    },
    "Recipe Giene": {
      description: "A recipe app that fetches food recipes using an API. Built using React, Node.js, and MongoDB.",
      github: "https://github.com/DhruvPatel0711/RecipeGiene"
    },
    "Wordle": {
      description: "A mini-game where you guess a word with limited attempts. Each wrong guess 'kills' a programming language, ending in Assembly. Inspired by FreeCodeCamp React video.",
      github: "https://github.com/DhruvPatel0711/Wordle"
    },
    "Traslator": {
      description: "A multi-language translator built using React and Google Translate API. Supports English, Hindi, Gujarati, French, and Spanish.",
      github: "https://github.com/DhruvPatel0711/JavaScript_Practice_Projects/tree/main/Translator"
    }
  };

  React.useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("aos-animate");
              }
            });
          },
          { threshold: 0.1 }
        );
    
        document.querySelectorAll(".aos-init").forEach((el) =>
          observer.observe(el)
        );
    
        return () => observer.disconnect();
  }, []);

  return (
    <div className="projects" id="projects">
      <div className="projects-header aos-init">
        <h2>Projects</h2>
      </div>
      <div className="project-grid aos-init">
        {Object.entries(arr).map(([title, item], index) => (
          <div className="project-item aos-init" key={index}>
            <h3>{title}</h3>
            <div className="project-item-info">
              <p>{item.description}</p>
              <a href={item.github} className="btn" target="_blank" rel="noopener noreferrer">More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

