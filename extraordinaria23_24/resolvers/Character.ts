import { GraphQLError } from "graphql"
import { APICharacter, APIEpisode, APILocation } from "../types.ts";

export const Character = {
    episode: async(parent:APICharacter):Promise<APIEpisode[]>=> {
        const results = await Promise.all(parent.episode.map(async (e)=>{
            const response = await fetch(e);
            if(response.status!=200) throw new GraphQLError("No character found whith id:"+e, {extensions:{code:"NOT_FOUND"}});
            return await response.json() as APIEpisode;
        }))
        return results;
    },
    location: async(parent:APICharacter):Promise<APILocation> => {
        const url = parent.location.url;
        const response = fetch(url);
        return (await response).json()
    },
    origin: async(parent:APICharacter):Promise<APILocation> => {
        const url = parent.origin.url;
        const response = fetch(url);
        return (await response).json()
    }
}