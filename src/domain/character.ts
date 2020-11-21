
export type CharacterStatusType = 'Alive' | 'Dead' | 'unknown';

export type CharacterGenderType = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Origin{
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface Character{
    id: number;
    name: string;
    status: CharacterStatusType;
    species: string;
    type: string;
    gender: CharacterGenderType;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string | string[];
    created: string;
}

export interface ResponseInfo {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
}

export interface CharactersResponse {
    info: ResponseInfo;
    results: Character[];
}
