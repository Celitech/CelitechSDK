import { AxiosInstance } from "axios";

export class Destinations {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async getDestinations() {
    const response = await this.axiosInstance.get("/destinations");
    return response;
  }
}
