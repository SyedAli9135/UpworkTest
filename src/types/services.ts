export interface GetProductsPayload {
  limit?: number;
  page?: number;
  search?: string;
}

export type GetProductsService = (payload: GetProductsPayload) => Promise<any>;
