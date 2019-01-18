//functional component 


import React from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">
                    {project.title}
                </span>
                <p>Posted by Yan</p>
                <p className="grey-text">16 January, 3pm</p>
                <ProjectDetails />
            </div>
        </div>
    )
}

export default ProjectSummary;