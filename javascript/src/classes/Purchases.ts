import { AxiosInstance } from "axios";

interface CreatePurchaseRequest {
  destination: string;
  dataLimitInGB: number;
  startTime: number;
  endTime: number;
  customerId?: number;
  sessionId?: number;
}

interface CreatePurchaseResponse {
  purchase: {
    id: string;
    packageId: string;
    startTime: 0;
    endTime: 0;
  };
  profile: {
    iccid: string;
    activationCode: string;
  };
}

export class Purchases {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async create(
    request: CreatePurchaseRequest
  ): Promise<CreatePurchaseResponse> {
    const response = await this.axiosInstance.post("/purchases", request);
    return response.data;
  }
}
