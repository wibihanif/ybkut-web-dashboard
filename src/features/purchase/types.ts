export interface TotalPurchaseOrderDetail {
  purchaseOrderName: string;
  amountTotal: string;
  state: string;
  partnerName: string;
}

export interface TotalApproveDetail {
  purchaseOrderName: string;
  amountTotal: string;
  state: string;
  partnerName: string;
  user: string;
}

export interface TotalRfqDetail {
  purchaseOrderName: string;
  amountTotal: string;
  state: string;
  partnerName: string;
}

export interface TotalPendingPRDetail {
  name: string;
  state: string;
  purchaseCount: string;
  estimatedCost: string;
}

export interface TotalPendingPODetail {
  purchaseOrderName: string;
  amountTotal: string;
  state: string;
  partnerName: string;
  user: string;
}

export interface TotalPendingReceiveDetail {
  name: string;
  origin: string;
  state: string;
}
