import {ApiProxy} from "../../api-proxy";
import {dispatch, getState} from "../../store";
import {errorCharacters, receiveCharacters, requestCharacters} from "./actions";
import {shouldFetch} from "../shouldFetch";
import {charactersStateSelector} from "./selectors";

export const fetchCharacters = (proxy: ApiProxy, page?: number) => {
    dispatch(requestCharacters());
    return proxy.getCharacters(page)
        .then((res) => {
            dispatch(receiveCharacters(res));
            return res;
        })
        .catch(() => {
            dispatch(errorCharacters());
        })
}

export const fetchCharactersIfNeeded = (proxy: ApiProxy, page?: number) => {
    if(shouldFetch(getState(), charactersStateSelector)){

        return fetchCharacters(proxy, page) as any;
    }
    return Promise.resolve();
}
