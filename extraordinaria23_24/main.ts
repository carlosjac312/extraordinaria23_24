import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"
import { typeDefs } from "./gql/schema.ts"
import { Character } from "./resolvers/Character.ts";
import { Episode } from "./resolvers/Episode.ts";
import { Location } from "./resolvers/Location.ts";
import { Query } from "./resolvers/query.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Character,
    Episode,
    Location,
    Query
  },
});

const {url} = await startStandaloneServer(server);
console.info(`Server ready at ${url}`);