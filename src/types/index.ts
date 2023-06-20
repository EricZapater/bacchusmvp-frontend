export interface AuthenticationResponse {
  token: string;
  refreshToken: string;
  result: boolean;
  errors: Array<string>;
}

export interface Region {
  id: string;
  nm: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  disabled: boolean;
  dueDays: number;
  paymentDay: number;
  numberOfPayments: number;
  frequency: number;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  purchaseInvoiceCounter: number;
  disabled: boolean;
}

export interface Tax {
  id: string;
  name: string;
  percentatge: number;
  disabled: boolean;
}

export interface File {
  entity: string;
  entityId: string;
  type: number;
  size: number;
  path: string;
  id: string;
  createdOn: string;
  updatedOn: string;
  disabled: boolean;
}
