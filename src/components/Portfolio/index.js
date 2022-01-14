import React, { useState } from 'react';
import Project from '../Project';
import { Container, CardGroup } from 'react-bootstrap/';

function Portfolio() {
  const [projects] = useState([
    {
      title: 'Cache',
      imageSrc: 'cache.png',
      github: 'https://github.com/sivanagar/garage-finder',
      link: 'https://cache-project.herokuapp.com/',
    },
    {
      title: 'Giftby',
      imageSrc: 'giftby.jpg',
      github: 'https://github.com/sivanagar/theNextGen',
      link: 'https://secret-santa-project.herokuapp.com/',
    },
    {
      title: 'National Park Search',
      imageSrc: 'NationalParkSearch.png',
      github: 'https://github.com/sivanagar/NationalParkSearch',
      link: 'https://sivanagar.github.io/NationalParkSearch/',
    },
    {
      title: 'Weather Dashboard',
      imageSrc: 'weatherDashboard.png',
      github: 'https://github.com/sivanagar/WeatherDashboard',
      link: 'https://sivanagar.github.io/WeatherDashboard/',
    },
    {
      title: 'Team Webpage Generator',
      imageSrc: 'team.png',
      github: 'https://github.com/sivanagar/TeamProfileGenerator',
      link: 'https://github.com/sivanagar/TeamProfileGenerator',
    },
  ]);

  return (
    <Container>
      <h2 className="heading">Portfolio</h2>
      <CardGroup>
        {projects.map((project) => (
          <Project currentProject={project} key={project.title}></Project>
        ))}
      </CardGroup>
    </Container>
  );
}

export default Portfolio;
