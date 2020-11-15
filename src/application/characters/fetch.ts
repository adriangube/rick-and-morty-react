import {ApiProxy} from "../../api-proxy";
import {dispatch, getState} from "../../store";
import {errorCharacters, receiveCharacters, requestCharacters} from "./actions";
import {shouldFetch} from "../shouldFetch";
import {charactersStateSelector} from "./selectors";

export const fetchCharacters = (proxy: ApiProxy) => {
    dispatch(requestCharacters());
    return proxy.getCharacters()
        .then((res) => {
            dispatch(receiveCharacters(res));
            return res;
        })
        .catch(() => {
            dispatch(errorCharacters());
        })
}

export const fetchCharactersIfNeeded = (proxy: ApiProxy) => {
    if(shouldFetch(getState(), charactersStateSelector)){
        return fetchCharacters(proxy) as any;
    }
    return Promise.resolve();
}
