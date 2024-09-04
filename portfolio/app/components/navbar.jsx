'use client';

import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import '../styles/navbar.css';
import '../styles/main.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container slide-in">
        <List className="navbar-list">
          <ListItem button component="a" href="#intro" className="navbar-item">
            <ListItemText primary="Intro" className="navbar-item-text" />
          </ListItem>
          <ListItem button component="a" href="#projects" className="navbar-item">
            <ListItemText primary="Projects" className="navbar-item-text" />
          </ListItem>
          <ListItem button component="a" href="#experience" className="navbar-item">
            <ListItemText primary="Experiences" className="navbar-item-text" />
          </ListItem>
          <ListItem button component="a" href="#skills" className="navbar-item">
            <ListItemText primary="Skills" className="navbar-item-text" />
          </ListItem>
          <ListItem button component="a" href="#volunteering" className="navbar-item">
            <ListItemText primary="Volunteering" className="navbar-item-text" />
          </ListItem>
          <ListItem button component="a" href="#travel" className="navbar-item">
            <ListItemText primary="Travel" className="navbar-item-text" />
          </ListItem>
          <ListItem button component="a" href="#contact" className="navbar-item">
            <ListItemText primary="Contact" className="navbar-item-text" />
          </ListItem>
        </List>
      </nav>
    </header>
  );
};

export default Navbar;
