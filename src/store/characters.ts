import {Action, AsyncState, CharactersResponse} from "../domain";

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS';
export const INVALIDATE_CHARACTERS = 'INVALIDATE_CHARACTERS';
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const ERROR_CHARACTERS = 'ERROR_CHARACTERS';

const initialState: AsyncState<CharactersResponse> ={
    isFetching: false
}

export const characters = (state = initialState || {}, action: Action) => {
    switch (action.type){
        case REQUEST_CHARACTERS:
            return {...state, isFetching: true, didInvalidate: false, state: undefined};
        case INVALIDATE_CHARACTERS:
            return {...state, didInvalidate: true};
        case RECEIVE_CHARACTERS:
            return {...state, isFetching: false, didInvalidate: false, state: action?.payload, error: false};
        case ERROR_CHARACTERS:
            return {...state, isFetching: false, didInvalidate: true, state: undefined, error: true};
        default:
            return state;
    }
};
