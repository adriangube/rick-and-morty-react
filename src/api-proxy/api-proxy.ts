import {Character, CharactersResponse} from "../domain";

export interface ApiProxy{
    getCharacters(page?: number): Promise<CharactersResponse>;
    getCharacter(id: number): Promise<Character>
}
