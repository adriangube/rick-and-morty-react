import {createSelector} from "reselect";
import {State} from "../../domain";

export const charactersStateSelector = (state: State) => state?.characters;

export const charactersSelector = createSelector(charactersStateSelector, asyncState =>
    asyncState?.state
);
