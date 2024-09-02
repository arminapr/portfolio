import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import '../styles/Skills.css';

const skillsLogos = [
  { name: "Java", image: "/skills-icons/java.png" },
  { name: "JavaScript", image: "/skills-icons/javascript.webp" },
  { name: "Python", image: "/skills-icons/python.png" },
  { name: "TypeScript", image: "/skills-icons/typescript.png" },
  { name: "HTML", image: "/skills-icons/html.png" },
  { name: "CSS", image: "/skills-icons/css.png" },
  { name: "SQL", image: "/skills-icons/sql.png" },
  { name: "Racket", image: "/skills-icons/racket.png" },
  { name: "Angular", image: "/skills-icons/angular.png" },
  { name: "DataGrip", image: "/skills-icons/datagrip.png" },
  { name: "Docker", image: "/skills-icons/docker.webp" },
  { name: "Eclipse", image: "/skills-icons/eclipse.png" },
  { name: "Excel", image: "/skills-icons/excel.webp" },
  { name: "Figma", image: "/skills-icons/figma.png" },
  { name: "Firebase", image: "/skills-icons/firebase.png" },
  { name: "Flask", image: "/skills-icons/flask.webp" },
  { name: "Git", image: "/skills-icons/git.png" },
  { name: "IntelliJ", image: "/skills-icons/intellij.png" },
  { name: "Jupyter", image: "/skills-icons/jupyter.png" },
  { name: "Linux", image: "/skills-icons/linux.webp" },
  { name: "MySQL", image: "/skills-icons/mysql.png" },
  { name: "Next.js", image: "/skills-icons/next-js.svg" },
  { name: "Node", image: "/skills-icons/node.png" },
  { name: "NumPy", image: "/skills-icons/numpy.svg" },
  { name: "Pandas", image: "/skills-icons/pandas.png" },
  { name: "Postman", image: "/skills-icons/postman.svg" },
  { name: "PyCharm", image: "/skills-icons/pycharm.png" },
  { name: "PyTorch", image: "/skills-icons/pytorch.webp" },
  { name: "React", image: "/skills-icons/react.png" },
  { name: "Swift", image: "/skills-icons/swift.png" },
  { name: "TensorFlow", image: "/skills-icons/tensorflow.webp" },
  { name: "VSCode", image: "/skills-icons/vscode.png" }
];

const skillsData = [
  {
    title: "Programming Languages",
    icon: <CodeIcon style={{ fontSize: 40, color: '#1976d2' }} />,
    description: "Java, JavaScript, TypeScript, Racket, HTML, CSS, Python, SQL, Swift",
  },
  {
    title: "Frameworks and Libraries",
    icon: <LaptopMacIcon style={{ fontSize: 40, color: '#1976d2' }} />,
    description: "Angular, React, Node.js, Next.js, NumPy, Pandas, PyTorch, TensorFlow, Flask",
  },
  {
    title: "Tools and Technologies",
    icon: <StorageIcon style={{ fontSize: 40, color: '#1976d2' }} />,
    description: "Git, Docker, MySQL, Confluence, JIRA, Excel, VSCode, IntelliJ IDEA, Eclipse, Figma",
  }
];

const Skills = () => {
  return (
    <Box id="skills" className="skills-root" py={4}>
      <Container className="skills-container">
        <Typography variant="h4" color="primary" gutterBottom>
          Skills
        </Typography>
        <div className="skills-slider">
          <div className="skills-slide-track">
            {skillsLogos.map((skill, index) => (
              <div className="skill-slide" key={index}>
                <img src={skill.image} alt={skill.name} className="skill-logo" />
              </div>
            ))}
            {skillsLogos.map((skill, index) => (
              <div className="skill-slide" key={index + skillsLogos.length}>
                <img src={skill.image} alt={skill.name} className="skill-logo" />
              </div>
            ))}
          </div>
        </div>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={4}>
          {skillsData.map((skill, index) => (
            <Box key={index} flexBasis="100%" mb={4} px={1} flexGrow={1} maxWidth={{ xs: '100%', md: '32%' }}>
              <Box className="skill-card">
                <Box display="flex" flexDirection="column" alignItems="center">
                  {skill.icon}
                  <Typography variant="h6" color="textPrimary" mt={2}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mt={1}>
                    {skill.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
