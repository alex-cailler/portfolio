import React from 'react';
import WorkRouter from "../../router/WorkRouter";
import {Link, Switch} from "react-router-dom";

const WorkPage = ({match}) => {
    return (
        <div>
            <div>
                <Link to={`${match.url}/picture`}>Galery</Link>
                <Link to={`${match.url}/design`}>DesignPage</Link>
                <Link to={`${match.url}/projects`}>ProjectsPage</Link>
                <Link to={`${match.url}/labs`}>LabsPage</Link>
            </div>
            <WorkRouter />
        </div>
    );
};

export default WorkPage;
