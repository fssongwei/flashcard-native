import { UPDATE_JWT, LOGOUT } from "../actions/types";

const userReducer = (state = null, action) => {
  if (action.type === UPDATE_JWT) {
    return action.payload.user;
  }
  if (action.type === LOGOUT) {
    return null;
  }
  return state;
};

export default userReducer;
