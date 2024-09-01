import React from 'react';
import '../styles/Volunteering.css';
import { Box, Container, Typography } from '@mui/material';
import LaptopIcon from '@mui/icons-material/Laptop';
import VolunteeringActivismIcon from '@mui/icons-material/VolunteerActivism';
import MicrophoneIcon from '@mui/icons-material/Mic';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import FirstAidIcon from '@mui/icons-material/MedicalServices';

const volunteeringData = [
    {
        icon: <LaptopIcon />,
        title: "Website Development Volunteer",
        organization: "Prometheus",
        duration: "Aug 2023 - Feb 2024"
    },
    {
        icon: <LaptopIcon />,
        title: "User Experience Developer",
        organization: "re:Bloom",
        duration: "Sep 2023 - Dec 2023"
    },
    {
        icon: <VolunteeringActivismIcon />,
        title: "CitySites Volunteer",
        organization: "Little Brothers Friends of the Elderly",
        duration: "Oct 2023 - Apr 2024"
    },
    {
        icon: <MicrophoneIcon />,
        title: "National Ambassador",
        organization: "Herren Project",
        duration: "Jun 2020 - Aug 2023"
    },
    {
        icon: <CastForEducationIcon />,
        title: "Classroom Assistant",
        organization: "Lincoln Central Elementary School",
        duration: "Sep 2021 - Jun 2022"
    },
    {
        icon: <FirstAidIcon />,
        title: "Volunteer",
        organization: "Rhode Island Blood Center",
        duration: "Nov 2021 - Mar 2022"
    }
];

const Volunteering = () => {
    return (
        <Box id="volunteering" className="volunteering-root">
            <Container>
                <Typography variant="h2" color="primary" gutterBottom>
                    Volunteering
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    Beyond academia and work, I am committed to making a positive impact on my community through
                    volunteer opportunities and advocacy.
                </Typography>
                <Box className="features">
                    {volunteeringData.map((item, index) => (
                        <Box key={index} className="volunteering-item">
                            <Box className="volunteering-icon">
                                {item.icon}
                            </Box>
                            <Typography className="volunteering-title" variant="h5" color="textPrimary">
                                {item.title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {item.organization}<br />
                                {item.duration}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Volunteering;