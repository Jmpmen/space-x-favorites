import graphqlRequest from "./graphql";
import { GET_LAUNCHES } from "./queries";

const getLaunches = () => graphqlRequest(GET_LAUNCHES);

// const updateLaunch = (id, data) => graphqlRequest(UPDATE_LAUNCH, { id, data });

export { getLaunches };
