export interface VariantOption {
  type: string;
  value: string;
}

export interface FormDataProduct {
  title: string;
  description: string;
  price: string;
  comparePrice: string;
  costPerItem: string;
  profit: string;
  margin: string;
  quantity: string;
  sku: string;
  barcode: string;
  weight: string;
  weightUnit: string;
  seoTitle: string;
  seoDescription: string;
  status: 'Active' | 'Draft' | 'Archived';
  productType: string;
  vendor: string;
  collections: string;
  tags: string;
  trackQuantity: boolean;
  continueSelling: boolean;
  isPhysicalProduct: boolean;
  chargeTax: boolean;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isList: boolean;
  isCode: boolean;
  alignment: string;
  showImageDialog?: boolean;
  showLinkDialog?: boolean;
  format: string;
  media: string[];
  variants?: VariantOption[];
  publishDate: string; 
  channels: string[];
}
