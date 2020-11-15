import {Character, CharactersResponse} from "../domain";
import {ApiProxy} from "./api-proxy";
import axios from 'axios';

const DEFAULT_URL = "/api";

export class Api implements ApiProxy {

    constructor(public url: string = process.env.REACT_APP_DEFAULT_API || DEFAULT_URL) {
        if(this.url.endsWith('/'))
            this.url = this.url.substring(0, this.url.length - 1);
    }

    withPath(path: string): string{
        if(!path.startsWith('/'))
            path = '/' + path;
        return `${this.url}${path}`;
    }

    getCharacter(id: number): Promise<Character> {
        const path = this.withPath(`/character/${id}`);
        return axios.get(path).then((r) => r?.data);
    }

    getCharacters(): Promise<CharactersResponse> {
        const path = this.withPath(`/character`);
        return axios?.get(path).then((r) => r?.data);
    }
}

export const api = new Api();
