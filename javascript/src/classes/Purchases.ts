import { AxiosInstance } from "axios";

export interface CreatePurchaseRequest {
  destination: string;
  dataLimitInGB: number;
  startTime: number;
  endTime: number;
  customerId?: string;
  sessionId?: string;
  email?: string;
  src?: string;
}

export interface CreatePurchaseResponse {
  purchase: {
    id: string;
    packageId: string;
    startTime: number;
    endTime: number;
  };
  profile: {
    iccid: string;
    activationCode: string;
  };
}

export interface EditPurchaseRequest {
  purchaseId: string;
  startTime: number;
  endTime: number;
}

export interface EditPurchaseResponse {
  purchaseId: string;
  newStartTime: number;
  newEndTime: number;
}

export interface ListPurchasesRequest {
  customerId?: string;
  afterCursor?: string;
  limit?: number;
  before?: number;
  after?: number;
  email?: string;
}

export interface Purchase {
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

export interface ListPurchasesResponse {
  purchases: Purchase[];
  afterCursor: string | null;
}

export interface CheckConsumptionRequest {
  purchaseId: string;
}

export interface CheckConsumptionResponse {
  dataUsageRemainingInBytes: number;
  status: string;
}

export interface TopUpRequest {
  iccid: string;
  destination: string;
  dataLimitInGB: number;
  startTime: number;
  endTime: number;
  email?: string;
  src?: string;
}

export interface TopUpResponse {
  purchase: {
    id: string;
    packageId: string;
    startTime: number;
    endTime: number;
  };
  profile: {
    iccid: string;
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
    return response.data;
  }
  public async topUp(request: TopUpRequest): Promise<TopUpResponse> {
    const response = await this.axiosInstance.post("/purchases/topup", request);
    return response.data;
  }
}
