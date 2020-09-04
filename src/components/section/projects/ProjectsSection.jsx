import React from "react";
import {projects} from "../../../constants/data";
import {CardProject} from "../../card";

const ProjectsSection = () => {
    return (
        <div className="mt-20 mb-20">
            {projects.map(project => (
                <CardProject item={project} key={project.title} />
            ))}
        </div>
    )
}

export default ProjectsSection
