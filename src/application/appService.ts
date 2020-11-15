import {api, ApiProxy} from "../api-proxy";
import {Character, CharactersResponse} from "../domain";
import {fetchCharactersIfNeeded} from "./characters";
import {fetchSelectedCharacterIfNeeded} from "./selectedCharacter";

class AppService implements  ApiProxy{
    constructor(apiProxy: ApiProxy){
        this.apiProxy = apiProxy
    }

    private apiProxy: ApiProxy;

    getCharacter(id: number): Promise<Character> {
        return fetchSelectedCharacterIfNeeded(this.apiProxy, id);
    }

    getCharacters(): Promise<CharactersResponse> {
        return fetchCharactersIfNeeded(this.apiProxy);
    }
}

export const appService = new AppService(api)
