import graphqlRequest from "./graphql";
import {
  ADD_TO_FAVORITES,
  GET_FAVORITES,
  GET_LAUNCH,
  GET_LAUNCHES,
  REMOVE_FROM_FAVORITES,
} from './queries';

function getLaunch(id: number) {
  return graphqlRequest(GET_LAUNCH, { id });
}

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

export { addFavorite, getLaunch, getLaunches, getFavorites, removeFavorite };
