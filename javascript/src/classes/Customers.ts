import { AxiosInstance } from "axios";

interface CreateCustomerRequest {
  metadata: string;
}

interface CreateCustomerResponse {
  id: string;
  metadata: string;
  createdAt: number;
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
}
