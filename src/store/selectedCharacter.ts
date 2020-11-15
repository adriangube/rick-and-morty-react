import {Action, AsyncState, Character} from "../domain";

export const REQUEST_SELECTED_CHARACTER = 'REQUEST_SELECTED_CHARACTER';
export const INVALIDATE_SELECTED_CHARACTER = 'INVALIDATE_SELECTED_CHARACTER';
export const RECEIVE_SELECTED_CHARACTER = 'RECEIVE_SELECTED_CHARACTER';
export const ERROR_SELECTED_CHARACTER = 'ERROR_SELECTED_CHARACTER';

const initialState: AsyncState<Character> ={
    isFetching: false
}

export const selectedCharacter = (state = initialState || {}, action: Action) => {
    switch (action.type){
        case REQUEST_SELECTED_CHARACTER:
            return {...state, isFetching: true, didInvalidate: false, state: undefined};
        case INVALIDATE_SELECTED_CHARACTER:
            return {...state, didInvalidate: true};
        case RECEIVE_SELECTED_CHARACTER:
            return {...state, isFetching: false, didInvalidate: false, state: action?.payload, error: false};
        case ERROR_SELECTED_CHARACTER:
            return {...state, isFetching: false, didInvalidate: true, state: undefined, error: true};
        default:
            return state;
    }
};
