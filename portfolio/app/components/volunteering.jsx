import React from 'react';
import '../styles/volunteering.css';
import { Box, Container, Typography } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MicIcon from '@mui/icons-material/Mic';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const volunteeringData = [
    {
        icon: <LaptopMacIcon fontSize="large" />,
        title: "Website Development Volunteer",
        organization: "Prometheus",
        duration: "Aug 2023 - Feb 2024"
    },
    {
        icon: <LaptopMacIcon fontSize='large'/>,
        title: "User Experience Developer",
        organization: "re:Bloom",
        duration: "Sep 2023 - Dec 2023"
    },
    {
        icon: <VolunteerActivismIcon fontSize='large'/>,
        title: "CitySites Volunteer",
        organization: "Little Brothers Friends of the Elderly",
        duration: "Oct 2023 - Apr 2024"
    },
    {
        icon: <MicIcon fontSize='large'/>,
        title: "National Ambassador",
        organization: "Herren Project",
        duration: "Jun 2020 - Aug 2023"
    },
    {
        icon: <CastForEducationIcon fontSize='large'/>,
        title: "Classroom Assistant",
        organization: "Lincoln Central Elementary School",
        duration: "Sep 2021 - Jun 2022"
    },
    {
        icon: <MedicalServicesIcon fontSize='large'/>,
        title: "Volunteer",
        organization: "Rhode Island Blood Center",
        duration: "Nov 2021 - Mar 2022"
    }
];

const Volunteering = () => {
    return (
        <Box id="volunteering" className="volunteering-root">
            <Container>
                <Typography variant="h3" color="primary" gutterBottom>
                    Volunteering
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph className="volunteer-desc">
                    Beyond academia and work, I am committed to making a positive impact on my community through
                    volunteer opportunities and advocacy.
                </Typography>
                <Box className="features">
                    {volunteeringData.map((item, index) => (
                        <Box key={index} className="volunteering-item">
                            <Box className="volunteering-icon">
                                {item.icon}
                            </Box>
                            <Typography className="volunteering-title" variant="h6" color="textPrimary">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
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
