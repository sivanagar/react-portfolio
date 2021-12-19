import React from 'react';

function Project(props) {
  const {currentProject} = props;
  return (
    <div>
    <h2>{currentProject.title}</h2>
    <img src={currentProject.imageSrc} alt={currentProject.title}/>
      <div>GitHub Repo</div>
      <div>Link to project</div>
    </div>
    
      
      
  );
};

export default Project;