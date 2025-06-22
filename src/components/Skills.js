import React from 'react';
import '../css/Skills.css';
import { ReactComponent as c} from '../assets/c.svg';
import { ReactComponent as cplusplus} from '../assets/cplusplus.svg';
import { ReactComponent as js} from '../assets/javascript.svg';
import { ReactComponent as java} from '../assets/java.svg';
import { ReactComponent as html} from '../assets/html5.svg';
import { ReactComponent as css} from '../assets/css.svg';
import { ReactComponent as tailwindcss} from '../assets/tailwindcss.svg';
import { ReactComponent as react} from '../assets/react.svg';
import { ReactComponent as node} from '../assets/nodedotjs.svg';
import { ReactComponent as mongo} from '../assets/mongodb.svg';
import { ReactComponent as git} from '../assets/github.svg';
import { ReactComponent as sql} from '../assets/mysql.svg';


export default function Skills() {

  const skillsSvg = [
    {name: 'C', svg: c},
    {name: 'C++', svg: cplusplus},
    {name: 'HTML5', svg: html},
    {name: 'CSS', svg: css},
    {name: 'Tailwind CSS', svg: tailwindcss},
    {name: 'Java', svg: java},
    {name: 'JavaScript', svg: js},
    {name: 'React', svg: react},
    {name: 'Node.js', svg: node},
    {name: 'MongoDB', svg: mongo},
    {name: 'Github', svg: git},
    {name: 'MySQL', svg: sql},
  ]

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
    <div className="skills-container" id="skills">
        <div className='skills-header aos-init'>
            <h2>Skills</h2>
        </div>
        <div className='skills-content aos-init'>
            {skillsSvg.map((skill) => (
                <div className="skill-item aos-init" key={skill.name}>
                  <skill.svg className="skill-icon" />
                  <p className="skill-name">{skill.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

