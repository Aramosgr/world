import { SET_HI } from '../types';
import WorldService from '../../services/worldService';

export const worldService = new WorldService();
export const setHi = (hi: string) => ({ type: SET_HI, hi });


export const getPlayer = () => {
  return (dispatch: any) => {
    worldService
      .getPlayer()
      .then((response: any) => {
        dispatch(setHi(response.data.sopita));
      })
      .catch((error: any) => {

      });
  };
};
