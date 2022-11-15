import { getAxiosInstance } from "./axios/axios";
import { Destinations } from "./classes/Destinations";
import { Purchases } from "./classes/Purchases";

interface Credentials {
  clientId: string;
  clientSecret: string;
}

export class Celitech {
  public readonly destinations;
  public readonly purchases;
  //public readonly packages;

  public constructor({ clientId, clientSecret }: Credentials) {
    const axiosInstance = getAxiosInstance(clientId, clientSecret);

    this.destinations = new Destinations(axiosInstance);
    this.purchases = new Purchases(axiosInstance);
  }
}
