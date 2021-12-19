import React, { useState } from 'react';
import Project from '../Project';
import {Container , CardGroup} from 'react-bootstrap/';

function Portfolio() {
  const [projects] = useState([
    {
      title: 'Giftby',
      imageSrc: '../../assets/project-images/giftby.jpg',
      github: 'https://github.com/sivanagar/theNextGen',
      link: 'https://secret-santa-project.herokuapp.com/'
    },
    {
      title: 'National Park Search',
      imageSrc: '../../assets/project-images/giftby.jpg',
      github: 'https://github.com/sivanagar/NationalParkSearch',
      link: 'https://sivanagar.github.io/NationalParkSearch/'
    },
    {
      title: 'Weather Dashboard',
      imageSrc: '../../assets/project-images/giftby.jpg',
      github: 'https://github.com/sivanagar/WeatherDashboard',
      link: 'https://sivanagar.github.io/WeatherDashboard/'
    }
  ]);

  return (
    <Container>
      <h2>Portfolio</h2>
      <CardGroup>
      {projects.map(project => (
        <Project currentProject={project} key={project.title}></Project>
      ))}
      </CardGroup>
    </Container>
  )
};

export default Portfolio;