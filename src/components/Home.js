import React, { useEffect, useState } from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../css/Home.css';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
  const elements = document.querySelectorAll(".aos-init-home, .aos-init-home-image");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% visible
    }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <div className='home' id='home'>
      <div className="hero">
        {isMobile ? (
          <>
            <div className="hero-image aos-init-home-image">
              <img src="https://i.imgur.com/6QqQqzB.jpg" alt="profilepic" />
            </div>
            <div className="hero-content">
              <h1 className="aos-init-home">
                Crafting Digital Experiences That Inspire and Empower.
              </h1>
              <p className="aos-init-home">Hi, Myself Dhruv Patel.</p>
            </div>
          </>
        ) : (
          <>
            <div className="hero-content">
              <h1 className="aos-init-home">
                Crafting Digital Experiences That Inspire and Empower.
              </h1>
              <p className="aos-init-home">
                Hi, I’m Dhruv Patel, a passionate Full Stack Developer.
              </p>
            </div>
            <div className="hero-image aos-init-home-image">
              <img src="https://i.imgur.com/6QqQqzB.jpg" alt="profilepic" />
            </div>
          </>
        )}
      </div>

      {/* Section components */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

