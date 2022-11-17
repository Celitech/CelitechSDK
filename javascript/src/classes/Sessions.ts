import { AxiosInstance } from "axios";

interface CreateSessionRequest {
  customerId: string;
}

interface CreateSessionResponse {
  session: {
    id: string;
    expiresAt: number;
  };
}

export class Sessions {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async create(
    request: CreateSessionRequest
  ): Promise<CreateSessionResponse> {
    const response = await this.axiosInstance.post("/sessions", request);
    return response.data;
  }
}
