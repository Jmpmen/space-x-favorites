import graphqlRequest from "./graphql";
import { GET_FAVORITES, GET_LAUNCHES } from './queries';

function getLaunches() {
  return graphqlRequest(GET_LAUNCHES);
}
function getFavorites() {
  return graphqlRequest(GET_FAVORITES);
}

// const updateLaunch = (id, data) => graphqlRequest(UPDATE_LAUNCH, { id, data });

export { getLaunches, getFavorites };
