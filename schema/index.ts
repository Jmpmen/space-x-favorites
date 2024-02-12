import { buildSchema } from "graphql";
import launchTypes from './launch';

const schema = buildSchema(`
  ${launchTypes}
  type Query {
    launches: [Launch]
    launch(id: Int!): Launch
    favorites: [Launch]
  }

  type Mutation {
    addFavorite(id: Int!): Launch!
    removeFavorite(id: Int!): Int!
  }
`);

export default schema;
