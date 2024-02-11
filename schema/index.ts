import { buildSchema } from "graphql";
import launchTypes from "./launch";

const schema = buildSchema(`
  ${launchTypes}

  type Query {
    launches: [Launch]
    launch(id: ID!): Launch
    favorites: [Favorite]
  }

  type Mutation {
    addFavorite(launch_id: Int!): Favorite!
  }
`);

export default schema;
