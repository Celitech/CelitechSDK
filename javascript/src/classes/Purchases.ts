import { AxiosInstance } from "axios";

export interface CreatePurchaseRequest {
  destination: string;
  dataLimitInGB: number;
  /**
   * Start date of the package's validity in the format 'yyyy-MM-dd'.
   * This date can be set to the current day or any day within the next 12 months.
   */
  startDate: string;
  /**
   * End date of the package's validity in the format 'yyyy-MM-dd'.
   * End date can be maximum 60 days after Start date.
   */
  endDate: string;
  /**
   * @deprecated
   */
  startTime: number;
  /**
   * @deprecated
   */
  endTime: number;
  customerId?: string;
  email?: string;
  src?: string;
}

export interface CreatePurchaseResponse {
  purchase: {
    id: string;
    packageId: string;
    startDate: string;
    endDate: string;
  };
  profile: {
    iccid: string;
    activationCode: string;
  };
}

export interface EditPurchaseRequest {
  purchaseId: string;
  startDate: string;
  endDate: string;
  /**
   * @deprecated
   */
  startTime?: number;
  /**
   * @deprecated
   */
  endTime?: number;
}

export interface EditPurchaseResponse {
  purchaseId: string;
  newStartDate: string;
  newEndDate: string;
}

export interface ListPurchasesRequest {
  iccid?: string;
  /**
   * Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   */
  afterDate?: string;
  /**
   * End date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   */
  beforeDate?: string;
  customerId?: string;
  afterCursor?: string;
  limit?: number;
  email?: string;
  /**
   * @deprecated
   */
  before?: number;
  /**
   * @deprecated
   */
  after?: number;
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
    destinationName: string;
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
  dataLimitInGB: number;
  /**
   * Start date of the package's validity in the format 'yyyy-MM-dd'.
   * This date can be set to the current day or any day within the next 12 months.
   */
  startDate: string;
  /**
   * End date of the package's validity in the format 'yyyy-MM-dd'.
   * End date can be maximum 60 days after Start date.
   */
  endDate: string;
  /**
   * @deprecated
   */
  startTime: number;
  /**
   * @deprecated
   */
  endTime: number;
  email?: string;
  src?: string;
}

export interface TopUpResponse {
  purchase: {
    id: string;
    packageId: string;
    startDate: string;
    endDate: string;
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
