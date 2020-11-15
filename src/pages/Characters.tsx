import React, {useEffect} from "react";
import {appService, charactersStateSelector, invalidateCharacters} from "../application";
import {useSelector} from "react-redux";
import {CharacterCard} from "../components";
import "../styles/pages/Characters..css";
import Pagination from '@material-ui/lab/Pagination';
import {dispatch} from "../store";

export const Characters = () => {

    const charactersState = useSelector(charactersStateSelector);

    const handleChange = (event: any, number: number) => {
        dispatch(invalidateCharacters());
        appService.getCharacters(number);
    }

    useEffect(() => {
        appService.getCharacters();
    }, [])

    return (
        <div className="Characters">
            <div className="Characters__list">
                {charactersState?.state?.results?.map((character) =>
                    <CharacterCard key={character?.id} { ...character} />
                )}
            </div>
            <div className="Characters__pagination">
                <Pagination count={charactersState?.state?.info?.pages} variant="outlined"  onChange={handleChange}/>
            </div>
        </div>
    )
}
