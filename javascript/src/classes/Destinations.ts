import { AxiosInstance } from "axios";

/* eslint-disable @typescript-eslint/naming-convention */

export interface DestinationsListRequest {
  tags?: string;
}

export interface Destination {
  name: string;
  destination: string;
}

export type DestinationsListResponse = {
  destinations: Destination[];
};

export interface DestinationsDetailsListRequest {
  tags?: string;
}

export interface DetailedDestination {
  name: string;
  destination: string;
  iana_timezone: string;
}

export type DestinationsDetailsListResponse = {
  destinations: DetailedDestination[];
};

export class Destinations {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async list(
    request?: DestinationsListRequest
  ): Promise<DestinationsListResponse> {
    if (request) {
      const response = await this.axiosInstance.get("/destinations", {
        params: request,
      });
      return response.data;
    }

    const response = await this.axiosInstance.get("/destinations");
    return response.data;
  }

  public async listDetails(
    request?: DestinationsDetailsListRequest
  ): Promise<DestinationsDetailsListResponse> {
    if (request) {
      const response = await this.axiosInstance.get("/destinations/details", {
        params: request,
      });
      return response.data;
    }

    const response = await this.axiosInstance.get("/destinations/details");
    return response.data;
  }
}
