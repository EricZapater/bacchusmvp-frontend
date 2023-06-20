import { AxiosInstance } from "axios";
import { File } from "../../types";
import apiClient, { logException } from "../api.client";

export class FileService {
  public apiClient: AxiosInstance;
  private resource: string;
  constructor() {
    this.apiClient = apiClient;
    this.resource = "/File";
  }

  public async GetEntityFiles(
    entity: string,
    id: string
  ): Promise<any | Array<File>> {
    let response = await this.apiClient.get(
      `${this.resource}?entity=${entity}&entityId=${id}`
    );
    if (response.status === 200) {
      return response.data;
    }
  }

  public async Download(file: File): Promise<any> {
    let response = await this.apiClient.post(
      `${this.resource}/Download`,
      file,
      { responseType: "blob" }
    );
    if (response.status === 200) {
      return response.data;
    }
  }

  public async Upload(file: Blob, entity: string, id: string): Promise<any> {
    const formData = new FormData();
    formData.append("entity", entity);
    formData.append("id", id);
    formData.append("file", file);

    let response = await this.apiClient.post(
      `${this.resource}/Upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  }

  public async Delete(id: string): Promise<boolean> {
    let response = await this.apiClient.delete(`${this.resource}/${id}`);
    return response.status === 200;
  }
}
