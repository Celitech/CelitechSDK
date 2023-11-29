import { AxiosInstance } from "axios";

export interface EsimRequest {
  iccid: string;
}

export interface EsimStatusResponse {
  esim: {
    iccid: string;
    smdpAddress: string;
    manualActivationCode: string;
    status: string;
  };
}

export interface EsimDeviceResponse {
  device: {
    oem: string;
    hardwareName: string;
    hardwareModel: string;
    eid: string;
  };
}

export interface History {
  status: string;
  statusDate: string;
}

export interface EsimHistoryResponse {
  esim: {
    iccid: string;
    history: History[];
  };
}

export interface EsimMACResponse {
  esim: {
    iccid: string;
    smdpAddress: string;
    manualActivationCode: string;
  };
}

export interface EsimCodesResponse {
  eSIM: {
    iccid: string;
    activationCode: string;
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

  public async codes(request: EsimRequest): Promise<EsimCodesResponse> {
    const response = await this.axiosInstance.get(
      `/esim/${request.iccid}/codes`
    );
    return response.data;
  }
}
