import { APPLICATION_IS_READY } from "./ApplicationActions";

const initialState = { isReady: false };

const application = (state = initialState, action = {}) => {
  switch (action.type) {
    case APPLICATION_IS_READY:
      return {
        ...state,
        isReady: action.isReady,
      };
    default:
      return {
        ...state,
      };
  }
};

export default application;
