import React from 'react';
import WorkRouter from "../../router/WorkRouter";
import {Link} from "react-router-dom";

const WorkPage = () => {
    return (
        <div>
            Hola je suis la work
            <div>
                <Link to="/work/picture">Galery</Link>
                <Link to="/work/design">DesignPage</Link>
                <Link to="/work/projects">ProjectsPage</Link>
                <Link to="/work/labs">LabsPage</Link>
            </div>

        </div>
    );
};

export default WorkPage;
