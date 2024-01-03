export interface StockOpname {
  date: Date;
  name: string;
  state: string;
  barcode: string;
  defaultCode: string;
}

export interface CurrentStock {
  name: string;
  defaultCode: string;
  barcode: string;
  sum: string;
}

export interface TotalVariant {
  name: string;
  total: string;
}

export interface ProductScraps {
  dateDone: Date;
  name: string;
  scrapQuantity: number;
  state: string;
}

export interface TotalProductDetail {
  name: string;
  defaultCode: string | null;
}

export interface TotalValuesDetail {
  productName: string;
  quantity: string;
  uomName: string;
  value: string;
  ppCreateDate: Date;
  ptCreateDate: Date;
  svlCreateDate: Date;
  uomCreateDate: Date;
}

export interface PendingTransferDetail {
  stockPickingName: string;
  stockLocationName: string;
  stockLocationCompleteName: string;
  partnerName: string;
  origin: string;
  state: string;
}

export interface PendingReceiptDetail {
  stockPickingName: string;
  stockLocationName: string;
  stockLocationCompleteName: string;
  partnerName: string;
  origin: string;
  state: string;
}
