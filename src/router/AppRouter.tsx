import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Characters, SelectedCharacter} from "../pages";
import {CHARACTERS, SELECTED_CHARACTER} from "./routes";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={CHARACTERS} component={Characters}/>
                <Route exact path={SELECTED_CHARACTER} component={SelectedCharacter}/>
                <Redirect to={CHARACTERS}/>
            </Switch>
        </Router>
    )
}
