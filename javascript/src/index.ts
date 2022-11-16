import { getAxiosInstance } from "./axios/axios";
import { Customers } from "./classes/Customers";
import { Destinations } from "./classes/Destinations";
import { Packages } from "./classes/Packages";

interface Credentials {
  clientId: string;
  clientSecret: string;
}
export class Celitech {
  public readonly destinations;
  //public readonly purchases;
  public readonly packages;
  public readonly customers;

  public constructor({ clientId, clientSecret }: Credentials) {
    const axiosInstance = getAxiosInstance(clientId, clientSecret);

    this.destinations = new Destinations(axiosInstance);
    this.packages = new Packages(axiosInstance);
    this.customers = new Customers(axiosInstance);
  }
}
