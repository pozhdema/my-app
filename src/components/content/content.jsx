import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../../pages/home/home";
import Gallery from "../../pages/gallery/gallery";
import Contact from "../../pages/contact/contact";

const Content = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    )
};

export default Content;