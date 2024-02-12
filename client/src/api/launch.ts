import graphqlRequest from "./graphql";
import {
  GET_FAVORITES,
  GET_LAUNCHES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './queries';

function getLaunches() {
  return graphqlRequest(GET_LAUNCHES);
}
function getFavorites() {
  return graphqlRequest(GET_FAVORITES);
}

function addFavorite(id: number) {
  return graphqlRequest(ADD_TO_FAVORITES, { id });
}

function removeFavorite(id: number) {
  return graphqlRequest(REMOVE_FROM_FAVORITES, { id });
}

// const updateLaunch = (id, data) => graphqlRequest(UPDATE_LAUNCH, { id, data });

export { getLaunches, getFavorites, addFavorite, removeFavorite };
