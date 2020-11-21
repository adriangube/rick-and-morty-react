import {Action} from "../domain";

export const SET_SELECTED_PAGE = 'SET_SELECTED_PAGE';

const initialState: number = 1;

export const selectedPage = (state = initialState, action: Action) => {
    switch (action.type){
        case SET_SELECTED_PAGE:
            return action?.payload || 1
        default:
            return state;
    }
}
