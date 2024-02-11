import { buildSchema } from "graphql";
import launchTypes from "./launch";

const schema = buildSchema(`
  ${launchTypes}

  type Query {
    launches: [Launch]
    launch(id: ID!): Launch
    favorites: [Launch]
  }

  type Mutation {
    addFavorite(id: ID!): Launch
  }
`);

export default schema;
