import { SET_STATE } from '../types';

export const setStatus = (status: string) => ({ type: SET_STATE, status });

/*
 * API call example

import SportsService from '../../services/sportService';

const sportService = new SportsService();

export const getEvents = (eventGroupId: number) => {
  return (dispatch: any) => {
    sportService
      .getEvents(eventGroupId)
      .then((response: any) => {
        dispatch(getEventsSuccess(response.data?.events));
      })
      .catch((error: any) => {
        dispatch(getEventsFailure(error));
      });
  };
};

*/
