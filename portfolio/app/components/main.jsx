import React from 'react';
import Intro from './intro';
import Skills from './skills';
import Projects from './projects';
import Experiences from './experience';
import Volunteering from './volunteering';
import Travel from './travel';
import Contact from './contact';
import '../styles/main.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div><Intro /></div>
      <div><Projects /></div>
      <div><Experiences /></div>
      <div><Skills /></div>
      <div><Volunteering /></div>
      <div><Travel /></div>
      <div><Contact /></div>
    </div>
  );
};

export default MainContent;
