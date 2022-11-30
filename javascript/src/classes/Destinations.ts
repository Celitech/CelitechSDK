import { AxiosInstance } from "axios";

export interface Destination {
  name: string;
  destination: string;
}

export type DestinationsListResponse = {
  destinations: Destination[];
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
}
