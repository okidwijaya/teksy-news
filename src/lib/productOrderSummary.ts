export interface ProductOrderSummary {
  id: string; 
  product_id: string;
  variant_id?: string;
  title: string;
  variant?: string;
  sku?: string;
  vendor?: string;
  price: number;
  quantity: number;
}
