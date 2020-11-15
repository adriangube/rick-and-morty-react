import {Card, CardActionArea, CardContent, CardHeader, CardMedia} from "@material-ui/core";
import React from "react";
import {Character} from "../domain";
import "./CharacterCard.css";

export const CharacterCard = ({id, name, image, gender, created}: Character) => {

    return (
        <div className="CharacterCard">
            <Card className="CharacterCard__card">
                <CardActionArea>
                    <CardHeader className="CharacterCard__card__header" title={name} subheader={`id: ${id}`}/>
                    <CardMedia className="CharacterCard__card__media" image={image} title={`${name}-image`}/>
                </CardActionArea>
            </Card>
        </div>
    )
}
