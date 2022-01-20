import { SET_STATE } from '../types';

import appState from '../appState';

const appReducer = (state: any = appState, action: any): any => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default appReducer;
