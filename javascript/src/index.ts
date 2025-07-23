import { getAxiosInstance } from "./axios/axios";
import { Customers } from "./classes/Customers";
import { Destinations } from "./classes/Destinations";
import { Purchases } from "./classes/Purchases";
import { Packages } from "./classes/Packages";
import { Esim } from "./classes/Esim";
import { Sessions } from "./classes/Sessions";
import { Iframe } from "./classes/Iframe";

interface Credentials {
  clientId: string;
  clientSecret: string;
  environment?: string;
}

export class Celitech {
  public readonly destinations;
  public readonly purchases;
  public readonly packages;
  public readonly customers;
  public readonly esim;
  public readonly sessions;
  public readonly iframe;

  public constructor({
    clientId,
    clientSecret,
    environment = "PRODUCTION", //Default Value
  }: Credentials) {
    const axiosInstance = getAxiosInstance(clientId, clientSecret, environment);

    this.destinations = new Destinations(axiosInstance);
    this.purchases = new Purchases(axiosInstance);
    this.packages = new Packages(axiosInstance);
    this.customers = new Customers(axiosInstance);
    this.esim = new Esim(axiosInstance);
    this.sessions = new Sessions(axiosInstance);
    this.iframe = new Iframe(axiosInstance);
  }
}

//Interfaces
export {
  CreateCustomerRequest,
  CreateCustomerResponse,
  ListCustomersRequest,
  ListCustomersResponse,
  Customer,
} from "./classes/Customers";

export {
  DestinationsListResponse,
  Destination,
} from "./classes/Destinations";

export {
  CheckConsumptionRequest,
  CheckConsumptionResponse,
  CreatePurchaseRequest,
  CreatePurchaseResponse,
  EditPurchaseRequest,
  EditPurchaseResponse,
  ListPurchasesRequest,
  ListPurchasesResponse,
  Purchase,
  TopUpRequest,
  TopUpResponse,
} from "./classes/Purchases";

export {
  PackagesListRequest,
  PackagesListResponse,
  Package,
} from "./classes/Packages";

export {
  EsimCodesResponse,
  EsimDeviceResponse,
  EsimHistoryResponse,
  EsimMACResponse,
  EsimRequest,
  EsimStatusResponse,
  History,
} from "./classes/Esim";

export {
  CreateSessionRequest,
  CreateSessionResponse,
} from "./classes/Sessions";
