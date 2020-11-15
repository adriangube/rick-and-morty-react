import {api, ApiProxy} from "../api-proxy";
import {Character, CharactersResponse} from "../domain";
import {fetchCharactersIfNeeded} from "./characters";
import {fetchSelectedCharacter, fetchSelectedCharacterIfNeeded} from "./selectedCharacter";

class AppService implements  ApiProxy{
    constructor(apiProxy: ApiProxy){
        this.apiProxy = apiProxy
    }

    private apiProxy: ApiProxy;

    getCharacter(id: number): Promise<Character> {
        return fetchSelectedCharacter(this.apiProxy, id) as any;
    }

    getCharacters(page?: number): Promise<CharactersResponse> {
        return fetchCharactersIfNeeded(this.apiProxy, page);
    }
}

export const appService = new AppService(api)
