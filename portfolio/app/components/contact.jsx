'use client';

import React, { useState } from 'react';
import '../styles/Contact.css';
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
                        <Typography variant="h4">Personal Email</Typography>
                        <a href="mailto:arminaparva@gmail.com">arminaparva@gmail.com</a>
                        <Typography variant="h4">School Email</Typography>
                        <a href="mailto:parvareshrizi.a@northeastern.edu">parvareshrizi.a@northeastern.edu</a>
                        <Typography variant="h4">Phone</Typography>
                        <span>(401) 365-2437</span>
                        <Typography variant="h4">Social</Typography>
                        <ul className="contact-socials">
                            <li><a href="https://www.github.com/arminapr" className="icon"><GitHubIcon /> GitHub</a></li>
                            <li><a href="https://www.linkedin.com/arminapr" className="icon"><LinkedInIcon /> LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/travelsbyarmina" className="icon"><InstagramIcon /> Instagram</a></li>
                        </ul>
                    </Box>
                    <Box className="contact-form">
                        <Typography variant="h4" gutterBottom>Send me a message</Typography>
                        <form action="https://formsubmit.co/01f7a0c0d9593794efce1bbbeb2b2625" method="POST">
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
                            <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
                        </form>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;