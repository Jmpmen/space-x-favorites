import { buildSchema } from 'graphql';
import launch from './launch';
import rocket from './rocket';
// ... other imports ...

const schema = buildSchema(`
  ${launch}
  ${rocket}
  
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