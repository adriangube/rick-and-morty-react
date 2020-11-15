import {Character, CharactersResponse} from "../domain";

export interface ApiProxy{
    getCharacters(): Promise<CharactersResponse>;
    getCharacter(id: number): Promise<Character>
}
