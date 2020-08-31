import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
    HomePage,
    ContactPage,
    GaleryPage,
    ProjectPage,
    RoutePage,
    WorkPage
} from "../pages/index";

const Router = () => (
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/galery" component={GaleryPage} />
        <Route exact path="/RoutePage" component={RoutePage} />
        <Route exact path="/work" component={WorkPage} />
        <Route exact path="/project/:id" component={ProjectPage} />
    </BrowserRouter>
);

export default Router;
