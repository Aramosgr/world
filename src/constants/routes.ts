import { Home, People, Error } from '@material-ui/icons';


export const routes = {
  home: {
    name: 'Home',
    path: '/',
    icon: Home,
  },
  worldmap: {
    name: 'WorldMap',
    path: '/world-map',
    icon: People
  },
  error: {
    name: 'Error',
    path: '/error',
    icon: Error
  }
};