import {Button, Card, CardMedia, CircularProgress} from "@material-ui/core";
import React, {useEffect} from "react";
import "../styles/pages/SelectedCharacter.css";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import {appService, selectedCharacterStateSelector} from "../application";
import { useHistory } from "react-router-dom";

export const SelectedCharacter = () => {
    let { id } = useParams() as any;
    const selectedCharacterState = useSelector(selectedCharacterStateSelector);
    const character = selectedCharacterState?.state;
    const isFetching = selectedCharacterState?.isFetching;
    const history = useHistory();

    const handleGoBack = () => {
        history?.push("/characters")
    }

    useEffect(() => {
        appService.getCharacter(id)
    }, [id]);

    return (
        <div className="SelectedCharacter">
            {isFetching && (
                <div className="isFetching">
                    <CircularProgress/>
                </div>
            )}
            {(!isFetching && character) && (
                <Card className="SelectedCharacter__card">
                    <div className="SelectedCharacter__media">
                        <CardMedia
                            className="SelectedCharacter__media__image"
                            image={character?.image}
                            title={`${character?.name}-image`}
                        />
                    </div>
                    <div className="SelectedCharacter__content">
                        <div className="SelectedCharacter__header">
                            {character?.name}
                        </div>
                        <div className="SelectedCharacter__field">
                            <div className="SelectedCharacter__label">
                                Id:
                            </div>
                            <div className="SelectedCharacter__value">
                                {character?.id}
                            </div>
                        </div>
                        <div className="SelectedCharacter__field">
                            <div className="SelectedCharacter__label">
                                Status:
                            </div>
                            <div className="SelectedCharacter__value">
                                {character?.status}
                            </div>
                        </div>
                        <div className="SelectedCharacter__field">
                            <div className="SelectedCharacter__label">
                                Species:
                            </div>
                            <div className="SelectedCharacter__value">
                                {character?.species}
                            </div>
                        </div>
                        <div className="SelectedCharacter__field">
                            <div className="SelectedCharacter__label">
                                Gender:
                            </div>
                            <div className="SelectedCharacter__value">
                                {character?.gender}
                            </div>
                        </div>
                        <div className="SelectedCharacter__field">
                            <div className="SelectedCharacter__label">
                                Origin:
                            </div>
                            <div className="SelectedCharacter__value">
                                {character?.origin.name}
                            </div>
                        </div>
                        <div className="SelectedCharacter__field">
                            <div className="SelectedCharacter__label">
                                Location:
                            </div>
                            <div className="SelectedCharacter__value">
                                {character?.location?.name}
                            </div>
                        </div>
                        <div className="SelectedCharacter__field">
                            <div className="SelectedCharacter__label">
                                Created:
                            </div>
                            <div className="SelectedCharacter__value">
                                {character?.created}
                            </div>
                        </div>
                        <div className="SelectedCharacter__actions">
                            <Button id="go-back-button" variant="contained" onClick={handleGoBack}>
                                Go back
                            </Button>
                        </div>
                    </div>

                </Card>
            )}
        </div>
    )
}
