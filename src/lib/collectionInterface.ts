import { FormDataProduct } from "./productInterface";

export interface FormDataCollection {
  title: string;
  description: string;
  collectionType: 'manual' | 'automatic';
  products: string[];
  relatedProducts?: FormDataProduct[];
  sortBy: 'Best selling' | 'Newest' | 'Prize A to Z' | 'Prize Z to A';
  seoTitle: string;
  seoDescription: string;
  vendor: string;
  tags: string;
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
  media: string;
  channels: string[];
}
