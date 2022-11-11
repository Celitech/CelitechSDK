import { AxiosInstance } from "axios";

interface Destination {
  name: string;
  destination: string;
}

type DestinationsListResponse = Destination[];

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
