import React from "react";
import { Route } from "react-router";
import { Redirect, Switch, useLocation} from "react-router-dom";
import {DesignPage, GaleryPage, LabsPage, ProjectsPage} from "../pages";
import {TransitionGroup, CSSTransition} from "react-transition-group"

const WorkRouter = ()  => {
    let location = useLocation();
    return (
        <TransitionGroup>
            <CSSTransition>
                <Switch>
                    <Route exact path="/work/picture" component={GaleryPage}/>
                    <Route exact path="/work/design" component={DesignPage}/>
                    <Route exact path="/work/projects" component={ProjectsPage}/>
                    <Route exact path="/work/labs" component={LabsPage} />
                    <Redirect from="/work" to="/work/picture"/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
};

export default WorkRouter
