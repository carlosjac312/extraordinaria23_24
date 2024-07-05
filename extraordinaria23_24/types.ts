export type APICharacter = {
    id:string;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    origin:locorg;
    location:locorg;
    image:string;
    episode:[string];
    created:string;
}

type locorg = {
    name:string;
    url:string;
}

export type APIEpisode = {
    id:string;
    name:string;
    air_date:string;
    episode:string;
    characters:[string];
    created:string;
}

export type APILocation = {
    id:string;
    name:string;
    type:string;
    dimension:string;
    residents:[string]
    created:string;
}