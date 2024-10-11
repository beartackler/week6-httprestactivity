import axios, { Axios, AxiosResponse } from 'axios';

export class HttpUtil {
  private _axios: Axios;

  constructor(baseURL: string) {
    this._axios = axios.create({
      baseURL: baseURL
    });
  }


  public async getRequest<T>(): Promise<T> {
    const response: AxiosResponse<T> = await this._axios.get('');
    
    return response.data;
  }

  public async postRequest<S, T>(requestBody: T): Promise<S> {

    const response: AxiosResponse<S> = await this._axios.post('', requestBody);

    return response.data;
  }
}