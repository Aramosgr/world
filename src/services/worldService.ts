import { worldProxy } from './proxies';

export default class WorldService {
  getPlayer(): Promise<Object> {
    return worldProxy.get(`/player`);
  }
}
