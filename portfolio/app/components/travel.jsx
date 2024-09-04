import React from 'react';
import Image from 'next/image';
import '../styles/travel.css';
import { Box, Container, Typography } from '@mui/material';

const travelPhotos = [
    { location: "Washington, DC", imgSrc: "/images/washington.jpg", width: 300, height: 200 },
    { location: "Copenhagen, Denmark", imgSrc: "/images/copenhagen.jpg", width: 300, height: 200 },
    { location: "Estes Park, CO", imgSrc: "/images/colorado.jpg", width: 300, height: 200 },
    { location: "Key West, FL", imgSrc: "/images/keywest.jpg", width: 300, height: 200 },
    { location: "Milan, Italy", imgSrc: "/images/milan.jpg", width: 300, height: 200 },
    { location: "Lison, Portugal", imgSrc: "/images/lisbon.jpg", width: 300, height: 200},
    { location: "Mammoth Cave, KY", imgSrc: "/images/kentucky.jpg", width: 300, height: 200},
    { location: "New York City, NY", imgSrc: "/images/nyc.jpg", width: 300, height: 200},
    { location: "Yarmouth, NS", imgSrc: "/images/nova-scotia.jpg", width: 300, height: 200},
    { location: "Niagara Falls, ON", imgSrc: "/images/niagara.jpg", width: 300, height: 200}
];

const Traveling = () => {
    return (
        <section id="traveling" className="traveling-section">
            <div className="inner">
                <Typography variant="h3" color="primary" gutterBottom>
                    Traveling
                </Typography>
                <div className="traveling">
                    {travelPhotos.map((photo, index) => (
                        <div key={index} className="travel-photo" data-location={photo.location}>
                            <Image
                                src={photo.imgSrc}
                                alt={photo.location}
                                width={photo.width}
                                height={photo.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Traveling;
