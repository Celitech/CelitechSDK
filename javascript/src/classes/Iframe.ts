/*
 * This Class generates an auth tokn for the iframe
 */

import { AxiosInstance } from "axios";

interface AuthResponse {
  token: string;
}

export class Iframe {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  //returns a token response
  public async auth(): Promise<AuthResponse> {
    const response = await this.axiosInstance.get("iframe/token");
    return response.data;
  }
}
