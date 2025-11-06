// lib/productOrderSummary.ts
export interface ProductOrderSummary {
  id: string; // could be product_id or variant_id depending on your use
  product_id: string;
  variant_id?: string;
  title: string;
  variant?: string;
  sku?: string;
  vendor?: string;
  price: number;
  quantity: number;
}
