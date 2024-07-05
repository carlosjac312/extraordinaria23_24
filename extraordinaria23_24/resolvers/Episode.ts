import { GraphQLError } from "graphql";
import { APICharacter, APIEpisode } from "../types.ts";

export const Episode={
    characters: async(parent:APIEpisode):Promise<APICharacter[]> => {
        return await Promise.all(parent.characters.map(async (e)=>{
            const response = await fetch(e);
            if(response.status!=200) throw new GraphQLError("No character found whith id:"+e, {extensions:{code:"NOT_FOUND"}});
            return await response.json() as APICharacter;
        }))
    }
}