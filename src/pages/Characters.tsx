import React, {useEffect} from "react";
import {appService, charactersStateSelector} from "../application";
import {useSelector} from "react-redux";
import {CharacterCard} from "../components";
import "../styles/pages/Characters..css";

export const Characters = () => {

    const charactersState = useSelector(charactersStateSelector);

    useEffect(() => {
        appService.getCharacters();
    }, [])

    return (
        <div className="Characters">
            {charactersState?.state?.results?.map((character) =>
                <CharacterCard key={character?.id} { ...character} />
            )}
        </div>
    )
}
