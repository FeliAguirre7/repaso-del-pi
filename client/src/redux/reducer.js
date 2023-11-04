import { GET_USERS, GET_USER } from "./actions";

const initialState = {
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_USER:

    default:
      return { ...state };
  }
};

export default rootReducer;
