import React, {useEffect} from "react";
import {appService, charactersStateSelector} from "../application";
import {useSelector} from "react-redux";

export const Characters = () => {

    const charactersState = useSelector(charactersStateSelector);

    useEffect(() => {
        appService.getCharacters();
    }, [])

    return (
        <div className="Characters">
            {charactersState?.state?.results?.map((character) =>
                <div>
                    {character.name}
                </div>
            )}
        </div>
    )
}
