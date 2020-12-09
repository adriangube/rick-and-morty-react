import {ApolloClient, gql, InMemoryCache} from '@apollo/client';
import {Character, CharactersResponse} from "../domain";
import {ApiProxy} from "./api-proxy";

const BASE_URL: string = "https://rickandmortyapi.com/graphql";

const apolloClient = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache()
});

const GET_CHARACTER: any = gql`
query character($id: ID!){
    character(id: $id){
        id
        name
        status
        species
        gender
        origin{
            name
        }
        location{
            name
        }
        image
        created
    }
}
`

const GET_CHARACTERS: any = gql`
    query characters($page: Int){
        characters(page: $page){
            info{
                count
                pages 
                next
                prev
            }
            results{
                id
                name
                image
            }
        }
    }
`



class ApiGraphQL implements ApiProxy {
    getCharacter(id: number): Promise<Character> {
        return apolloClient.query({query: GET_CHARACTER, variables: {id}}
        ).then((x) => x?.data?.character);
    }

    getCharacters(page?: number): Promise<CharactersResponse> {
        return apolloClient.query({query: GET_CHARACTERS, variables: {page: page}}
        ).then((x) => x?.data?.characters);
    }
}

export const apiGraphql = new ApiGraphQL();
