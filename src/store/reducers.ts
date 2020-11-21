import {combineReducers} from "redux";
import {characters} from "./characters";
import {selectedCharacter} from "./selectedCharacter"
import {selectedPage} from "./selectedPage";


export const reducers = combineReducers({
    characters,
    selectedCharacter,
    selectedPage
})
