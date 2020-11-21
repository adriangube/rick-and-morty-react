import {AppBar, Avatar, Toolbar} from "@material-ui/core";
import React from "react";
import "../styles/components/AppHeader.css";
import logo from  "../styles/images/logo.svg";

export const AppHeader = () => {

    const goToMainPage = () => {
        window.location.href = "/characters";
    }

    const goToGitHup = () => {
        window.open('https://github.com/adriangube/rick-and-morty-react', '_blank');
    }

    return (
        <div className="AppHeader" >
            <AppBar className="AppHeader__app__bar">
                <Toolbar>
                    <Avatar className="AppHeader__avatar" src={logo} onClick={goToMainPage}/>
                    <div className="AppHeader__title">Rick & Morty Characters Selector</div>
                    <Avatar
                        className="AppHeader__avatar"
                        src={"https://avatars1.githubusercontent.com/u/46680508?s=60&v=4"}
                        onClick={goToGitHup}
                    />
                </Toolbar>
            </AppBar>
        </div>
    )
}
