import {Action} from "../../domain";
import {SET_SELECTED_PAGE} from "../../store";

export const setSelectedPage = (payload: number): Action<number> => {
    return {
        type: SET_SELECTED_PAGE,
        payload
    }
}
