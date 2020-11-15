import {createSelector} from "reselect";
import {State} from "../../domain";

export const selectedCharacterStateSelector = (state: State) => state?.selectedCharacter;

export const selectedCharacterSelector = createSelector(selectedCharacterStateSelector, asyncState =>
    asyncState?.state
)
