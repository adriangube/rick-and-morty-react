import {Character, CharactersResponse} from "./character";

export interface AsyncState<T = any> {
    isFetching: boolean;
    didInvalidate?: boolean;
    error?: boolean;
    state?: T;
}

export interface Action<Payload = any> {
    type: string;
    payload?: Payload;
}

export interface State{
    characters: AsyncState<CharactersResponse>;
    selectedCharacter: AsyncState<Character>;
    selectedPage: number;
}
