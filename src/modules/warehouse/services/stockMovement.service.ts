import { logException } from "../../../api/api.client";
import BaseService from "../../../api/base.service";
import { StockMovement } from "../types";

export class StockMovementService extends BaseService<StockMovement> {
  async Create(request: StockMovement): Promise<boolean> {
    let result: boolean = false;
    try {
      const endpoint = `${this.resource}`;
      const response = await this.apiClient.post(endpoint, request);
      if (response.status === 200 || response.status === 201) {
        result = true;
      }
    } catch (err) {
      logException(err);
    }
    return result;
  }

  async GetBetweenDates(
    startTime: string,
    endTime: string
  ): Promise<Array<StockMovement> | undefined> {
    const endpoint = `${this.resource}?startTime=${startTime}&endTime=${endTime}`;
    const response = await this.apiClient.get(endpoint);
    if (response.status === 200) {
      return response.data as Array<StockMovement>;
    }
  }
}
