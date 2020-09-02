import "../scss/animation.scss"
import React from "react";
import { Route } from "react-router";
import { Redirect, Switch, useLocation} from "react-router-dom";
import {DesignPage, GaleryPage, LabsPage, ProjectsPage} from "../pages";
import {TransitionGroup, CSSTransition} from "react-transition-group"

const WorkRouter = ()  => {
    let location = useLocation();
    return (
        <TransitionGroup>
            {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}>

                    <Switch location={location}>
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
