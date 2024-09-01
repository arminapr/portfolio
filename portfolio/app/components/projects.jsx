'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Stack, Chip } from '@mui/material';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import '../styles/Projects.css';

const projectsData = [
    {
        title: "Market Reader",
        description: "A sentiment analysis tool designed to evaluate the sentiment of real-time financial news. The project integrates the BERT model to classify text into neutral, negative, or positive categories and features a web scraping component that extracts headlines from Yahoo Finance, and analyzes their sentiment. This model achieved around 85% accuracy.",
        image: "/images/market.jpg",
        alt: "Picture of financial trends on a computer.",
        links: [
            { href: "https://huggingface.co/spaces/arminap/sentiment-analysis", text: "Use the model on Hugging Face" },
            { href: "https://github.com/arminapr/market-reader", text: "View the code on GitHub" }
        ],
        languages: ["Python", "AI/ML"],
        collaborators: "Ft. Ryan Brueckner & Carlos Cueto"
    },
    {
        title: "Reversi",
        description: "A hexagonal Reversi game that has the ability to play against a human or a computer. This project includes multiple algorithms for the computer opponent to make the most rewarding move. The game features an intuitive user interface, robust game logic, and an AI opponent with various strategic levels.",
        image: "/images/reversi.gif",
        alt: "Walkthrough of Reversi Game",
        additionalInfo: "* Click on the GIF to expand the player view.\n** This demo shows a human (black) against a computer agent (white).\n*** Code is available upon request.",
        languages: ["Java"],
        collaborators: "Ft. Katya Luchette"
    },
    {
        title: "Klondike",
        description: "A terminal-based Klondike game featuring Basic, Whitehead, and Limited Klondike variants. Utilizing the MVC (Model-View-Controller) design pattern, the game provides a structured approach to handling game logic, user interface, and interaction. Players engage with the game entirely through text-based commands, offering a classic gaming experience.",
        image: "/images/klondike.gif",
        alt: "Walkthrough of Klondike Game",
        additionalInfo: "* Code is available upon request.",
        languages: ["Java"]
    },
    {
        title: "Maze Solver",
        description: "A random maze game developed using Kruskal's Algorithm. The code adjusts to the user's preferred size and includes options to solve the maze using BFS or DFS. Additionally, users can solve the maze themselves and choose to turn on or off the visited paths.",
        image: "/images/maze.gif",
        alt: "Walkthrough of Maze game",
        additionalInfo: "* The demo shows a Depth-First Search on a 50x50 maze.\n** Code is available upon request.",
        languages: ["Java"]
    },
    {
        title: "Flood It",
        description: "A game where cells flood based on each color selected by the user. The user needs to complete the game within a certain number of steps to win, with the number of steps calculated based on the grid size. This project demonstrates an understanding of color-based flood fill algorithms and user interaction.",
        image: "/images/floodit.gif",
        alt: "Walkthrough of Flood It game",
        additionalInfo: "* The demo shows a 14x14 board.\n** Code is available upon request.",
        languages: ["Java"]
    },
    {
        title: "Accelcoin Miner",
        description: "A Racket-based blockchain miner resulting in the highest Accelcoin mining yield among peers. This design consists of a comprehensive validation and ledger management mechanism to ensure the integrity and performance of the blockchain network.",
        image: "/images/accelcoin.jpg",
        alt: "Picture of the Boston skyline, with a rainbow at sunset.",
        additionalInfo: "* Code is available upon request.",
        languages: ["Java"],
        collaborators: "Ft. Ryan Zhu"
    }
];

const languageColors = {
    Python: "#3776AB",
    Java: "#E440D5",
    "AI/ML": "#FFC107",
    React: "#61DAFB",
    SQL: "#FFCA28",
    Docker: "#007396",
    Swift: "#2496ED"
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProject(null);
    };

    const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <Box id="projects" className="projects-root">
            <Container>
                <Typography variant="h2" color="primary" gutterBottom>
                    Projects
                </Typography>
                <Box className="spotlights">
                    {displayedProjects.map((project, index) => (
                        <Box key={index} className="spotlight" onClick={() => handleOpenModal(project)}>
                            <Image
                                src={project.image}
                                alt={project.alt}
                                className="project-image"
                                width={300}
                                height={200}
                            />
                            <Box className="content">
                                <Typography variant="h6" color="textPrimary">
                                    {project.title}
                                </Typography>
                                <Typography className="description" variant="body2" color="textSecondary" paragraph>
                                    {project.description}
                                </Typography>
                                <Stack direction="row" spacing={1} className="language-chips">
                                    {project.languages.map((language, langIndex) => (
                                        <Chip
                                            key={langIndex}
                                            label={language}
                                            variant="outlined"
                                            style={{
                                                backgroundColor: languageColors[language] || "#E0E0E0",
                                                color: "#fff",
                                            }}
                                        />
                                    ))}
                                </Stack>
                                {project.collaborators && (
                                    <Typography variant="body2" color="textSecondary">
                                        {project.collaborators}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Button
                    variant="outlined"
                    id="view-more-button"
                    className="view-more-button"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "View Less" : "View More"}
                </Button>
                {selectedProject && (
                    <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
                        <DialogTitle>{selectedProject.title}</DialogTitle>
                        <DialogContent className="project-dialog">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.alt}
                                className="project-image"
                                width={300}
                                height={200}
                            />
                            <div className="dialog-text">
                                <Typography variant="body1" color="textSecondary" paragraph>
                                    {selectedProject.description}
                                </Typography>
                                {selectedProject.additionalInfo && (
                                    <Typography variant="body2" color="textSecondary" paragraph>
                                        {selectedProject.additionalInfo}
                                    </Typography>
                                )}
                                {selectedProject.links?.map((link, linkIndex) => (
                                    <Typography key={linkIndex} variant="body1">
                                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                                            {link.text}
                                        </a>
                                    </Typography>
                                ))}
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Container>
        </Box>
    );
};

export default Projects;