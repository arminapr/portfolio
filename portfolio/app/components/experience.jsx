import React from 'react';
import { Container, Box, Typography, Card, CardContent, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import TeachingIcon from '@mui/icons-material/EmojiObjects';
import TutoringIcon from '@mui/icons-material/People';
import ExploreIcon from '@mui/icons-material/Explore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/experience.css';

const Experiences = () => {
    const experiences = [
        {
            title: "AI Researcher",
            company: "Cashew Capital",
            dates: "Jul 2024 - present",
            icon: <CodeIcon style={{ fontSize: 40, color: '#1976d2' }} />,
        },
        {
            title: "Software Engineering Fellow",
            company: "Headstarter AI",
            dates: "Jul 2024 - present",
            icon: <CodeIcon style={{ fontSize: 40, color: '#1976d2' }} />,
        },
        {
            title: "Researcher",
            company: "UConn & Northeastern University",
            dates: "May 2023 - present",
            icon: <SchoolIcon style={{ fontSize: 40, color: '#1976d2' }} />,
        },
        {
            title: "Full Stack Engineering Co-op",
            company: "XPO",
            dates: "Jan 2024 - Jun 2024",
            icon: <WorkIcon style={{ fontSize: 40, color: '#1976d2' }} />,
        },
        {
            title: "Explorer",
            company: "Makerspace At EXP",
            dates: "Jan 2023 - present",
            icon: <ExploreIcon style={{ fontSize: 40, color: '#1976d2' }} />,
        },
        {
            title: "Teaching Assistant",
            company: "Northeastern University",
            dates: "Aug 2023 - present",
            icon: <TeachingIcon style={{ fontSize: 40, color: '#1976d2' }} />,
        }
    ];

    return (
        <Box id="experience" className="experiences-root" py={4}>
            <Container className="experience-container">
                <Typography variant="h3" color="primary" gutterBottom>
                    Experience
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={4}>
                    {experiences.map((experience, index) => (
                        <Box key={index} flexBasis="100%" mb={4} px={1}
                            flexGrow={1}
                            maxWidth={{ xs: '100%', md: '32%' }}>
                            <Card className="experience-card">
                                <CardContent className='experience-card-content'>
                                    <Box display="flex" alignItems="center" mb={2}>
                                        {experience.icon}
                                        <Box ml={2}>
                                            <Typography variant="h6" color="textPrimary">
                                                {experience.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {experience.company}<br />({experience.dates})
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
                <Box mt={4} textAlign="center">
                    <Button
                        href="https://www.linkedin.com/in/arminapr"
                        variant="contained"
                        color="primary"
                        startIcon={<LinkedInIcon />}
                        target="_blank"
                        className="linkedin-button"
                    >
                        See more on my LinkedIn!
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Experiences;
