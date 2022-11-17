import { AxiosInstance } from "axios";

interface EsimRequest {
  iccid: string;
}

interface EsimStatusResponse {
  esim: {
    iccid: string;
    smdpAddress: string;
    manualActivationCode: string;
    status: string;
  };
}

interface EsimDeviceResponse {
  device: {
    oem: string;
    hardwareName: string;
    hardwareModel: string;
    eid: string;
  };
}

interface History {
  status: string;
  date: number;
}

interface EsimHistoryResponse {
  esim: {
    iccid: string;
    history: History[];
  };
}

interface EsimMACResponse {
  esim: {
    iccid: string;
    smdpAddress: string;
    manualActivationCode: string;
  };
}

export class Esim {
  private axiosInstance;

  public constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  public async status(request: EsimRequest): Promise<EsimStatusResponse> {
    const response = await this.axiosInstance.get("/esim", {
      params: request,
    });
    return response.data;
  }

  public async device(request: EsimRequest): Promise<EsimDeviceResponse> {
    const response = await this.axiosInstance.get(
      `/esim/${request.iccid}/device`
    );
    return response.data;
  }

  public async history(request: EsimRequest): Promise<EsimHistoryResponse> {
    const response = await this.axiosInstance.get(
      `/esim/${request.iccid}/history`
    );
    return response.data;
  }

  public async mac(request: EsimRequest): Promise<EsimMACResponse> {
    const response = await this.axiosInstance.get(`/esim/${request.iccid}/mac`);
    return response.data;
  }
}
