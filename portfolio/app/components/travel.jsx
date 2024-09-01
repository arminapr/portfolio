import React from 'react';
import Image from 'next/image';
import '../styles/Travel.css';

const travelPhotos = [
    { location: "Washington, DC", imgSrc: "/images/washington.jpg", width: 300, height: 200 },
    { location: "Copenhagen, Denmark", imgSrc: "/images/copenhagen.jpg", width: 300, height: 200 },
    { location: "Estes Park, CO", imgSrc: "/images/colorado.jpg", width: 300, height: 200 },
    { location: "Key West, FL", imgSrc: "/images/keywest.jpg", width: 300, height: 200 },
    { location: "Milan, Italy", imgSrc: "/images/milan.jpg", width: 300, height: 200 },
];

const Traveling = () => {
    return (
        <section id="traveling" className="wrapper style3 fade-up">
            <div className="inner">
                <h2>Traveling</h2>
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