import {Card, CardActionArea, CardHeader, CardMedia} from "@material-ui/core";
import React from "react";
import {Character} from "../domain";
import "./CharacterCard.css";
import { useHistory } from "react-router-dom";


export const CharacterCard = ({id, name, image}: Character) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`characters/${id}`);
    }

    return (
        <div className="CharacterCard" onClick={handleClick}>
            <Card className="CharacterCard__card">
                <CardActionArea>
                    <CardHeader className="CharacterCard__card__header" title={name} subheader={`id: ${id}`}/>
                    <CardMedia className="CharacterCard__card__media" image={image} title={`${name}-image`}/>
                </CardActionArea>
            </Card>
        </div>
    )
}
