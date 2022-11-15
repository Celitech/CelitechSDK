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

interface EditPurchaseRequest {
  purchaseId: string;
  startTime: number;
  endTime: number;
}

interface EditPurchaseResponse {
  purchaseId: string;
  newStartTime: number;
  newEndTime: number;
}

interface ListPurchasesRequest {
  customerId?: string;
  afterCursor?: string;
  limit?: number;
  before?: number;
  after?: number;
}

interface Purchase {
  id: string;
  anonymous: boolean;
  startTime: number;
  endTime: number;
  createdAt: number;
  customer: {
    id: string;
  };
  package: {
    id: string;
    dataLimitInBytes: number;
    destination: string;
    priceInCents: number;
  };
  esim: {
    iccid: string;
  };
}

interface ListPurchasesResponse {
  purchases: Purchase[];
  afterCursor: string;
}

interface CheckConsumptionRequest {
  purchaseId: string;
}

interface CheckConsumptionResponse {
  dataUsageRemainingInBytes: number;
  status: string;
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

  public async edit(
    request: EditPurchaseRequest
  ): Promise<EditPurchaseResponse> {
    const response = await this.axiosInstance.post("/purchases/edit", request);
    return response.data;
  }

  public async list(
    request?: ListPurchasesRequest
  ): Promise<ListPurchasesResponse> {
    if (request) {
      const response = await this.axiosInstance.get("/purchases", {
        params: request,
      });
      return response.data;
    }

    const response = await this.axiosInstance.get("/purchases");
    return response.data;
  }

  public async checkConsumption(
    request: CheckConsumptionRequest
  ): Promise<CheckConsumptionResponse> {
    const response = await this.axiosInstance.get(
      `/purchases/${request.purchaseId}/consumption`
    );
    console.log("here =>", request.purchaseId);
    return response.data;
  }
}
