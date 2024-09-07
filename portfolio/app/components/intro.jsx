'use client';

import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import '../styles/intro.css';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
    return (
        <Box id="intro" className="intro-root">
            <Container>
                <Box className="intro-container slide-in" alignItems="center" flexWrap="wrap">
                    <Box flex={2} minWidth="300px">
                        <Typography variant="h2" className="name">
                            Hi, there! I&rsquo;m <br /><span className="highlight">Armina Parvaresh Rizi</span>
                        </Typography>
                        <TypeAnimation className='typing-title'
                            sequence={[
                                'Engineering The Future',
                                2000,
                                'Software Engineer',
                                1000, 
                                'AI Engineer',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Data Scientist',
                                1000,
                                'Researcher',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                        <Typography variant="body1" className="subtitle" paragraph>
                            BSCS, Computer Science, Artificial Intelligence
                            <br />
                            Northeastern University &rsquo;26
                        </Typography>
                        <Box mt={2}>
                            <Button
                                href="https://drive.google.com/file/d/1cpBXoVDor1etJgULzwonxy6UIAAtG5Gk/view?usp=sharing"
                                target='_blank'
                                variant="contained"
                                className="resume-button"
                                sx={{ height: 40 }}
                            >
                                Resume
                            </Button>
                            <Button
                                href="https://www.linkedin.com/in/arminapr"
                                target='_blank'
                                variant="outlined"
                                className="linkedin-button"
                                sx={{
                                    height: 40,
                                    backgroundColor: 'transparent', 
                                }}
                            >
                                LinkedIn
                            </Button>
                        </Box>
                    </Box>

                    <Image src="/images/me.jpeg" alt="Armina Parvaresh Rizi" className="personal-photo" layout="responsive" width={300} height={300}  />
                </Box>
            </Container>
        </Box>
    );
};

export default Intro;