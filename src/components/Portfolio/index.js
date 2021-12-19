import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([
    {
      title: 'One Title',
      imageSrc: '../../assets/',
      github: 'https://github.com',
      link: 'www.google.com'
    },
    {
      title: 'Second Title',
      imageSrc: '../../assets/',
      github: 'https://github.com',
      link: 'www.google.com'
    }
  ]);
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map(project => (
        <Project currentProject={project} key={project.title}></Project>
      ))}
    </section>
  )
};

export default Portfolio;