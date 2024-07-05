import { GraphQLError } from "graphql";
import { APICharacter, APILocation } from "../types.ts";

export const Location={
    residents: async(parent:APILocation):Promise<APICharacter[]> => {
        return await Promise.all(parent.residents.map(async (e)=>{
            const response = await fetch(e);
            if(response.status!=200) throw new GraphQLError("No character found whith id:"+e, {extensions:{code:"NOT_FOUND"}});
            return await response.json() as APICharacter;
        }))
    }
}