import {
  CreateSalesHeaderRequest,
  SalesOrderDetail,
  SalesOrderHeader,
} from "../types";
import apiClient from "../../../api/api.client";
import BaseService from "../../../api/base.service";
import { GenericResponse } from "../../../types";

export class SalesOrderDetailService extends BaseService<SalesOrderDetail> {}

export class SalesOrderHeaderService extends BaseService<SalesOrderHeader> {
  async Create(
    request: CreateSalesHeaderRequest
  ): Promise<GenericResponse<SalesOrderHeader> | undefined> {
    const endpoint = `${this.resource}`;
    const response = await this.apiClient.post(endpoint, request);
    if (response.status === 200) {
      return response.data as GenericResponse<SalesOrderHeader>;
    }
  }

  async GetBetweenDates(
    startTime: string,
    endTime: string
  ): Promise<Array<SalesOrderHeader> | undefined> {
    const endpoint = `${this.resource}?startTime=${startTime}&endTime=${endTime}`;
    const response = await apiClient.get(endpoint);
    if (response.status === 200) {
      return response.data as Array<SalesOrderHeader>;
    }
  }

  async GetBetweenDatesAndCustomer(
    startTime: string,
    endTime: string,
    customerId: string
  ): Promise<Array<SalesOrderHeader> | undefined> {
    const endpoint = `${this.resource}?startTime=${startTime}&endTime=${endTime}&customerId=${customerId}`;
    const response = await apiClient.get(endpoint);
    if (response.status === 200) {
      return response.data as Array<SalesOrderHeader>;
    }
  }

  async CreateDetail(request: SalesOrderDetail): Promise<boolean> {
    const endpoint = `${this.resource}/Detail`;
    const response = await apiClient.post(endpoint, request);
    return response.status === 200;
  }

  async UpdateDetail(request: SalesOrderDetail): Promise<boolean> {
    const endpoint = `${this.resource}/Detail/${request.id}`;
    const response = await apiClient.put(endpoint, request);
    return response.status === 200;
  }

  async DeleteDetail(request: SalesOrderDetail): Promise<boolean> {
    const endpoint = `${this.resource}/Detail/${request.id}`;
    const response = await apiClient.delete(endpoint);
    return response.status === 200;
  }
}