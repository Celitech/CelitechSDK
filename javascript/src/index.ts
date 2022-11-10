import { getAxiosInstance } from "./axios/axios";
import { Destinations } from "./classes/Destinations";

export class Celitech {
  //public readonly purchases;
  public readonly destinations;
  //public readonly packages;

  public constructor(clientId: string, clientSecret: string) {
    const axiosInstance = getAxiosInstance(clientId, clientSecret);

    this.destinations = new Destinations(axiosInstance);
  }
}
