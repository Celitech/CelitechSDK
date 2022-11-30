import { AxiosInstance } from "axios";

export interface PackagesListRequest {
  destination?: string;
  startTime?: number;
  endtime?: number;
  duration?: number;
  afterCursor?: string;
  limit?: number;
}

export interface Package {
  id: string;
  destination: string;
  dataLimitInBytes: number;
  minDays: number;
  maxDays: number;
  priceInCents: number;
}

export interface PackagesListResponse {
  packages: Package[];
  afterCursor: string | null;
}

export class Packages {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async list(
    request?: PackagesListRequest
  ): Promise<PackagesListResponse> {
    if (request) {
      const response = await this.axiosInstance.get("/packages", {
        params: request,
      });
      return response.data;
    }

    const response = await this.axiosInstance.get("/packages");
    return response.data;
  }
}
