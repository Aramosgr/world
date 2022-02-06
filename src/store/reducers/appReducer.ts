import { SET_HI } from '../types';

import appState from '../appState';

const appReducer = (state: any = appState, action: any): any => {
  switch (action.type) {
    case SET_HI:
      return { ...state, hi: action.hi };
    default:
      return state;
  }
};

export default appReducer;
