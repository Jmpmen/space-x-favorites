import { buildSchema } from "graphql";
import launchTypes from "./launch";
import favoriteType from "./favorite";

const schema = buildSchema(`
  ${launchTypes}
  ${favoriteType}

  type Query {
    launches: [Launch]
    launch(id: ID!): Launch
    favorites: [Favorite]
  }

  type Mutation {
    addFavorite(id: Int!): Favorite!
  }
`);

export default schema;
