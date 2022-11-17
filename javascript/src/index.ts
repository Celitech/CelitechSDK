import { getAxiosInstance } from "./axios/axios";
import { Customers } from "./classes/Customers";
import { Destinations } from "./classes/Destinations";
import { Purchases } from "./classes/Purchases";
import { Packages } from "./classes/Packages";
import { Esim } from "./classes/Esim";
import { Sessions } from "./classes/Sessions";

interface Credentials {
  clientId: string;
  clientSecret: string;
}

export class Celitech {
  public readonly destinations;
  public readonly purchases;
  public readonly packages;
  public readonly customers;
  public readonly esim;
  public readonly sessions;

  public constructor({ clientId, clientSecret }: Credentials) {
    const axiosInstance = getAxiosInstance(clientId, clientSecret);

    this.destinations = new Destinations(axiosInstance);
    this.purchases = new Purchases(axiosInstance);
    this.packages = new Packages(axiosInstance);
    this.customers = new Customers(axiosInstance);
    this.esim = new Esim(axiosInstance);
    this.sessions = new Sessions(axiosInstance);
  }
}
