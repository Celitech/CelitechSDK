import { AxiosInstance } from "axios";

/* eslint-disable @typescript-eslint/naming-convention */

export interface Destination {
  name: string;
  destination: string;
}

export interface DestinationDetails {
  name: string;
  destination: string;
  iana_timezone: string;
}

export type DestinationsListResponse = {
  destinations: Destination[];
};

export type DestinationsDetailsListResponse = {
  destinations: DestinationDetails[];
};

export class Destinations {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async list(): Promise<DestinationsListResponse> {
    const response = await this.axiosInstance.get("/destinations");
    return response.data;
  }

  public async listDetails(): Promise<DestinationsDetailsListResponse> {
    const response = await this.axiosInstance.get("/destinations/details");
    return response.data;
  }
}
