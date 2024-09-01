'use client';

import React, { useRef } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';  // Updated import
import '../styles/sidebar.css';
import '../styles/main.css';

const Sidebar = () => {
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  const volunteeringRef = useRef(null);
  const travelRef = useRef(null);
  const contactRef = useRef(null);



  return (
    <div className="sidebar">
      <nav className="slide-in-left">
        <List className="list">
          <ListItem button="true" component="a" ref={introRef} className="list-item">
            <ListItemText primary="Who Am I?" className="list-item-text" />
          </ListItem>
          <ListItem button="true" component="a" ref={projectsRef} className="list-item">
            <ListItemText primary="Projects" className="list-item-text" />
          </ListItem>
          <ListItem button="true" component="a" ref={experiencesRef} className="list-item">
            <ListItemText primary="Experiences" className="list-item-text" />
          </ListItem>
          <ListItem button="true" component="a" ref={skillsRef} className="list-item">
            <ListItemText primary="Skills" className="list-item-text" />
          </ListItem>
          <ListItem button="true" component="a" ref={volunteeringRef} className="list-item">
            <ListItemText primary="Volunteering" className="list-item-text" />
          </ListItem>
          <ListItem button="true" component="a" ref={travelRef} className="list-item">
            <ListItemText primary="Traveling" className="list-item-text" />
          </ListItem>
          <ListItem button="true" component="a" ref={contactRef} className="list-item">
            <ListItemText primary="Get in touch" className="list-item-text" />
          </ListItem>
        </List>
      </nav>
    </div>
  );
};

export default Sidebar;
