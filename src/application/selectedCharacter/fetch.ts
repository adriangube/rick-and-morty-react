import {ApiProxy} from "../../api-proxy";
import {dispatch, getState} from "../../store";
import {errorSelectedCharacter, receiveSelectedCharacter, requestSelectedCharacter} from "./actions";
import {shouldFetch} from "../shouldFetch";
import {selectedCharacterStateSelector} from "./selectors";

export const fetchSelectedCharacter = (proxy: ApiProxy, id: number) => {
    dispatch(requestSelectedCharacter());
    return proxy.getCharacter(id)
        .then((res) => {
            dispatch(receiveSelectedCharacter(res));
            return res;
        })
        .catch(() => {
            dispatch(errorSelectedCharacter());
        })
}

export const fetchSelectedCharacterIfNeeded = (proxy: ApiProxy, id: number) => {
    if(shouldFetch(getState(), selectedCharacterStateSelector)){
        return fetchSelectedCharacter(proxy, id) as any;
    }
    return Promise.resolve();
}
