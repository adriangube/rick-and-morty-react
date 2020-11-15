import {combineReducers} from "redux";
import {characters} from "./characters";
import {selectedCharacter} from "./selectedCharacter"

export const reducers = combineReducers({
    characters,
    selectedCharacter
})
