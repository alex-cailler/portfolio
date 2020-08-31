import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import {DesignPage, GaleryPage, LabsPage, ProjectsPage} from "../pages";

const WorkRouter = ()  => (
    <Switch>
        <Route exact path="/work/picture" component={GaleryPage}/>
        <Route exact path="/work/design" component={DesignPage}/>
        <Route exact path="/work/projects" component={ProjectsPage}/>
        <Route exact path="/work/labs" component={LabsPage} />
    </Switch>
);

export default WorkRouter
