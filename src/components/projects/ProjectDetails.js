import React from 'react';

const ProjectDetails = (props) => {
    
    const id = props.match   && props.match.params.id;
    return(
        <div className="container section project-details">
            
            details - {id}
        </div>
    )
}
export default ProjectDetails;