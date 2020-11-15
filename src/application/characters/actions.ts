import {Action, CharactersResponse} from "../../domain";
import {
    ERROR_CHARACTERS,
    INVALIDATE_CHARACTERS,
    RECEIVE_CHARACTERS,
    REQUEST_CHARACTERS
} from "../../store";

export const requestCharacters = (): Action => {
    return {
        type: REQUEST_CHARACTERS
    }
}

export const invalidateCharacters = (): Action => {
    return {
        type: INVALIDATE_CHARACTERS
    }
}

export const receiveCharacters = (payload: CharactersResponse): Action<CharactersResponse> => {
    return {
        type: RECEIVE_CHARACTERS,
        payload
    }
}

export const errorCharacters = (): Action => {
    return {
        type: ERROR_CHARACTERS
    }
}
