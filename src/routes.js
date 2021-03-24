import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from "./components/Home"

import Header from "./components/Header"

import Filmes from "./components/Filmes"

import Favoritos from "./components/Favoritos"


const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/filmes/:id" component={Filmes} />
                <Route path="/favoritos" component={Favoritos} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes