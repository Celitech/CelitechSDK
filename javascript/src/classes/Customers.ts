import { AxiosInstance } from "axios";

interface CreateCustomerRequest {
  metadata: string;
}

interface CreateCustomerResponse {
  id: string;
  metadata: string;
  createdAt: number;
}

interface ListCustomersRequest {
  id?: string;
  afterCursor?: string;
  limit?: number;
  before?: number;
  after?: number;
}

interface Customer {
  id: string;
  metadata: string;
  createdAt: number;
}

interface ListCustomersResponse {
  afterCursor: string;
  customers: Customer[];
}

export class Customers {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async create(
    request: CreateCustomerRequest
  ): Promise<CreateCustomerResponse> {
    const response = await this.axiosInstance.post("/customers", request);
    return response.data;
  }

  public async list(
    request?: ListCustomersRequest
  ): Promise<ListCustomersResponse> {
    if (request) {
      const response = await this.axiosInstance.get("/customers", {
        params: request,
      });
      return response.data;
    }

    const response = await this.axiosInstance.get("/customers", {
      params: request,
    });
    return response.data;
  }
}
