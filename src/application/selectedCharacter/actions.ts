import {Action, Character} from "../../domain";
import {
    ERROR_SELECTED_CHARACTER,
    INVALIDATE_SELECTED_CHARACTER,
    RECEIVE_SELECTED_CHARACTER,
    REQUEST_SELECTED_CHARACTER
} from "../../store";

export const requestSelectedCharacter = (): Action => {
    return {
        type: REQUEST_SELECTED_CHARACTER
    }
}

export const invalidateSelectedCharacter = (): Action => {
    return {
        type: INVALIDATE_SELECTED_CHARACTER
    }
}

export const receiveSelectedCharacter = (payload: Character): Action<Character> => {
    return {
        type: RECEIVE_SELECTED_CHARACTER,
        payload
    }
}

export const errorSelectedCharacter = (): Action => {
    return {
        type: ERROR_SELECTED_CHARACTER
    }
}
