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
        <Route path="/contact" component={ContactPage} />
        <Route path="/galery" component={GaleryPage} />
        <Route path="/RoutePage" component={RoutePage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/project/:id" component={ProjectPage} />
    </BrowserRouter>
);

export default Router;
