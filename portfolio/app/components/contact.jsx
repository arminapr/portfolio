'use client';

import React from 'react';
import '../styles/contact.css';
import EmailIcon from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Container, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Box id="contact" className="contact-root">
            <Container>
                <Typography variant="h3" color="primary" gutterBottom>
                    Get in touch
                </Typography>
                <Box className="contact-content">
                    <Box className="contact-info">
                        <Typography variant="h4" gutterBottom className="contact-header primary-font">Contact Information</Typography>
                        <a href="mailto:arminaparva@gmail.com" className="contact-link primary-font"><EmailIcon />arminaparva@gmail.com</a>
                        <a href="mailto:parvareshrizi.a@northeastern.edu" className="contact-link primary-font"><EmailIcon />parvareshrizi.a@northeastern.edu</a>
                        <span className="contact-phone"><Phone />+1 (401) 365-2437</span>
                        <Typography variant="h4" gutterBottom className="contact-header primary-font">Socials</Typography>
                        <ul className="contact-socials">
                            <li><a href="https://www.github.com/arminapr" className="icon primary-font"><GitHubIcon /> GitHub</a></li>
                            <li><a href="https://www.linkedin.com/arminapr" className="icon primary-font"><LinkedInIcon /> LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/travelsbyarmina" className="icon primary-font"><InstagramIcon /> Instagram</a></li>
                        </ul>
                    </Box>
                    <Box className="contact-form">
                        <Typography variant="h4" gutterBottom className="contact-header">Send me a message :)</Typography>
                        <form action="https://formsubmit.co/01f7a0c0d9593794efce1bbbeb2b2625" method="POST" target='_blank'>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col">
                                        <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                                    </div>
                                    <div className="col">
                                        <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required />
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
