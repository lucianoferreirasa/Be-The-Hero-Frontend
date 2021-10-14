import {Route, BrowserRouter, Switch} from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Register from "./pages/Register";

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
} 