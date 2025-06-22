import React from "react";
import "../css/About.css";
import educationImage from '../assets/Education.jpg';
import certificationImage from '../assets/Certificate.jpg';

export default function About() {
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

  const educationArray = [
    {
      src: educationImage,
      alt: "High School Image",
      caption: "High School",
      institute: "Shiv Ashish School",
      location: "Ahmedabad, Gujarat",
      duration: "2009 – 2023",
      board: "(GSEB Board)",
      specialization: "Science Stream",
      score: "83%",
    },
    {
      src: educationImage,
      alt: "BTech Image",
      caption: "Bachelor of Technology (B.Tech)",
      institute: "Inuds University",
      location: "Gujarat, India",
      duration: "2023 – 2027",
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Full-Stack Web Development",
      score: "Persuing",
    },
  ];


  const certificationArray = [
    {
      src: certificationImage,
      alt: "AI Certificate",
      caption: "AI Certificate",
      platform: "Indus University",
      duration: "Jun 2024",
      topics: "Artificial Intelligence",
    },
    {
      src: certificationImage,
      alt: "JS Mastery",
      caption: "Full-Stack Web Development",
      platform: "Indus University",
      duration: "Dec 2024",
      topics: "HTML, CSS, JavaScript, React, Node.js, MongoDB",
    },
  ];


  return (
    <div className="about" id="about">
      <div className="about-me aos-init">
        <h2 className="aos-init">About Me</h2>
        <div className="about-me-grid">
          <div className="about-me-text aos-init">
            <p>
              Hello! I'm <strong>Titan Boss</strong>, a passionate Frontend Developer dedicated to building clean, accessible, and beautiful web experiences.
            </p>
            <p>
              I love to explore new technologies, learn continuously, and contribute to impactful digital solutions.
            </p>
          </div>
          <div className="about-me-details aos-init">
            <h4>Personal Highlights</h4>
            <ul>
              <li>👨‍💻 Self-taught developer</li>
              <li>🌍 Based in Gujarat</li>
              <li>🔧 React, Tailwind, UI systems</li>
              <li>🎨 Minimalism & design-thinking</li>
              <li>🚀 Real-world project contributor</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="about-education aos-init">
        <div className="about-education-header">
          <h2>Education</h2>
        </div>
        <div className="education-content">
          {educationArray.map((item, index) => (
            <div key={index} className="education-item aos-init">
              <div className="education-inner">
                <div className="education-item-image">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="education-item-content">
                  <h3>{item.caption}</h3>
                  <p><strong>{item.institute}</strong>, {item.location}</p>
                  <p>{item.duration} {item.specialization } {item.board || item.degree}</p>
                  <p>{item.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Section */}
      <div className="about-certification aos-init">
        <div className="about-certification-header">
          <h2>Certificates</h2>
        </div>
        <div className="certification-content">
          {certificationArray.map((item, index) => (
            <div key={index} className="certification-item aos-init">
              <div className="certification-inner">
                <div className="certification-item-image">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div className="certification-item-content">
                  <h3>{item.caption}</h3>
                  <p><strong>{item.platform}</strong> – {item.duration}</p>
                  <p>{item.topics}</p>
                  {item.credential && <a href={item.credential} target="_blank" rel="noopener noreferrer">View Certificate</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
