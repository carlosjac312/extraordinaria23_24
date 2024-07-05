import { GraphQLError } from "graphql";
import { APICharacter, APILocation, APIEpisode } from "../types.ts";

export const Query = {
    character:async (_:unknown, args:{id:string}) :Promise<APICharacter> => {
        const url = ("https://rickandmortyapi.com/api/character/"+args.id);
        const response = await fetch(url);
        const result = await response.json();
        if(response.status!=200) throw new GraphQLError("No character found whith id:"+args.id, {extensions:{code:"NOT_FOUND"}});
        return await result as APICharacter;
    },
    charactersByIds: async (_:unknown, args:{ids:string[]}) :Promise<APICharacter[]>=>{
        const result = await Promise.all(args.ids.map(async (e)=>{
            const url = ("https://rickandmortyapi.com/api/character/"+e);
            const response = await fetch(url);
            if(response.status!=200) throw new GraphQLError("No character found whith id:"+args.ids, {extensions:{code:"NOT_FOUND"}});
            return await response.json() as APICharacter;
        }))
        return result;
    },
}