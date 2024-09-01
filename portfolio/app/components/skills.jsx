import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="wrapper style2 fade-up">
      <div className="inner">
        <h2>Skills</h2>
        <p>Here are some of the skills I've developed over my career.</p>
        <div className="features">
          <div className="feature">
            <span className="icon solid major fa-code"></span>
            <h3>Programming Languages</h3>
            <p>Java, JavaScript, TypeScript, Racket, HTML, CSS, Python, SQL</p>
          </div>
          <div className="feature">
            <span className="icon solid major fa-laptop"></span>
            <h3>Frameworks and Libraries</h3>
            <p>Angular, React, Node.js, NumPy, Pandas, PyTorch, TensorFlow</p>
          </div>
          <div className="feature">
            <span className="icon solid major fa-database"></span>
            <h3>Tools and Technologies</h3>
            <p>Git, Docker, MySQL, Confluence, JIRA, Excel, VSCode, IntelliJ IDEA, Eclipse, Figma</p>
          </div>
          <div className="feature">
            <span className="icon solid major fa-project-diagram"></span>
            <h3>Other Skills</h3>
            <p>Machine Learning, Data Analysis, UI/UX Design, Software Development, Website Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
