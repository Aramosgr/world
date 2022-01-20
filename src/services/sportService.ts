import { sportProxy } from './proxies';

export default class SportService {
  getEvents(eventGroupId: number): Promise<Object> {
    return sportProxy.get(`/events?eventGroupId=${eventGroupId}`);
  }
}
