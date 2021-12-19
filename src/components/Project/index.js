import React from 'react';
import {Card, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Project(props) {
  const {currentProject} = props;
  return (
    <Col md="4" >
    <Card className='m-1'>
      <Card.Title className='m-1'>
        {currentProject.title}
      </Card.Title>
      {console.log(`${currentProject.imageSrc}`)}
      <Card.Img src={require('../../assets/project-images/giftby.jpg')} alt={currentProject.title}/>
    </Card>
    </Col>
    
      
      
  );
};

export default Project;