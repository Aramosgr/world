interface IRoute {
  name: string;
  path: string;
}

export const home: IRoute = {
  name: 'Home',
  path: '/',
};
export const error: IRoute = {
  name: 'Error',
  path: '/error',
};
