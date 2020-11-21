import path from "path";
import {pactWith} from "jest-pact";
import {Character, CharactersResponse} from "../domain";
import {Api} from "./api";
import {
    characterDetailRequest, characterDetailResponse, characterDetailResponseBody,
    charactersRequest,
    charactersResponse,
    charactersResponseBody
} from "./api.pact.fixtures";


pactWith({
    consumer: 'rickMortyReact',
    provider: 'rickMortyApi',
    log: path.resolve(process.cwd(), 'src/api-proxy/logs/pact.log'),
    logLevel: "warn",
    dir: path.resolve(process.cwd(), 'src/api-proxy/pacts'),
    cors: true,
    host: 'localhost',
    port: 9000,
    spec: 2
}, provider => {
    let api: Api;
    let page: number;
    let characterId: number;
    beforeEach(() => {
       api = new Api(provider.mockService.baseUrl);
       page = 1;
       characterId = 1;
    });
    describe("Gettting characters", () => {
        test('Characters exist', async() => {
            await provider.addInteraction({
                state: 'Characters exist',
                uponReceiving: 'Get Characters',
                withRequest: charactersRequest,
                willRespondWith: charactersResponse
            });
            const result: CharactersResponse = await api.getCharacters();
            expect(result).toEqual(charactersResponseBody);
        });
    });
    describe("Getting character 1 detail", () => {
        test('Character 1 exist', async() => {
            await provider.addInteraction({
                state: 'Character 1 exist',
                uponReceiving: 'Get character with id=1',
                withRequest: characterDetailRequest,
                willRespondWith: characterDetailResponse
            });
            const result: Character = await api.getCharacter(1);
            expect(result).toEqual(characterDetailResponseBody);
        });
    })
})
