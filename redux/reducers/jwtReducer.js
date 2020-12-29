import { UPDATE_JWT, LOGOUT } from "../actions/types";

const jwtReducer = (state = null, action) => {
  if (action.type === UPDATE_JWT) {
    return action.payload.jwt;
  }
  if (action.type === LOGOUT) {
    return null;
  }
  return state;
};

export default jwtReducer;
