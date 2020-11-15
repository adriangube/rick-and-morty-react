import {createStore, Dispatch, Store} from "redux";
import {State} from "../domain";
import {enhancers} from "./enhancers";
import {reducers} from "./reducers";

export let store: Store;

const initializeStore = () => {
    store = createStore(reducers, enhancers);
    return store;
};

store = initializeStore();
export const getState: () => State = store.getState.bind(store);
export const dispatch: Dispatch = store.dispatch.bind(store);
