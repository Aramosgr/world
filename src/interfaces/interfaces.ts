// Add any application specific interfaces here, any interfaces that could be used by other applications should be added to the ig-types library
export interface IRootState {
  AppReducer: any;
  UserReducer: any;
}

export interface IRoute {
  name: string;
  path: string;
  icon: Function;
}