import React, { useEffect } from "react";
import "../css/Contact.css";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
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

  const socialMedia = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:dhruv11072005@gmail.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/dhruvpatel0711",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/profile.php?id=100069693311439",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/dhruv-patel-6878562a6/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/DhruvPatel0711",
    },
  ];

  return (
    <div className="contact" id="contact">
      <h2 className="aos-init">Get In Touch</h2>
      <p className="contact-subtitle aos-init">
        I'd love to connect! Feel free to reach out via this form or on social media.
      </p>
      <div className="social-media aos-init">
        {socialMedia.map((item, index) => (
          <div className="social-item aos-init" key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              {item.icon}
            </a>
            <span>{item.name}</span>
          </div>
          ))}
        </div>
    </div>
  );
}
